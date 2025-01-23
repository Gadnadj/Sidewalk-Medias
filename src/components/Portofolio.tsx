import Projects from './Projects';
import Reveal from './Reveal';

const Portofolio = () => {
    return (
        <section
            id='portfolio'
            className='section bg-primary min-h-[1400px]'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <Reveal>
                        <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                            My latest work
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className='substitle'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </Reveal>
                </div>
                <Reveal delay={0.4} width="100%">
                    <Projects />
                </Reveal>
            </div>
        </section>
    );
};

export default Portofolio;