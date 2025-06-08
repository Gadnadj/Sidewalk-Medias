import { useEffect, useState, useCallback } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const BackToTopButton = () => {
    const [show, setShow] = useState<boolean>(false);

    const handleScroll = useCallback(
        debounce(() => {
            setShow(window.scrollY > 600);
        }, 150),
        []
    );

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        show && (
            <button 
                onClick={() => scrollToTop()} 
                className='bg-accent w-12 h-12 hover:bg-accent-hover text-white rounded-full fixed right-10 bottom-6 cursor-pointer flex justify-center items-center transition-all z-[900]'
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            </button>
        )
    );
};

export default BackToTopButton;