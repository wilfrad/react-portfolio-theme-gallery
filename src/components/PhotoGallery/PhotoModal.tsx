import React from 'react';
import { X } from 'lucide-react';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  children: React.ReactNode;
}

export function PhotoModal({ isOpen, onClose, imageUrl, title, children }: PhotoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-4xl w-full" onClick={e => e.stopPropagation()}>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[60vh] object-cover rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div className="prose max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}