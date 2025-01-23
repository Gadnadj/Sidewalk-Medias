import { navigation } from '../data';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const NavBar = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const isRTL = language === 'he';

    return (
        <nav>
            <ul className={`flex space-x-8 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {navigation.map((item, idx) => {
                    return (
                        <li key={idx} className="cursor-pointer">
                            <Link
                                to={item.href}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="text-lg hover:text-accent transition-all duration-300"
                            >
                                {t.nav[item.name as keyof typeof t.nav]}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;