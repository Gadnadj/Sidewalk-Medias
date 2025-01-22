import React from 'react';
import { brands } from '../data';
import { div } from 'framer-motion/client';

type Props = {}

const Brands = (props: Props) => {
    return (
        <section className='min-h-[146px] bg-tertiary flex items-center'>
            <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
                {brands.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} alt="" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Brands;