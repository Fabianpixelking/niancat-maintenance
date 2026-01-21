import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateDeveloperExcuse = async (): Promise<string> => {
  const ai = getClient();
  
  if (!ai) {
    return "API Key fehlt. Entwickler schlafen.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generiere eine kurze, witzige, sarkastische Ein-Satz-Ausrede (max 15 Wörter) von einem Entwickler namens Fabian, warum er noch nicht zurück ist. Es sollte wie ein müder Programmierer klingen. Beispiele: 'Kompiliere noch...', 'Es läuft auf meinem Rechner.', 'Merge-Konflikt Hölle.', 'Warte auf Koffein-Wirkung.'",
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Low latency preferred for UI interaction
      }
    });

    return response.text?.trim() || "404: Ausrede nicht gefunden.";
  } catch (error) {
    console.error("Error generating excuse:", error);
    return "Fehler: Kaffeemaschine defekt.";
  }
};