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
            <motion.div 
                className='relative group mb-8'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <img className='rounded-2xl w-96 h-96 object-cover' src={item.image} alt={item.name} />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-center px-4"
                    >
                        <h3 className='text-2xl font-bold text-white mb-2'>{item.name}</h3>
                        <p className='text-accent text-sm'>{item.category}</p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Project;