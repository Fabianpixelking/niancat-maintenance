import React from 'react';

interface PixelCoffeeProps {
  className?: string;
}

export const PixelCoffee: React.FC<PixelCoffeeProps> = ({ className = '' }) => {
  return (
    <svg 
      viewBox="0 0 32 32" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
    >
      {/* Steam */}
      <rect x="10" y="4" width="2" height="3" className="text-[#8edcb3] animate-pulse" style={{ animationDelay: '0s' }} />
      <rect x="15" y="3" width="2" height="3" className="text-[#8edcb3] animate-pulse" style={{ animationDelay: '0.5s' }} />
      <rect x="20" y="4" width="2" height="3" className="text-[#8edcb3] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Cup Body */}
      <path d="M8 10 H22 V22 H20 V24 H12 V22 H8 V10 Z" className="text-[#4ade80]" />
      
      {/* Handle */}
      <path d="M22 12 H26 V20 H22 V18 H24 V14 H22 V12 Z" className="text-[#4ade80]" />
      
      {/* Coffee Surface hint */}
      <rect x="9" y="11" width="12" height="2" className="text-[#2f5a3a]" />
    </svg>
  );
};