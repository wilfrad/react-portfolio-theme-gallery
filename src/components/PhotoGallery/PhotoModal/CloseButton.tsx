import React from 'react';
import { X } from 'lucide-react';

interface CloseButtonProps {
  onClose: () => void;
}

export function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      onClick={onClose}
      className="absolute right-4 top-4 p-1 rounded-full bg-white/80 hover:bg-white transition-colors z-10"
      aria-label="Close modal"
    >
      <X className="w-6 h-6" />
    </button>
  );
}