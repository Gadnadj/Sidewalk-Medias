import { FiBookOpen, FiFacebook, FiLinkedin } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiMapPin } from 'react-icons/fi';
import { FiLayout } from 'react-icons/fi';
import { TiBusinessCard } from 'react-icons/ti';
import { ReactElement } from 'react';


// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

import Photoshop from './assets/img/skills2/photoshop.png';
import Illustrator from './assets/img/skills2/illustrator.png';
import Indesign from './assets/img/skills2/indesign.png';
import AfterEffect from './assets/img/skills2/After-Effects-Logo.png';
import CapCut from './assets/img/skills2/capcut.png';
import Figma from './assets/img/skills2/figma.png';
import Wix from './assets/img/skills2/wix.png';
import Wordpress from './assets/img/skills2/wordpress.png';


import AM from './assets/img/brands/AM.png';
import TM from './assets/img/brands/TM.png';
import HM from './assets/img/brands/HM.png';
import GoldaBrandIcon from './assets/img/brands/Golda Magazine Png.png';



// // projects images
// import Project1 from './assets/img/projects/p1.webp';
// import Project2 from './assets/img/projects/p2.webp';
// import Project3 from './assets/img/projects/p3.webp';
// import Project4 from './assets/img/projects/p4.webp';
// import Project5 from './assets/img/projects/p5.webp';
// import Project6 from './assets/img/projects/p6.webp';

//projects 2 images

import Sidewalk_Media_Post from './assets/img/projects2/WhereWere.png';
import Advisory_Brochure from './assets/img/projects2/12 Advisory brochure.jpg';
import Advisory_Website from './assets/img/projects2/12 Advisory.jpg';
import Ima_Logo from './assets/img/projects2/Ima Logo.jpg';
import Ima_Flyer from './assets/img/projects2/Ima Flyer.jpg';
import Anahide_Magazine from './assets/img/projects2/Anahide Magazine.jpg';
import Electra_Logo from './assets/img/projects2/Electra.jpg';
import G_Tikchoret_Logo from './assets/img/projects2/G Tikchoret.jpg';
import Garage_Axial_Flyer from './assets/img/projects2/Garage Axial.jpg';
import Golda_Logo from './assets/img/projects2/Golda Logo.jpg';
import Golda_Magazine from './assets/img/projects2/Golda Magazine.jpg';
import Hamagazin from './assets/img/projects2/Hamagazin.jpg';
import Infinity_House_Logo from './assets/img/projects2/Infinity House Logo.jpg';
import Jenifer_Post from './assets/img/projects2/Jenifer Post.jpg';
import Mamash_Taim from './assets/img/projects2/Mamash Taim.jpg';
import Mazal_Home_Logo from './assets/img/projects2/Mazal Home.jpg';
import Mazal_Home_Website from './assets/img/projects2/Mazal Home website.jpg';
import Poster from './assets/img/projects2/Poster.jpg';
import Prestige_Brochure from './assets/img/projects2/Prestige Brochure.jpg';
import Resto_Menu from './assets/img/projects2/Resto Menu.jpg';
import Sophie_Resume from './assets/img/projects2/Sophie CV.jpg';
import Trouver_En_Magazine from './assets/img/projects2/Trouver en Israel Magazine.jpg';
import Union_Logo from './assets/img/projects2/Union Logo.jpg';


// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';
import { FaTiktok, FaTwitter } from 'react-icons/fa';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { IoVideocamOutline } from 'react-icons/io5';
import { TfiWorld } from 'react-icons/tfi';

// navigation
export const navigation = [
    {
        name: 'home',
        href: 'home'
    },
    {
        name: 'about',
        href: 'about'
    },
    {
        name: 'portfolio',
        href: 'portfolio'
    },
    {
        name: 'services',
        href: 'services'
    },
    // {
    //     name: 'testimonials',
    //     href: 'testimonials'
    // },
    {
        name: 'contact',
        href: 'contact'
    }
    // {
    //     name: 'experience',
    //     href: 'experience'
    // }
];

