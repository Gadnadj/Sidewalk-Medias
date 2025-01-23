import { social } from '../data';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer 
            className='bg-tertiary py-12'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                    <motion.div 
                        className='flex space-x-6 items-center justify-center'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {social.map((item, index) => (
                            <motion.a
                                className='text-accent text-base'
                                href={item.href}
                                key={index}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="text-2xl lg:text-3xl font-extrabold tracking-[2px] uppercase">
                            <span className="text-accent font-black">Sidewalk</span>
                            <span className="font-light"> Media</span>
                        </h2>
                    </motion.div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;