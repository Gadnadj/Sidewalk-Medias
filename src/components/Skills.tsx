import { skills } from '../data';
type Props = {}

const Skills = (props: Props) => {
    return (
        <section className='bg-tertiary py-12'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-8 md:grid-flow-row'>
                    {
                        skills.map((item, index) => (
                            <div
                                className='flex items-center justify-center'
                                key={index}>
                                <img src={item.image} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;