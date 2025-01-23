import React, { useState, useEffect } from 'react';
import { projectsData } from '../data';
import { projectsNav } from '../data';
import Project from './Project';
import { ItemType } from './Types';


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
            <nav className='mt-12 mb-12 max-w-xl mx-auto'>
                <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
                    {projectsNav.map((item, index) => (
                        <li
                            className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
                            onClick={(e) => handleClick(e, index)}>{item.name}</li>
                    ))}
                </ul>
            </nav>

            {/* projects grid */}
            <section className='grid lg:grid-cols-3 lg:gap-x-8 gap-y-12 lg:gap-y-8 '>
                {
                    projects.map((item) => (
                        <Project item={item} key={item.id} />
                    ))
                }
            </section>
        </div>
    );
};

export default Projects;