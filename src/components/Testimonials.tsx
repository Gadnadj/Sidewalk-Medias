import TestimonialSlider from './TestimonialSlider';
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <section id='testimonials' className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <motion.h2 
                        className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What other people say
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <TestimonialSlider />
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;