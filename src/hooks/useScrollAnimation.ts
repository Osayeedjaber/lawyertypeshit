import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return ref;
};

// Parallax scroll effect
export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        ref.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};

// Smooth scroll to element
export const smoothScrollTo = (elementId: string, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
};

// Scroll progress indicator
export const useScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (progressRef.current) {
        progressRef.current.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progressRef;
};
