import { ref, onMounted, onUnmounted } from 'vue';

export function useResponsiveImage() {
  const isMobile = ref(false);
  const isTablet = ref(false);
  const isDesktop = ref(false);

  const checkBreakpoint = () => {
    const width = window.innerWidth;
    
    // Using your existing breakpoints from _breakpoints.scss
    isMobile.value = width < 768; // md breakpoint
    isTablet.value = width >= 768 && width < 1024; // md to lg
    isDesktop.value = width >= 1024; // lg and above
  };

  const getResponsiveImage = (mobileSrc, desktopSrc, tabletSrc = null) => {
    if (isMobile.value) return mobileSrc;
    if (isTablet.value && tabletSrc) return tabletSrc;
    return desktopSrc;
  };

  onMounted(() => {
    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkBreakpoint);
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    getResponsiveImage
  };
} 