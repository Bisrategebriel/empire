import React from 'react';
import { motion } from 'framer-motion';
const CardThird = (props) => {
    console.log(props)
    return (
        <motion.div 
        initial={{opacity:0, y:10}}
        whileInView={{opacity:1, y:0}}
        transition={{delay:props.content.delay}}
        className='flex basis-1/4 grow lg:grow-0 bg-light px-4 py-3 rounded-xl h-52 xl:h-48 mt-4 hover:translate-y-1 transition ease-in duration-100 hover:shadow-md xs:shadow-emp-dark-orange xs:shadow-md md:shadow-lg'>
            <div className='flex flex-col space-y-2 justify-center'>
                <p className='font-bold text-2xl'>{props.content.title}</p>
                <p>{props.content.text}</p>
                <p className='font-bold text-emp-dark-orange text-xl'>{props.content.secondaryText}</p>

            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='rounded-full bg-emp-orange max-w-full w-32 h-32'></div>
                <img className='absolute w-28 h-auto translate-x-3' src={props.content.icon}></img>
            </div>
        </motion.div>
    );
};

export default CardThird;