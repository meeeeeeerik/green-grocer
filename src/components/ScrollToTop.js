import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith('/product/')) {
      sessionStorage.setItem('cameFromProduct', 'true');
      window.scrollTo(0, 0);
      return;
    }

    if (pathname === '/' && sessionStorage.getItem('cameFromProduct')) {
      sessionStorage.removeItem('cameFromProduct');
      const timer = setTimeout(() => {
        const grid = document.getElementById('daily-best-sell');
        if (grid) {
          grid.scrollIntoView();
        }
      }, 0);
      return () => clearTimeout(timer);
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
