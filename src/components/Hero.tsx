import WomanImg from '../assets/img/sidewalk.png';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import LanguageToggle from './LanguageToggle';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const isRTL = language === 'he';

    console.log(import.meta.env.BASE_URL);
    return (
        <section
            id='home'
            className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden relative'
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            <LanguageToggle />
            <div className="container mx-auto h-full">
                <div className="flex items-center h-full pt-8">
                    {/* left side */}
                    <div className={`flex-1 flex flex-col items-center ${isRTL ? 'lg:items-end' : 'lg:items-start'}`}>
                        <Reveal>
                            <p className='text-lg text-accent mb-[22px]'>{t.hero.greeting}</p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <h1 className={`text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-center ${isRTL ? 'lg:text-end' : 'lg:text-start'}`}>
                                <span className='text-accent'>{t.hero.title}</span>  <br /> {t.hero.subtitle}
                            </h1>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <p className={`pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center ${isRTL ? 'lg:text-end' : 'lg:text-start'}`}>
                                {t.hero.services}
                            </p>
                        </Reveal>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="inline-block"
                        >
                            <motion.button
                                className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t.hero.cta}
                            </motion.button>
                        </Link>
                    </div>

                    {/* right side */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className='hidden lg:flex flex-1 justify-end items-end'
                    >
                        <img
                            src={WomanImg}
                            alt="Woman"
                            className='h-72 w-72 object-contain'
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;