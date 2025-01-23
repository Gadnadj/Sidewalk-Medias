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
        <section className='min-h-[100px] bg-tertiary flex items-center'>
            <motion.div
                className='container mx-auto flex justify-between items-center'
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
                        className="flex items-center justify-center px-2"
                    >
                        <img
                            src={item.img}
                            alt=""
                            className={`${
                                index === 0 
                                    ? 'h-8 w-8 sm:h-12 sm:w-12 md:h-20 md:w-20' 
                                    : index === brands2.length - 1 
                                        ? 'h-12 w-20 sm:h-16 sm:w-28 md:h-24 md:w-40' 
                                        : 'w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48'
                            } object-contain`}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Brands;