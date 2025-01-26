import Projects from './Projects';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Portofolio = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const isRTL = language === 'he';

    return (
        <section
            id='portfolio'
            className='section bg-primary min-h-[1400px]'
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center -mb-8'>
                    <motion.h2 
                        className={`section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block ${
                            language === 'en' ? 'before:-left-[70%]' : 
                            language === 'fr' ? 'before:-left-[32%]' :
                            'before:-right-[30%]'
                        }`}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t.portfolio.title}
                    </motion.h2>
                    <motion.p 
                        className='subtitle mb-8'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {t.portfolio.subtitle}
                    </motion.p>
                </div>
                <Reveal delay={0.2} width="100%">
                    <Projects />
                </Reveal>
            </div>
        </section>
    );
};

export default Portofolio;