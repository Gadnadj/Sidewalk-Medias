import Image from '../assets/img/about.webp';
import Reveal from './Reveal';

const About = () => {
    return (
        <section id='about' className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <Reveal>
                        <img
                            className='object-cover h-full w-[556px] md:mx-auto lg:mx-0 rounded-2xl'
                            src={Image}
                            alt=""
                        />
                    </Reveal>
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <Reveal>
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3'>
                                Yael Nadjar
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className='mb-4 text-accent'>Freelance Web Developer</p>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <p className='mb-8'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;