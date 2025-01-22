import { useState } from 'react';
import Logo from '../assets/img/logo.svg';
import NavBar from './NavBar';
import NavMobile from './NavMobile';
import Socials from './Socials';


type Props = {}

const Headers = (props: Props) => {
    const [background, setBackground] = useState<boolean>(false);

    return (
        <header>
            <div className="container mx-auto">
                header
            </div>
        </header>
    );
};

export default Headers;