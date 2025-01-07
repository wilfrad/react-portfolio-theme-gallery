import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

export function NavigationButton({ direction, onClick }: NavigationButtonProps) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  const position = direction === 'prev' ? 'left-4' : 'right-4';

  return (
    <button
      onClick={onClick}
      className={`absolute ${position} top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors z-10`}
      aria-label={direction === 'prev' ? 'Previous image' : 'Next image'}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
}