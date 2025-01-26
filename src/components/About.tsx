import Image from '../assets/img/about.webp';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const About = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const isRTL = language === 'he';

    return (
        <section 
            id='about' 
            className='section bg-secondary'
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={isRTL ? 'order-2' : ''}
                    >
                    </motion.div>
                    <motion.div 
                        className={`flex flex-col items-center text-center lg:items-start lg:text-left ${
                            isRTL ? 'lg:items-end lg:text-right order-1' : ''
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className='flex flex-col'>
                            <motion.h2 
                                className={`text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block ${
                                    isRTL ? 'before:-right-[5rem]' : 'before:-left-[5rem]'
                                }`}
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                {t.about.title}
                            </motion.h2>
                            <motion.hr 
                                className='mb-8 opacity-5'
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 0.5, width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            />
                            <motion.p 
                                className='mb-8'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                {t.about.description}<br /><br />
                                {t.about.description2}
                            </motion.p>
                            <motion.div className={isRTL ? 'self-end' : ''}>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="inline-block"
                                >
                                    <motion.button 
                                        className='btn btn-md bg-accent hover:bg-accent-hover transition-all'
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {t.about.cta}
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;