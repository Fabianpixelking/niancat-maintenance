import React, { useState } from 'react';
import { RetroButton } from './components/RetroButton';
import { WindowsModal } from './components/WindowsModal';
import { generateDeveloperExcuse } from './services/geminiService';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("Nein.");
  const [isLoading, setIsLoading] = useState(false);

  const handleStatusCheck = async () => {
    setIsLoading(true);
    // 50% chance of standard "No." vs AI generated excuse for fun variety
    if (Math.random() > 0.5) {
        const excuse = await generateDeveloperExcuse();
        setModalMessage(excuse);
    } else {
        setModalMessage("Nein.");
    }
    setIsLoading(false);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#003366] text-white font-['VT323'] flex flex-col crt relative selection:bg-[#ff3399] selection:text-white">
      
      {/* Top Terminal Bar */}
      <div className="border-b border-white p-2 flex justify-between text-xl tracking-wider">
        <span>TERMINAL: Fabian_Offline_Variant</span>
        <span>| STATUS: OFFLINE</span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        
        {/* Nyan Cat Logo */}
        <div className="mb-8">
          <img 
            src="https://media1.tenor.com/m/2roX3uxz_68AAAAC/cat-space.gif" 
            alt="Nyan Cat Space"
            className="h-32 md:h-48 mx-auto object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        {/* Status Header */}
        <h1 className="text-5xl md:text-6xl mb-6 tracking-widest text-white uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
          STATUS: <span className="text-[#ff3399]">FABIAN_IS_REFUELING.</span>
        </h1>

        {/* Description */}
        <div className="text-2xl md:text-3xl text-white space-y-2 mb-8 max-w-3xl drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
          <p>Fabian ist gerade nicht am Platz und tauscht</p>
          <p>Codezeilen gegen Koffein ein. Bitte warten.</p>
        </div>

        {/* Error Codes */}
        <div className="text-2xl md:text-3xl text-white mb-12 space-y-1 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
          <p>ERROR CODE: <span className="text-[#ff3399]">0xCAFFEE.</span></p>
          <p>EXPECTED RESOLUTION: <span className="text-[#ff3399]">WHEN_THE_CUP_IS_EMPTY.</span></p>
        </div>

        {/* Action Button */}
        <div className="relative">
          <RetroButton onClick={handleStatusCheck} disabled={isLoading}>
             {isLoading ? "Prüfe..." : "Ist er schon zurück?"}
          </RetroButton>
        </div>
      </div>

      {/* Footer */}
      <div className="p-2 text-center text-[#99ccff] text-lg">
        System_Version: v0.99.1-beta // Do not disturb
      </div>

      {/* Popups */}
      <WindowsModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        message={modalMessage} 
      />
    </div>
  );
};

export default App;