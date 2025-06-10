import { useState, useEffect } from 'react';
import { navigation } from '../data';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { language } = useLanguage();
    const t = translations[language];

    // Gestion du scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('nav-mobile-open');
        } else {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('nav-mobile-open');
        }

        // Cleanup lors du démontage du composant
        return () => {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('nav-mobile-open');
        };
    }, [isOpen]);

    // framer motion variants
    const circleVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 180,
            transition: {
                type: 'spring',
                stiffness: 160,
                damping: 60
            }
        }
    };

    const ulVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1
            }
        }
    };

    return (
        <nav className='relative'>
            {/* menu icon */}
            <div onClick={() => setIsOpen(true)} className='cursor-pointer text-white z-[9001]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
            </div>

            {/* circle */}
            <motion.div
                variants={circleVariants}
                initial='hidden'
                animate={isOpen ? 'visible' : 'hidden'}
                className='w-4 h-4 rounded-full bg-secondary fixed top-0 right-0 z-[9002]'>
            </motion.div>

            {/* menu */}
            <motion.ul
                variants={ulVariants}
                initial='hidden'
                animate={isOpen ? 'visible' : 'hidden'}
                className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden z-[9003] bg-secondary`}
            >
                <div onClick={() => setIsOpen(false)} className="cursor-pointer absolute top-8 right-8 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                {navigation.map((item, index) => (
                    <li key={index} className='mb-8'>
                        <Link
                            to={item.href}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            spy={true}
                            activeClass="text-accent"
                            className='text-xl cursor-pointer capitalize text-white hover:opacity-70 transition-all'
                            onClick={() => setIsOpen(false)}
                        >
                            {t.nav[item.name as keyof typeof t.nav]}
                        </Link>
                    </li>
                ))}
            </motion.ul>
        </nav>
    );
};

export default NavMobile;

