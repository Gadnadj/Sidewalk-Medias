import WomanImg from '../assets/img/sidewalk.png';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import CV from '../assets/Gad Nadjar.pdf';

const Hero = () => {

    console.log(import.meta.env.BASE_URL);
    return (
        <section
            id='home'
            className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
            <div className="container mx-auto h-full">
                <div className="flex items-center h-full pt-8">
                    {/* left side */}
                    <div className="flex-1 flex flex-col items-center lg:items-start">
                        <Reveal>
                            <p className='text-lg text-accent mb-[22px]'>Hey, I'm Yael 👋</p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-center lg:text-start'>
                                I Build & Design <br /> Web Interfaces.
                            </h1>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </Reveal>
                        <motion.a 
                            href={CV}
                            download="Yael_Nadjar_CV.pdf"
                            className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download My CV
                        </motion.a>
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