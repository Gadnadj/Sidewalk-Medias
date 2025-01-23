import Image from '../assets/img/about.webp';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section id='about' className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            className='object-cover h-full w-[556px] md:mx-auto lg:mx-0 rounded-2xl'
                            src={Image}
                            alt=""
                        />
                    </motion.div>
                    <motion.div 
                        className='flex flex-col items-center text-center lg:items-start lg:text-left'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className='flex flex-col'>
                            <motion.h2 
                                className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                Sidewalk Media
                            </motion.h2>
                            <motion.p 
                                className='mb-4 text-accent'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Freelance Web Developer
                            </motion.p>
                            <motion.hr 
                                className='mb-8 opacity-5'
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 0.5, width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            />
                            <motion.p 
                                className='mb-8'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ab iste cumque! Quis velit, labore libero incidunt laudantium eum
                                similique fugit accusamus dolorem tempore, vel inventore assumenda, odit quod repellendus.<br /> Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Fugiat quod nemo repellat nihil harum quia distinctio porro! Magni, at fuga!
                            </motion.p>
                            <motion.div>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="inline-block"
                                >
                                    <motion.button 
                                        className='btn btn-md bg-accent hover:bg-accent-hover transition-all'
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Contact Me
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;