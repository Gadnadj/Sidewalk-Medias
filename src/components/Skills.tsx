import { motion } from 'framer-motion';
import { skills } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Skills = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const isRTL = language === 'he';

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

                <motion.div
                    className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className='relative group'
                        >
                            <motion.div 
                                className='bg-secondary rounded-xl p-4 h-[140px] flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-accent/10 group-hover:shadow-[0_0_20px_rgba(172,107,52,0.4)] group-hover:-translate-y-1'
                                whileHover={{ 
                                    y: -5,
                                    transition: { type: 'spring', stiffness: 300 }
                                }}
                            >
                                {/* Image container */}
                                <motion.div
                                    className='relative w-12 h-12 mb-3'
                                    whileHover={{ 
                                        scale: 1.1,
                                        rotate: [0, -5, 5, 0],
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className='w-full h-full object-contain transition-all duration-300 group-hover:filter-none'
                                    />
                                </motion.div>

                                {/* Skill name */}
                                <motion.h3 
                                    className='text-sm font-medium text-center text-white group-hover:text-accent transition-all duration-300'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {item.name}
                                </motion.h3>
                            </motion.div>

                            {/* Subtle hover effect */}
                            <motion.div
                                className='absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300 pointer-events-none'
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;