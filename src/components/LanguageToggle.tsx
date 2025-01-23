import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    const getLanguageDisplay = () => {
        switch (language) {
            case 'en':
                return '🇬🇧'; // Drapeau actuel : anglais
            case 'fr':
                return '🇫🇷'; // Drapeau actuel : français
            case 'he':
                return '🇮🇱'; // Drapeau actuel : israélien
        }
    };

    return (
        <motion.button
            onClick={toggleLanguage}
            className="absolute top-24 right-4 bg-accent hover:bg-accent-hover text-white px-2 md:px-3 py-1 rounded-md text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="text-2xl md:text-3xl scale-125 md:scale-150 inline-flex items-center justify-center">
                {getLanguageDisplay()}
            </span>
        </motion.button>
    );
};

export default LanguageToggle; 