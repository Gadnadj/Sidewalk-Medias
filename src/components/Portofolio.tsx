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
                <div className='flex flex-col items-center text-center -mb-8'>
                    <motion.h2 
                        className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block mb-3'
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        My latest work
                    </motion.h2>
                    <motion.p 
                        className='subtitle mb-8'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Discover a selection of my creations, ranging from striking logos to elegant magazines and innovative web designs.
                        Each project reflects my passion for design and my commitment to creating
                        visual solutions that captivate and communicate effectively.
                    </motion.p>
                </div>
                <Reveal delay={0.2} width="100%">
                    <Projects />
                </Reveal>
            </div>
        </section>
    );
};

export default Portofolio;