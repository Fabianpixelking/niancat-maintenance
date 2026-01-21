import React from 'react';

interface WindowsModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export const WindowsModal: React.FC<WindowsModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[1px]">
      <div className="w-[300px] bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black p-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
        
        {/* Title Bar */}
        <div className="bg-[#000080] px-2 py-1 flex justify-between items-center mb-4">
          <span className="text-white font-bold text-lg tracking-wide">Error</span>
          <button 
            onClick={onClose}
            className="bg-[#c0c0c0] w-5 h-5 flex items-center justify-center border-t border-l border-white border-b border-r border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-sm font-bold leading-none pb-1"
          >
            x
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center p-4 gap-4">
          <div className="flex items-center justify-center gap-4 w-full">
            {/* Error Icon */}
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center border-2 border-black text-white font-bold text-2xl">
              X
            </div>
            <p className="text-black text-xl text-center leading-tight flex-1">
              {message}
            </p>
          </div>

          {/* OK Button */}
          <button 
            onClick={onClose}
            className="px-6 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-black font-bold text-lg mt-2 hover:bg-[#dcdcdc]"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};