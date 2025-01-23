import { FormEvent, useState } from 'react';
import { contact } from './data';

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
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <section className='section bg-primary' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
                        Contact Me
                    </h2>
                    <p className="subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, obcaecati at. Vel cupiditate, aliquam magnam explicabo itaque voluptates nisi ab.
                    </p>
                </div>

                <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                    <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
                        {
                            contact.map((item, index) => (
                                <div key={index} className='flex flex-col lg:flow-row gap-x-4'>
                                    <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-normal text-2xl'>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className='font-body text-xl mb-1'>
                                            {item.title}
                                        </h4>
                                        <p className='mb-1'>
                                            {item.subtitle}
                                        </p>
                                        <p className='text-accent font-normal'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <form className='space-y-8 w-full max-w-[780px]' onSubmit={handleSubmit}>
                        <div className='flex gap-8'>
                            <input
                                className='input'
                                type='text'
                                placeholder='Your name'
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />
                            <input
                                className='input'
                                type='email'
                                placeholder='Your email'
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>
                        <input
                            className='input'
                            type='text'
                            placeholder='Subject'
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            required
                        />
                        <textarea
                            className='textarea'
                            placeholder='Your message'
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            required
                        ></textarea>
                        <button type='submit' className='btn btn-lg bg-accent hover:bg-accent-hover'>
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;