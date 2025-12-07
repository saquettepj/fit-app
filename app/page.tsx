'use client';

import React, { useEffect } from 'react';
import { Navigator } from '@/components/ui/Navigator';
import { useApp } from '@/contexts/AppContext';

export default function Home() {
  const { currentView } = useApp();

  // Prevenir rolagem do navegador apenas nas telas de home e execution
  useEffect(() => {
    const shouldPreventScroll = currentView === 'home' || currentView === 'execution';
    
    if (!shouldPreventScroll) {
      // Se não deve prevenir, garantir que o body possa rolar normalmente
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      return;
    }

    // Prevenir rolagem no body e html
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    let lastTouchY = 0;
    let touchStartY = 0;

    const preventPullToRefresh = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      
      if (e.type === 'touchstart') {
        touchStartY = touchY;
        lastTouchY = touchY;
      } else if (e.type === 'touchmove') {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isScrollingDown = touchY > lastTouchY;
        const isAtTop = scrollTop === 0;
        
        // Se está no topo e arrastando para baixo, prevenir
        if (isAtTop && isScrollingDown && touchY > touchStartY) {
          e.preventDefault();
        }
        
        lastTouchY = touchY;
      }
    };

    // Prevenir comportamento padrão de touchmove quando necessário
    const preventDefault = (e: TouchEvent) => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop === 0 && e.touches[0].clientY > 0) {
        e.preventDefault();
      }
    };

    // Prevenir scroll com wheel quando está no topo
    const preventScroll = (e: WheelEvent) => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop === 0 && e.deltaY < 0) {
        e.preventDefault();
      }
    };

    // Prevenir scroll com teclado (setas, espaço, etc)
    const preventKeyboardScroll = (e: KeyboardEvent) => {
      const keys = ['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown', 'Home', 'End'];
      if (keys.includes(e.key)) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', preventPullToRefresh, { passive: false });
    document.addEventListener('touchmove', preventPullToRefresh, { passive: false });
    document.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('keydown', preventKeyboardScroll, { passive: false });

    return () => {
      // Restaurar overflow quando sair da tela
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      
      document.removeEventListener('touchstart', preventPullToRefresh);
      document.removeEventListener('touchmove', preventPullToRefresh);
      document.removeEventListener('touchmove', preventDefault);
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('keydown', preventKeyboardScroll);
    };
  }, [currentView]);

  return <Navigator />;
}

