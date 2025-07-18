'use client';

import { useScrollProgress } from '@/hooks/useScrollAnimation';

export default function ScrollProgress() {
  const progressRef = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
      <div 
        ref={progressRef}
        className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  );
}
