import React, { useState } from 'react';

interface PhotoCardProps {
  imageUrl: string;
  title: string;
  className?: string;
  onClick: () => void;
}

export function PhotoCard({ imageUrl, title, className = '', onClick }: PhotoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-lg ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-white p-4 font-medium">{title}</h3>
      </div>
    </div>
  );
}