// social
export const social = [
    {
        icon: <FiInstagram />,
        href: 'https://www.instagram.com/sidewalkmedias/'
    },
    {
        icon: <FiFacebook />,
        href: 'https://www.facebook.com/SidewalkMedias'
    },
    {
        icon: <FiLinkedin />,
        href: 'https://www.linkedin.com/in/sidewalkmedias/'
    },
    {
        icon: <FaTiktok />,
        href: 'https://www.tiktok.com/@sidewalkmedias'
    },
    {
        icon: <FaTwitter />,
        href: 'https://x.com/sidewalkmedias/'
    }
];

// companies
export const brands = [
    {
        img: FreelancerBrandIcon,
        href: ''
    },
    {
        img: UpworkBrandIcon,
        href: ''
    },
    {
        img: FiverBrandIcon,
        href: ''
    },
    {
        img: BehanceBrandIcon,
        href: ''
    },
    {
        img: DribbbleBrandIcon,
        href: ''
    }
];

export const brands2 = [
    {
        img: TM,
        href: ''
    },
    {
        img: AM,
        href: ''
    },
    {
        img: GoldaBrandIcon,
        href: ''
    },
    {
        img: HM,
        href: ''
    }


];


//projects 2

export const projectData2 = [

    {
        id: '1',
        image: Sidewalk_Media_Post,
        name: 'Sidewalk Medias Post',
        category: 'Post'
    },
    {
        id: '2',
        image: Advisory_Brochure,
        name: 'Advisory Brochure',
        category: 'Brochure'
    }, {
        id: '3',
        image: Advisory_Website,
        name: 'Advisory Website',
        category: 'Website'
    }, {
        id: '4',
        image: Ima_Logo,
        name: 'Ima Logo',
        category: 'Logo'
    }, {
        id: '5',
        image: Ima_Flyer,
        name: 'Ima Flyer',
        category: 'Flyer'
    }, {
        id: '6',
        image: Anahide_Magazine,
        name: 'Anahide Magazine',
        category: 'Magazine'
    }, {
        id: '7',
        image: Electra_Logo,
        name: 'Electra Logo',
        category: 'Logo'
    }, {
        id: '8',
        image: G_Tikchoret_Logo,
        name: 'ג תקשורת לוגו',
        category: 'Logo'
    }, {
        id: '9',
        image: Garage_Axial_Flyer,
        name: 'Garage Axial Flyer',
        category: 'Flyer'
    }, {
        id: '10',
        image: Golda_Logo,
        name: 'Golda Logo',
        category: 'Logo'
    }, {
        id: '11',
        image: Golda_Magazine,
        name: 'Golda Magazine',
        category: 'Magazine'
    }, {
        id: '12',
        image: Hamagazin,
        name: 'המגזין',
        category: 'Magazine'
    }, {
        id: '13',
        image: Infinity_House_Logo,
        name: 'Infinity House Logo',
        category: 'Logo'
    }, {
        id: '14',
        image: Jenifer_Post,
        name: 'Jenifer Post',
        category: 'Post'
    }, {
        id: '15',
        image: Mamash_Taim,
        name: 'Mamash Taim Logo + Website',
        category: 'Logo'
    }, {
        id: '16',
        image: Mazal_Home_Logo,
        name: 'Mazal Home Logo',
        category: 'Logo'
    }, {
        id: '17',
        image: Mazal_Home_Website,
        name: 'Mazal Home Website',
        category: 'Website'
    }, {
        id: '18',
        image: Poster,
        name: 'Poster',
        category: 'Poster'
    },
    {
        id: '19',
        image: Prestige_Brochure,
        name: 'Prestige Brochure',
        category: 'Brochure'
    },
    {
        id: '20',
        image: Resto_Menu,
        name: 'Restaurant Menu',
        category: 'Poster'
    },
    {
        id: '21',
        image: Sophie_Resume,
        name: 'Sophie Resume',
        category: 'Poster'
    },
    {
        id: '22',
        image: Trouver_En_Magazine,
        name: 'Trouver En Magazine',
        category: 'Magazine'
    },
    {
        id: '23',
        image: Union_Logo,
        name: 'Union Des Independants Logo',
        category: 'Logo'
    }
];

