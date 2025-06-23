import { ref, onMounted, onUnmounted } from 'vue';

export function useInViewport() {
  const isVisible = ref(false);
  const el = ref(null);

  let observer;

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (el.value) observer.observe(el.value);
  });

  onUnmounted(() => {
    if (observer && el.value) observer.unobserve(el.value);
  });

  return { isVisible, el };
} 