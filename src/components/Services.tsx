import { services } from '../data';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { Service } from '../data';
import { ServiceType } from '../translations';
import { useState } from 'react';

const Services = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const isRTL = language === 'he';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
        <section 
            id='services' 
            className='section bg-tertiary'
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <motion.h2 
                        className={`section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-38 before:hidden before:lg:block ${
                            language === 'en' ? 'before:-left-[110%]' : 
                            language === 'fr' ? 'before:-left-[62%]' :
                            'before:-right-[67%]'
                        }`}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t.services.title}
                    </motion.h2>
                    <motion.p 
                        className='subtitle'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {language === 'en' ? 
                            'Creative and tailored solutions to bring your ideas to life and strengthen your brand identity. Discover our professional services designed to meet your needs.' :
                        language === 'fr' ?
                            "Des solutions créatives et sur mesure pour donner vie à vos idées et renforcer l'identité de votre marque. Découvrez nos services professionnels adaptés à vos besoins." :
                            'פתרונות יצירתיים ומותאמים אישית להחיות את הרעיונות שלכם ולחזק את הזהות של המותג שלכם. גלו את השירותים המקצועיים שלנו שמותאמים לצרכים שלכם.'
                        }
                    </motion.p>
                </div>

                <motion.div 
                    className='grid lg:grid-cols-4 gap-8'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service: Service, index) => (
                        <div
                            className='bg-backDivider p-6 rounded-2xl cursor-pointer shadow-lg transition-shadow duration-300 h-full flex flex-col items-center justify-start'
                            key={index}
                            style={{
                                transform: cardTransforms[index] || 'rotateX(0deg) rotateY(0deg)',
                                transition: 'transform 0.2s cubic-bezier(.25,.8,.25,1), box-shadow 0.2s',
                                boxShadow: cardTransforms[index] && cardTransforms[index] !== 'rotateX(0deg) rotateY(0deg)'
                                    ? '0 8px 32px 0 rgba(172,107,52,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)' : '0 2px 8px 0 rgba(0,0,0,0.10)'
                            }}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <div 
                                className='text-white rounded-full w-16 h-16 flex justify-center items-center mb-4 text-[32px] bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 shadow-md'
                            >
                                {service.icon}
                            </div>
                            <h4 className='text-xl font-semibold mb-2 text-center'>
                                {t.services.services[service.type as ServiceType].title}
                            </h4>
                            <p className='text-center text-sm opacity-80'>{t.services.services[service.type as ServiceType].description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;