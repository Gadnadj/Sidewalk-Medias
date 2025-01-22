import React from 'react';
import Project from './Project';
import Projects from './Projects';

type Props = {}

const Portofolio = (props: Props) => {
    return (
        <section
            id='portofolio'
            className='section bg-primary min-h-[1400px]'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                        My latest work
                    </h2>
                    <p className='substitle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum natus animi. Molestiae nobis soluta accusamus, totam iusto asperiores animi?
                    </p>
                </div>

                <Projects />
            </div>
        </section>
    );
};

export default Portofolio;