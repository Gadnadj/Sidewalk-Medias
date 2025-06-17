import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Language } from '../context/types';

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleLanguageSelect = (newLang: Language) => {
        if (newLang !== language) {
            setLanguage(newLang);
        }
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={menuRef}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="language-toggle-btn absolute top-24 right-4 bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-md flex items-center justify-center z-[400]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="text-lg font-medium">
                    {language.toUpperCase()}
                </span>
            </motion.button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-36 right-4 bg-white rounded-md shadow-lg z-[401]"
                >
                    <div className="py-1">
                        {(['en', 'fr', 'he'] as Language[]).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => handleLanguageSelect(lang)}
                                className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                                    language === lang ? 'bg-gray-100 font-medium' : ''
                                }`}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default LanguageToggle; 