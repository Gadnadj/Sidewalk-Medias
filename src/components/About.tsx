import Image from '../assets/img/about.webp';

type Props = {}

const About = (props: Props) => {
    return (
        <section className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img
                        className='object-cover h-full w-[556px] md:mx-auto lg:mx-0 rounded-2xl'
                        src={Image}
                        alt=""
                    />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative
                            before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                                Yael Nadjar
                            </h2>
                            <p className='mb-4 text-accent'>Freelance Web Developer</p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo ab iste cumque! Quis velit, labore libero incidunt laudantium eum
                                similique fugit accusamus dolorem tempore, vel inventore assumenda, odit quod repellendus.<br /> Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Fugiat quod nemo repellat nihil harum quia distinctio porro! Magni, at fuga!
                            </p>
                        </div>
                        <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;