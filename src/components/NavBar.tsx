import { navigation } from '../data';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <nav>
            <ul className='flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 capitalize text-xs sm:text-sm md:text-base lg:text-lg'>
                {navigation.map((item, index) => (
                    <li className='text-white hover:text-accent cursor-pointer' key={index}>
                        <Link
                            to={item.href}
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className='transition-all duration-300 font-medium whitespace-nowrap'
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;