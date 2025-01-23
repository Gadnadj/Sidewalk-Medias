import { skills } from '../data';
import { motion } from 'framer-motion';

const Skills = () => {
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
        <section className='bg-tertiary py-12'>
            <div className='container mx-auto'>
                <motion.div 
                    className='grid grid-cols-8 md:grid-flow-row'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills.map((item, index) => (
                        <motion.div
                            className='flex items-center justify-center'
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.2,
                                rotate: [0, -10, 10, -10, 0],
                                transition: {
                                    duration: 0.5
                                }
                            }}
                        >
                            <img src={item.image} alt={`Skill ${index + 1}`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;