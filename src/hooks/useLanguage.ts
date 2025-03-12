import { create } from 'zustand';

type Language = 'en' | 'pt';

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
}

const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'pt',
  setLanguage: (language) => set({ language }),
}));

export const useLanguage = () => {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  
  return { language, setLanguage };
};