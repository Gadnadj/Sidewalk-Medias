import { ItemType } from './Types';
import { motion } from 'framer-motion';

type Props = {
    item: ItemType;
}

const Project = ({ item }: Props) => {
    return (
        <motion.div
            className='flex flex-col items-center text-center'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            layout
        >
            <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
            <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
            <motion.div 
                className='mb-8'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <img className='rounded-2xl' src={item.image} alt={item.name} />
            </motion.div>
        </motion.div>
    );
};

export default Project;