import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';



const BackToTopButton = () => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 600 ? setShow(true) : setShow(false);
        });
    });

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        show && (
            <button onClick={() => scrollToTop()} className='bg-accent w-12 h-12 hover:bg-accent-hover text-white rounded-full fixed right-6 bottom-6 cursor-pointer flex justify-center items-center transition-all'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            </button>
        )
    );
};

export default BackToTopButton;