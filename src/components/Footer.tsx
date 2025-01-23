import { social } from '../data';

import Logo from '../assets/img/logo.svg';

const Footer = () => {
    return (
        <footer className='bg-tertiary py-12'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                    <div className='flex space-x-6 items-center justify-center'>
                        {
                            social.map((item, index) => (
                                <a
                                    className='text-accent text-base'
                                    href={item.href}
                                    key={index}>
                                    {item.icon}
                                </a>
                            ))
                        }
                    </div>
                    <div>
                        <img src={Logo} alt="" />
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;