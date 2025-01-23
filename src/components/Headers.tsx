import { useEffect, useState } from 'react';
import Logo from '../assets/img/logo.svg';
import NavBar from './NavBar';
import NavMobile from './NavMobile';
import Socials from './Socials';

const Headers = () => {
    const [background, setBackground] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBackground(true) : setBackground(false);
        });
    });

    return (
        <header className={`${background ? 'bg-secondary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
            <div className="container mx-auto flex items-center justify-between">
                {/* logo */}
                <a href="#">
                    <img src={Logo} alt="" />
                </a>

                {/* navbar */}
                <div className='hidden lg:block'>
                    <NavBar />
                </div>

                {/* socials */}
                <div className='hidden lg:block'>
                    <Socials />
                </div>

                {/* nav mobile */}
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </header>
    );
};

export default Headers;