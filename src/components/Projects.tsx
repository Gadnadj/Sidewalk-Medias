import { useState, useEffect } from 'react';
import { projectData2 } from '../data';
import { projectsNav } from '../data';
import Project from './Project';
import { ItemType } from './Types';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const [item, setItem] = useState<ItemType>({ id: '', name: 'all', image: '', category: '' });
    const [projects, setProjects] = useState<ItemType[]>([]);
    const [active, setActive] = useState<number>(0);
    const [visibleProjects, setVisibleProjects] = useState<number>(3);

    useEffect(() => {
        // get projects based on item
        if (item.name === 'all') {
            setProjects(projectData2);
        }
        else {
            const newProjects = projectData2.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
            setVisibleProjects(3); // Reset visible projects when category changes
        }
    }, [item]);

    const handleClick = (index: number, item: { name: string }) => {
        setItem({ id: '', name: item.name.toLowerCase(), image: '', category: '' });
        setActive(index);
    };

    const loadMoreProjects = () => {
        setVisibleProjects(prev => prev + 6);
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
                <ul className='flex flex-wrap md:flex-nowrap justify-center items-center text-white'>
                    {projectsNav.map((item, index) => {
                        const categoryKey = item.name.toLowerCase() as keyof typeof t.portfolio.categories;
                        return (
                            <motion.li
                                onClick={() => handleClick(index, item)}
                                className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t.portfolio.categories[categoryKey] || item.name}
                            </motion.li>
                        );
                    })}
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
                {projects.slice(0, visibleProjects).map((item) => (
                    <Project item={item} key={item.id} />
                ))}
            </motion.section>

            {/* Load More Button */}
            {projects.length > visibleProjects && (
                <div className='flex justify-center mt-8'>
                    <motion.button
                        onClick={loadMoreProjects}
                        className='bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-lg'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t.portfolio.loadMore}
                    </motion.button>
                </div>
            )}
        </div>
    );
};

export default Projects;