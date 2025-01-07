import React from 'react';
import { CloseButton } from './CloseButton';
import { NavigationButton } from './NavigationButton';
import type { Photo } from '../types';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: Photo;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export function PhotoModal({
  isOpen,
  onClose,
  currentPhoto,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: PhotoModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative w-full md:w-3/5 h-[40vh] md:h-[80vh]">
          <img
            src={currentPhoto.imageUrl}
            alt={currentPhoto.title}
            className="w-full h-full object-cover md:rounded-l-lg"
          />
          <CloseButton onClose={onClose} />
          {hasPrevious && <NavigationButton direction="prev" onClick={onPrevious} />}
          {hasNext && <NavigationButton direction="next" onClick={onNext} />}
        </div>
        
        <div className="w-full md:w-2/5 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">{currentPhoto.title}</h2>
          <div className="prose max-w-none">
            {currentPhoto.content}
          </div>
        </div>
      </div>
    </div>
  );
}