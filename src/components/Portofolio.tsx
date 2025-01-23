import Projects from './Projects';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const Portofolio = () => {
    return (
        <section
            id='portfolio'
            className='section bg-primary min-h-[1400px]'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <motion.h2 
                        className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        My latest work
                    </motion.h2>
                    <motion.p 
                        className='subtitle'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </motion.p>
                </div>
                <Reveal delay={0.4} width="100%">
                    <Projects />
                </Reveal>
            </div>
        </section>
    );
};

export default Portofolio;