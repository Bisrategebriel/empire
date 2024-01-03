import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"; 
function Hero() {
    return (
        <div className='md:mt-24'>
            <div className='max-w-6xl px-6 mx-auto flex flex-col-reverse justify-center md:flex-row md:justify-between'>
                <motion.div 
                initial={{x:'-100vw'}}
                animate={{x:'0px'}}
                transition={{duration:1}}
                className='flex flex-col w-full md:space-y-5 items-center md:items-start text-center md:text-left justify-center z-0'>
                    <h1 className='max-w-sm md:max-w-md text-3xl font-bold text-emp-light md:text-left md:text-6xl '>BARGAIN BUCKET MENU CAMPAIGN</h1>
                    <p className='max-w-sm max-w-md text-emp-light md:text-left'>Original Recipe chicken and fries, and plenty of it. Sometimes that's all you need to turn on average day into a great one.</p>
                    <Link to='/#menu'>
                        {/* <a href='#menu'> */}
                            <button className='shadow-lg text-xl border-2 border-solid mt-4 border-emp-light bg-light-orange max-w-fit pt-3 pb-3 px-12 rounded-full 
                            text-emp-light font-bold  md:mt-8 hover:bg-emp-light hover:text-emp-dark-orange transition duration-300 ease-in-out'>Our Menu</button>
                            
                        {/* </a> */}

                    </Link>
                </motion.div>
                <motion.div 
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                transition={{delay:0.2, duration:1, ease:"backInOut"}}
                className='w-auto flex justify-center md:justify-end'>
                    <img className='max-w-xs md:max-w-lg -rotate-12 self-end' src='./assets/images/burger.png' alt=''></img>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;