// composables/useContent.js
import { ref, reactive, readonly } from 'vue';
import { marked } from 'marked';
import { load as yamlLoad } from 'js-yaml';

// Create reactive cache
const contentCache = reactive({});

function parseFrontmatter(text) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = text.match(frontmatterRegex);

  if (match) {
    try {
      // NOTE: Ensure 'yamlLoad' is defined or imported in this scope
      const frontmatter = yamlLoad(match[1]) || {};
      return {
        frontmatter,
        content: match[2],
      };
    } catch (error) {
      console.warn('Failed to parse frontmatter:', error);
      return {
        frontmatter: {},
        content: match[2],
      };
    }
  }

  return {
    frontmatter: {},
    content: text,
  };
}

export function useContent() {
  const loading = ref(false);
  const error = ref(null);

  async function loadContent(path) {
    if (contentCache[path]) {
      return contentCache[path];
    }

    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(`/content/${path}.md`);
      if (!response.ok) {
        throw new Error(
          `Failed to load content: ${response.status} ${response.statusText}`
        );
      }

      const text = await response.text();
      const { frontmatter, content } = parseFrontmatter(text);
      const html = marked(content);

      const result = {
        ...frontmatter,
        content: html,
        raw: content,
      };

      contentCache[path] = result;

      return result;
    } catch (e) {
      const errorMessage =
        e instanceof Error ? e : new Error('Unknown error occurred');
      error.value = errorMessage;
      throw errorMessage;
    } finally {
      loading.value = false;
    }
  }

  async function loadMultipleContent(paths) {
    const promises = paths.map((path) => loadContent(path));
    return Promise.all(promises);
  }

  function getCachedContent(path) {
    return contentCache[path];
  }

  function isContentCached(path) {
    return path in contentCache;
  }

  function clearCache() {
    Object.keys(contentCache).forEach((key) => {
      delete contentCache[key];
    });
  }

  function clearContentCache(path) {
    delete contentCache[path];
  }

  return {
    loadContent,
    loadMultipleContent,
    getCachedContent,
    isContentCached,
    clearCache,
    clearContentCache,
    loading: readonly(loading),
    error: readonly(error),
    cache: readonly(contentCache),
  };
}

// Specific composable for hero content
export function useHeroContent() {
  const { loadContent, loading, error } = useContent();

  async function loadHero() {
    return loadContent('components/hero');
  }

  return {
    loadHero,
    loading,
    error,
  };
}

// Helper composable for loading page content
export function usePageContent() {
  const { loadContent, loading, error } = useContent();

  async function loadPage(slug) {
    return loadContent(`pages/${slug}`);
  }

  return {
    loadPage,
    loading,
    error,
  };
}
