import React from 'react';

interface RetroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const RetroButton: React.FC<RetroButtonProps> = ({ children, onClick, className = '', disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-8 py-3 
        bg-[#ff3399] border-t-4 border-l-4 border-[#ff99cc] border-b-4 border-r-4 border-[#cc0066]
        active:border-t-[#cc0066] active:border-l-[#cc0066] active:border-b-[#ff99cc] active:border-r-[#ff99cc]
        active:bg-[#e62e8a]
        text-white font-bold text-2xl tracking-wide font-['VT323']
        shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]
        hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]
        active:translate-y-[4px] active:translate-x-[4px] active:shadow-none
        transition-all duration-75
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};