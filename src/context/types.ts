export type Language = 'en' | 'fr' | 'he';

export interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
} 