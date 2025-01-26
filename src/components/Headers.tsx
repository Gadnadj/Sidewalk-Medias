import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import NavMobile from './NavMobile';
import Socials from './Socials';
import { motion } from 'framer-motion';

const Headers = () => {
    const [background, setBackground] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBackground(true) : setBackground(false);
        });
    });

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${background ? 'bg-secondary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-[500] transition-all duration-300`}
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* logo */}
                <motion.a 
                    href="#"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="hover:text-accent transition-all duration-300"
                >
                    <h2 className="text-3xl lg:text-3xl font-extrabold tracking-[2px] uppercase">
                        <span className="text-accent font-black">Sidewalk</span>
                        <span className="font-light"> Media</span>
                    </h2>
                </motion.a>

                {/* navbar */}
                <div className='hidden lg:block'>
                    <NavBar />
                </div>

                {/* socials */}
                <motion.div 
                    className='hidden lg:block'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <Socials />
                </motion.div>

                {/* nav mobile */}
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </motion.header>
    );
};

export default Headers;