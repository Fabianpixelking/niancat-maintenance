import React, { useMemo } from 'react';

const generateBoxShadow = (n: number) => {
  let value = '';
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    value += `${x}px ${y}px #FFF, `;
  }
  return value.slice(0, -2);
};

export const Starfield: React.FC = () => {
  // Memoize the star positions so they don't regenerate on every render
  const smallStars = useMemo(() => generateBoxShadow(150), []);
  const mediumStars = useMemo(() => generateBoxShadow(50), []);
  const largeStars = useMemo(() => generateBoxShadow(20), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Small Stars - Slow */}
      <div 
        className="w-[1px] h-[1px] bg-transparent absolute"
        style={{ 
          boxShadow: smallStars,
          animation: 'moveStars 100s linear infinite',
        }} 
      />
      {/* Small Stars Duplicate for loop (offset by 2000px if we wanted perfect loop, but simpler here just to have enough stars) */}
      
      {/* Medium Stars - Medium Speed */}
      <div 
        className="w-[2px] h-[2px] bg-transparent absolute"
        style={{ 
          boxShadow: mediumStars,
          animation: 'moveStars 50s linear infinite',
        }} 
      />

      {/* Large Stars - Fast */}
      <div 
        className="w-[3px] h-[3px] bg-transparent absolute"
        style={{ 
          boxShadow: largeStars,
          animation: 'moveStars 25s linear infinite',
        }} 
      />
    </div>
  );
};