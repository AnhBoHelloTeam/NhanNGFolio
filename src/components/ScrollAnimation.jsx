import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Wrapper component that adds scroll-triggered animations
 */
export const ScrollAnimation = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  threshold = 0.1
}) => {
  const [ref, isVisible] = useScrollAnimation({ 
    threshold,
    once: true 
  });

  const animations = {
    'fade-up': {
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      opacity: isVisible ? 1 : 0,
    },
    'fade-down': {
      transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
      opacity: isVisible ? 1 : 0,
    },
    'fade-left': {
      transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
      opacity: isVisible ? 1 : 0,
    },
    'fade-right': {
      transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
      opacity: isVisible ? 1 : 0,
    },
    'fade': {
      opacity: isVisible ? 1 : 0,
    },
    'scale': {
      transform: isVisible ? 'scale(1)' : 'scale(0.9)',
      opacity: isVisible ? 1 : 0,
    },
  };

  const style = {
    transition: `all ${duration}s ease-out ${delay}s`,
    ...animations[animation] || animations['fade-up'],
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

export default ScrollAnimation;

