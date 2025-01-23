import { FormEvent, useState } from 'react';
import { contact } from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import Reveal from './components/Reveal';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        try {
            const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                toast.success('🎉 Message sent successfully!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                toast.error('❌ Failed to send message. Please try again.', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
            }
        } catch (error) {
            toast.error('🔥 Network error. Please check your connection and try again.', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });
        }
    };

    return (
        <section className='section bg-primary' id='contact'>
            <ToastContainer />
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <motion.h2 
                        className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Contact Me
                    </motion.h2>
                    <motion.p 
                        className="subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </motion.p>
                </div>

                <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                    <motion.div 
                        className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {contact.map((item, index) => (
                            <motion.div 
                                key={index} 
                                className='flex flex-col lg:flow-row gap-x-4'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 * index }}
                            >
                                <motion.div 
                                    className='text-accent rounded-sm w-14 h-14 flex items-start justify-normal text-2xl'
                                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                                >
                                    {item.icon}
                                </motion.div>
                                <div>
                                    <h4 className='font-body text-xl mb-1'>{item.title}</h4>
                                    <p className='mb-1'>{item.subtitle}</p>
                                    <p className='text-accent font-normal'>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.form 
                        className='space-y-8 w-full max-w-[780px]'
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className='flex gap-8'>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                className='input'
                                type='text'
                                placeholder='Your name'
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                className='input'
                                type='email'
                                placeholder='Your email'
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            className='input'
                            type='text'
                            placeholder='Subject'
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            required
                        />
                        <motion.textarea
                            whileFocus={{ scale: 1.02 }}
                            className='textarea'
                            placeholder='Your message'
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            required
                        ></motion.textarea>
                        <motion.button 
                            type='submit' 
                            className='btn btn-lg bg-accent hover:bg-accent-hover'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send message
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;