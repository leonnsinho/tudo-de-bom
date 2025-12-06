import { ReactNode, memo } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazyLoadSectionProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
}

const LazyLoadSection = memo(({ 
  children, 
  className = '', 
  fallback = null,
  rootMargin = '100px',
  threshold = 0.1
}: LazyLoadSectionProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    rootMargin,
    threshold,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  );
});

LazyLoadSection.displayName = 'LazyLoadSection';

export default LazyLoadSection;
