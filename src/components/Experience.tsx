import { motion } from 'framer-motion';

const experiences = [
    {
        date: "2023 - Present",
        company: "Freelance",
        position: "Full Stack Developer",
        description: "Developed and maintained multiple client websites using React, Node.js, and MongoDB. Implemented responsive designs and modern UI/UX practices. Managed client relationships and project timelines effectively."
    },
    {
        date: "2022 - 2023",
        company: "Tech Startup XYZ",
        position: "Frontend Developer",
        description: "Led the frontend development of a SaaS platform using React and TypeScript. Collaborated with UI/UX designers to implement pixel-perfect designs. Improved website performance by 40%."
    },
    {
        date: "2021 - 2022",
        company: "Digital Agency ABC",
        position: "Web Developer",
        description: "Created custom WordPress themes and plugins for various clients. Worked in an agile team environment. Implemented SEO best practices and optimized website performance."
    },
    {
        date: "2020 - 2021",
        company: "Innovation Labs",
        position: "Junior Developer",
        description: "Started as an intern and quickly promoted to Junior Developer. Assisted in developing and maintaining client websites. Learned and implemented modern web development practices."
    }
];

const Experience = () => {
    return (
        <section id='experience' className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <motion.h2 
                        className='section-title before:content-experience relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-40 before:hidden before:lg:block'
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        My Experience
                    </motion.h2>
                    <motion.p 
                        className='subtitle'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        My professional journey in web development
                    </motion.p>
                </div>

                <div className='grid gap-y-[30px] lg:grid-cols-2 lg:gap-x-[30px]'>
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            className='bg-tertiary p-6 rounded-2xl'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                            <div className='flex flex-col gap-y-2'>
                                <div className='flex items-center justify-between'>
                                    <span className='text-accent text-sm'>{experience.date}</span>
                                    <motion.span 
                                        className='bg-accent/20 text-accent py-1 px-3 rounded-full text-sm'
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {experience.company}
                                    </motion.span>
                                </div>
                                <h4 className='text-xl font-semibold'>{experience.position}</h4>
                                <p className='text-[15px] leading-relaxed'>{experience.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience; 