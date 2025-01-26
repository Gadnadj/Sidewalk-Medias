import { FormEvent, useState, useEffect } from 'react';
import { contact } from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { useLanguage } from './context/LanguageContext';
import { translations } from './translations';
import ShootingStars from './components/ShootingStars';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const isRTL = language === 'he';
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
                toast.success(t.contact.form.success);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                toast.error(t.contact.form.error);
            }
        } catch (error) {
            toast.error(t.contact.form.error);
        }
    };

    return (
        <section 
            id='contact' 
            className='section bg-primary relative'
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            <ShootingStars containerId="contact-particles" />
            <div className='container mx-auto relative z-10'>
                <div className='flex flex-col items-center text-center'>
                    <motion.h2 
                        className={`section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block ${
                            language === 'en' ? 'before:-left-40' : 
                            language === 'fr' ? 'before:-left-[60%]' :
                            'before:-right-[30%]'
                        }`}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t.contact.title}
                    </motion.h2>
                    <motion.p 
                        className='subtitle'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {t.contact.subtitle}
                    </motion.p>
                </div>

                <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                    <motion.div
                        className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {contact.map((item, index) => {
                            const { icon } = item;
                            return (
                                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                                    <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className='font-body text-xl mb-1'>
                                            {t.contact.info[index === 0 ? 'question' : 'location'].title}
                                        </h4>
                                        <p className='mb-1'>
                                            {t.contact.info[index === 0 ? 'question' : 'location'].subtitle}
                                        </p>
                                        <p className='text-accent font-normal'>
                                            {index === 0 ? item.description : t.contact.info.location.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                    <motion.form
                        className='space-y-8 w-full max-w-[780px]'
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='flex gap-8'>
                            <input
                                className='input'
                                type='text'
                                placeholder={t.contact.form.name}
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />
                            <input
                                className='input'
                                type='email'
                                placeholder={t.contact.form.email}
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>
                        <input
                            className='input'
                            type='text'
                            placeholder={t.contact.form.subject}
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            required
                        />
                        <textarea
                            className='textarea'
                            placeholder={t.contact.form.message}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            required
                        ></textarea>
                        <motion.button 
                            type='submit' 
                            className='btn btn-lg bg-accent hover:bg-accent-hover'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t.contact.form.send}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
            <ToastContainer position="bottom-right" />
        </section>
    );
};

export default Contact;