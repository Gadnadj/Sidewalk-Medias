import { motion } from 'framer-motion';
import { skills } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { useRef, useEffect, useState } from 'react';

// CSS pour masquer la scrollbar sur tous les navigateurs
const hideScrollbar = {
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none' // IE 10+
};

const Skills = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const isRTL = language === 'he';
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [itemWidth, setItemWidth] = useState(160); // Largeur d'un skill (px)

    // Duplique la liste pour l'effet infini
    const skillsList = [...skills, ...skills];
    const totalItems = skills.length;

    // Calcul de la largeur d'un item (pour le recentrage)
    useEffect(() => {
        if (scrollRef.current) {
            const firstItem = scrollRef.current.querySelector('.carousel-item');
            if (firstItem) {
                setItemWidth((firstItem as HTMLElement).offsetWidth + 24); // 24 = gap-6
            }
        }
    }, []);

    // Vitesse du scroll automatique (pixels/frame). Plus c'est grand, plus ça va vite. Exemple : 0.5 (lent), 1 (normal), 2 (rapide)
    const scrollSpeed = 0.7;

    // Scroll automatique infini
    useEffect(() => {
        if (isHovered) return;
        const el = scrollRef.current;
        if (!el) return;
        let req: number;
        let lastScroll = el.scrollLeft;
        const scrollStep = () => {
            if (!el) return;
            el.scrollLeft += isRTL ? -scrollSpeed : scrollSpeed;
            // Si on arrive à la fin de la première liste, on recale au début
            if (!isRTL && el.scrollLeft >= itemWidth * totalItems) {
                el.scrollLeft = 0;
            } else if (isRTL && el.scrollLeft <= 0) {
                el.scrollLeft = itemWidth * totalItems;
            }
            lastScroll = el.scrollLeft;
            req = requestAnimationFrame(scrollStep);
        };
        req = requestAnimationFrame(scrollStep);
        return () => cancelAnimationFrame(req);
    }, [isHovered, isRTL, itemWidth, totalItems]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    // --- 3D Card effect ---
    const [cardTransforms, setCardTransforms] = useState<{ [key: number]: string }>({});

    const handleMouseMove = (e: React.MouseEvent, index: number) => {
        const card = e.currentTarget as HTMLDivElement;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
        const rotateY = ((x - centerX) / centerX) * 10;
        setCardTransforms((prev) => ({ ...prev, [index]: `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)` }));
    };
    const handleMouseLeave = (index: number) => {
        setCardTransforms((prev) => ({ ...prev, [index]: 'rotateX(0deg) rotateY(0deg)' }));
    };

    return (
        <section id='skills' className='section bg-secondary py-12' dir={isRTL ? 'rtl' : 'ltr'}>
            <div className='container mx-auto'>
                <motion.h2 
                    className='section-title text-center mb-16 '
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {t.skills?.title || 'Skills'}
                </motion.h2>
                <div className='relative flex items-center'>
                    {/* Carrousel skills */}
                    <motion.div
                        ref={scrollRef}
                        className='flex flex-nowrap gap-6 overflow-x-auto px-2 md:px-4 pb-2 w-full carousel-hide-scrollbar'
                        style={hideScrollbar as any}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {skillsList.map((item, index) => (
                            <div
                                key={index}
                                className='carousel-item relative group min-w-[140px] max-w-[140px] md:min-w-[160px] md:max-w-[160px] h-[180px] flex flex-col items-center justify-center rounded-2xl bg-secondary shadow-lg transition-shadow duration-300 cursor-pointer'
                                style={{
                                    transform: cardTransforms[index] || 'rotateX(0deg) rotateY(0deg)',
                                    transition: 'transform 0.2s cubic-bezier(.25,.8,.25,1), box-shadow 0.2s',
                                    boxShadow: cardTransforms[index] && cardTransforms[index] !== 'rotateX(0deg) rotateY(0deg)'
                                        ? '0 8px 32px 0 rgba(172,107,52,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)' : '0 2px 8px 0 rgba(0,0,0,0.10)'
                                }}
                                onMouseMove={(e) => handleMouseMove(e, index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            >
                                <div className='flex flex-col items-center justify-center w-full h-full'>
                                    <div className='relative w-14 h-14 mb-3 flex items-center justify-center'>
                                        <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className='w-full h-full object-contain drop-shadow-lg'
                                        />
                                    </div>
                                    <h3 className='text-base font-semibold text-center text-white group-hover:text-accent transition-all duration-300 mt-2'>
                                        {item.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <style>{`
                .carousel-hide-scrollbar {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .carousel-hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Skills;