// projects
// export const projectsData = [
//     {
//         id: '1',
//         image: Project1,
//         name: 'project name 1',
//         category: 'UI/UX design'
//     },
//     {
//         id: '2',
//         image: Project2,
//         name: 'project name 2',
//         category: 'web development'
//     },
//     {
//         id: '3',
//         image: Project3,
//         name: 'project name 3',
//         category: 'UI/UX design'
//     },
//     {
//         id: '4',
//         image: Project4,
//         name: 'project name 4',
//         category: 'branding'
//     },
//     {
//         id: '5',
//         image: Project5,
//         name: 'project name 5',
//         category: 'web development'
//     },
//     {
//         id: '6',
//         image: Project6,
//         name: 'project name 6',
//         category: 'web development'
//     }
// ];

// projects
export const projectsNav = [
    {
        name: 'all'
    },
    {
        name: 'logo'
    },
    {
        name: 'magazine'
    },
    {
        name: 'flyer'
    },
    {
        name: 'post'
    },
    {
        name: 'website'
    },
    {
        name: 'poster'
    },
    {
        name: 'brochure'
    }
];

// skill
export const skills = [
    {
        image: Photoshop,
        name: 'Photoshop'
    },
    {
        image: Illustrator,
        name: 'Illustrator'
    },
    {
        image: Indesign,
        name: 'Indesign'
    },
    {
        image: AfterEffect,
        name: 'After Effects'
    },
    {
        image: CapCut,
        name: 'CapCut'
    },
    {
        image: Figma,
        name: 'Figma'
    },
    {
        image: Wix,
        name: 'Wix'
    },
    {
        image: Wordpress,
        name: 'WordPress'
    }
];

// services
export interface Service {
    icon: ReactElement;
    type: 'logo' | 'businessCard' | 'magazine' | 'flyer' | 'video' | 'website';
}

export const services: Service[] = [
    {
        icon: <FiLayout />,
        type: 'logo'
    },
    {
        icon: <TiBusinessCard />,
        type: 'businessCard'
    },
    {
        icon: <FiBookOpen />,
        type: 'magazine'
    },
    {
        icon: <LuFileSpreadsheet />,
        type: 'flyer'
    },
    {
        icon: <IoVideocamOutline />,
        type: 'video'
    },
    {
        icon: <TfiWorld />,
        type: 'website'
    }
];

// testimonials
export const testimonials = [
    {
        authorImg: TestiImage1,
        authorText:
            'Love the simplicity of the service and the prompt customer support. We cant imagine working without it.',
        authorName: 'Olivia Doe',
        authorPosition: 'Head of Design, Google'
    },
    {
        authorImg: TestiImage2,
        authorText:
            'Love the simplicity of the service and the prompt customer support. We cant imagine working without it.',
        authorName: 'Olivia Doe',
        authorPosition: 'Head of Design, Google'
    },
    {
        authorImg: TestiImage3,
        authorText:
            'Love the simplicity of the service and the prompt customer support. We cant imagine working without it.',
        authorName: 'Olivia Doe',
        authorPosition: 'Head of Design, Google'
    }
];

// contact
export const contact = [
    {
        icon: <FiMail />,
        title: 'Have a question?',
        subtitle: 'I am here to help you.',
        description: 'sidewalkmkt@gmail.com'
    },
    {
        icon: <FiMapPin />,
        title: 'Current Location',
        subtitle: 'Ashdod, Israel',
        description: 'Serving clients worldwide'
    }
];