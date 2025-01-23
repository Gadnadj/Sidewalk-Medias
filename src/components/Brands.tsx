import { brands2 } from '../data';
import { motion } from 'framer-motion';

const Brands = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className='min-h-[146px] bg-tertiary flex items-center'>
            <motion.div
                className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {brands2.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img
                            src={item.img}
                            alt=""
                            className={`${index === 0 ? 'h-20 w-20' :
                                index === brands2.length - 1 ? 'h-24 w-40' :
                                    'w-48 h-48'
                                }`}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Brands;