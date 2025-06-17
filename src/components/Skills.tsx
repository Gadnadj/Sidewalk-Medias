import { motion } from 'framer-motion';
import { skills } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { useState } from 'react';

const Skills = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [isHovered, setIsHovered] = useState(false);

    // Duplique la liste pour l'effet infini (deux copies suffisent avec l'animation CSS)
    const skillsList = [...skills, ...skills];

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
        <section id='skills' className='section bg-secondary py-12'>
            <div className='container mx-auto'>
                <motion.h2 
                    className='section-title text-center mb-16'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {t.skills?.title || 'Skills'}
                </motion.h2>
                <div className='relative flex items-center overflow-hidden'>
                    {/* Carrousel skills */}
                    <motion.div
                        className='flex flex-nowrap gap-4 md:gap-6 px-2 md:px-4 pb-2 w-full skills-carousel'
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{
                            animationPlayState: isHovered ? 'paused' : 'running'
                        }}
                    >
                        {skillsList.map((item, index) => (
                            <motion.div
                                key={index}
                                className='carousel-item relative group min-w-[70px] max-w-[70px] h-[90px] md:min-w-[160px] md:max-w-[160px] md:h-[180px] flex flex-col items-center justify-center rounded-xl md:rounded-2xl bg-backDivider shadow-lg transition-shadow duration-300 cursor-pointer'
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
                                    <div className='relative w-6 h-6 md:w-14 md:h-14 mb-1 md:mb-3 flex items-center justify-center'>
                                        <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className='w-full h-full object-contain drop-shadow-lg'
                                        />
                                    </div>
                                    <h3 className='text-[10px] md:text-base font-semibold text-center text-white group-hover:text-accent transition-all duration-300 mt-0.5 md:mt-2'>
                                        {item.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <style>{`
                .skills-carousel {
                    animation: scroll 22s linear infinite;
                }
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-160px * ${skills.length}));
                    }
                }
                @media (max-width: 768px) {
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(calc(-70px * ${skills.length}));
                        }
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;