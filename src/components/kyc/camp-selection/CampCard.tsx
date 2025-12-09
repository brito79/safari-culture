"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camp } from '@/types/kyc';

interface CampCardProps {
  camp: Camp;
  isSelected: boolean;
  onSelect: () => void;
}

export default function CampCard({ camp, isSelected, onSelect }: CampCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`
        relative cursor-pointer rounded-xl overflow-hidden shadow-lg
        transition-all duration-300 border-4
        ${isSelected 
          ? 'border-sunset-600 shadow-sunset-200 shadow-xl' 
          : 'border-transparent hover:border-stone-200 hover:shadow-xl'
        }
      `}
    >
      {/* Selected Badge */}
      {isSelected && (
        <div className="absolute top-4 right-4 z-10 bg-sunset-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
          <span>✓</span> Selected
        </div>
      )}
      
      {/* Image */}
      <div className="relative h-48 sm:h-56">
        <Image
          src={camp.image}
          alt={camp.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Region Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-stone-900">
            📍 {camp.region}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-light text-stone-900 mb-2">
          {camp.name}
        </h3>
        <p className="text-sm text-stone-600 mb-4 line-clamp-2">
          {camp.description}
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {camp.features.slice(0, 3).map((feature, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-stone-100 rounded text-xs text-stone-700"
            >
              {feature}
            </span>
          ))}
        </div>
        
        {/* Price Range & Room Types */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-200">
          <div className="flex items-center gap-2">
            <span className="text-stone-500 text-xs">Room Types:</span>
            <span className="text-stone-700 text-xs font-medium">
              {camp.roomTypes.length}
            </span>
          </div>
          <span className="text-sunset-600 font-semibold">{camp.priceRange}</span>
        </div>
      </div>
      
      {/* Hover Overlay */}
      <div className={`
        absolute inset-0 bg-sunset-600/10 opacity-0 hover:opacity-100
        transition-opacity duration-300 pointer-events-none
        ${isSelected ? 'opacity-5' : ''}
      `} />
    </motion.div>
  );
}
