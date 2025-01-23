import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
};

const Reveal = ({ children, width = "fit-content", delay = 0 }: Props) => {
    return (
        <div style={{ width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal; 