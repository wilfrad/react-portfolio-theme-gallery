import React, { useState } from 'react';
import { PhotoCard } from './PhotoCard';
import { PhotoModal } from './PhotoModal/PhotoModal';
import type { Photo } from './types';

interface PhotoGalleryProps {
  photos: Photo[];
  columns?: number;
  gap?: number;
}

export function PhotoGallery({ photos, columns = 3, gap = 4 }: PhotoGalleryProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleClose = () => setSelectedPhotoIndex(null);
  const handlePrevious = () => setSelectedPhotoIndex(prev => prev !== null ? Math.max(0, prev - 1) : null);
  const handleNext = () => setSelectedPhotoIndex(prev => prev !== null ? Math.min(photos.length - 1, prev + 1) : null);

  return (
    <>
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gap: `${gap * 0.25}rem`,
        }}
      >
        {photos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            imageUrl={photo.imageUrl}
            title={photo.title}
            onClick={() => setSelectedPhotoIndex(index)}
          />
        ))}
      </div>

      {selectedPhotoIndex !== null && (
        <PhotoModal
          isOpen={true}
          onClose={handleClose}
          currentPhoto={photos[selectedPhotoIndex]}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={selectedPhotoIndex > 0}
          hasNext={selectedPhotoIndex < photos.length - 1}
        />
      )}
    </>
  );
}

export type { Photo };