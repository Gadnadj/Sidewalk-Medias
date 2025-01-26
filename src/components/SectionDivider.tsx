import { motion } from 'framer-motion';

type Props = {
    bgColor?: string;
};

const SectionDivider = ({ bgColor = 'bg-secondary' }: Props) => {
    return (
        <div className={`w-full h-24 ${bgColor} relative overflow-hidden`}>
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <motion.div 
                    className="w-[90%] h-[2px] bg-accent/20"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                >
                    <motion.div 
                        className="h-full bg-accent w-[20%]"
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '500%' }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 2,
                           
                            ease: 'easeInOut'
                        }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SectionDivider; 