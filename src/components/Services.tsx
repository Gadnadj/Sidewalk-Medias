import { services } from '../data';
import { motion } from 'framer-motion';

const Services = () => {
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
        <section id='services' className='section bg-tertiary'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <motion.h2 
                        className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What I do for clients
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
                    {services.map((service, index) => (
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
                            <h4 className='text-xl font-medium mb-2'>{service.name}</h4>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;