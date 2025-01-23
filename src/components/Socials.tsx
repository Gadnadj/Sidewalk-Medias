import { social } from '../data';
import { motion } from 'framer-motion';

const Socials = () => {
    return (
        <ul className='flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6'>
            {social.map((item, index) => (
                <motion.li
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <a
                        className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-accent hover:text-accent-hover transition-all duration-300'
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.icon}
                    </a>
                </motion.li>
            ))}
        </ul>
    );
};

export default Socials;