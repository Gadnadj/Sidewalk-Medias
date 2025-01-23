import { services } from '../data';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { Service } from '../data';
import { ServiceType } from '../translations';

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

    const itemVariants = {
        hidden: { 
            opacity: 0,
            y: 20,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 24
            }
        }
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
                        className={`section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block ${
                            language === 'en' ? 'before:-left-[110%]' : 
                            language === 'fr' ? 'before:-left-[85%]' :
                            'before:-right-[60%]'
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
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
                        <motion.div 
                            className='bg-secondary p-6 rounded-2xl cursor-pointer'
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.03,
                                transition: { type: 'spring', stiffness: 300 }
                            }}
                        >
                            <motion.div 
                                className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-4 text-[28px]'
                                whileHover={{ 
                                    rotate: [0, -10, 10, -10, 0],
                                    transition: { duration: 0.5 }
                                }}
                            >
                                {service.icon}
                            </motion.div>
                            <h4 className='text-xl font-medium mb-2'>
                                {t.services.services[service.type as ServiceType].title}
                            </h4>
                            <p>{t.services.services[service.type as ServiceType].description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;