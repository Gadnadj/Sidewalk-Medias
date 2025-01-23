import React, { useState, useEffect } from 'react';
import { projectsData } from '../data';
import { projectsNav } from '../data';
import Project from './Project';
import { ItemType } from './Types';
import { motion } from 'framer-motion';

const Projects = () => {
    const [item, setItem] = useState<ItemType>({ id: '', name: 'all', image: '', category: '' });
    const [projects, setProjects] = useState<ItemType[]>([]);
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        // get projects bade on item
        if (item.name === 'all') {
            setProjects(projectsData);
        }
        else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
        setItem({ id: '', name: e.currentTarget.textContent!.toLowerCase(), image: '', category: '' });
        setActive(index);
    };

    return (
        <div>
            {/* nav */}
            <motion.nav 
                className='mt-12 mb-12 max-w-xl mx-auto'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
                    {projectsNav.map((item, index) => (
                        <motion.li
                            key={index}
                            className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
                            onClick={(e) => handleClick(e, index)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item.name}
                        </motion.li>
                    ))}
                </ul>
            </motion.nav>

            {/* projects grid */}
            <motion.section 
                className='grid lg:grid-cols-3 lg:gap-x-8 gap-y-12 lg:gap-y-8'
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                {projects.map((item) => (
                    <Project item={item} key={item.id} />
                ))}
            </motion.section>
        </div>
    );
};

export default Projects;