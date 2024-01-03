import React, { useEffect, useRef, useState } from 'react';
import { motion, motionValue, useViewportScroll } from 'framer-motion';
const Delivery = () => {
    const {scrollYProgress} = useViewportScroll()
    const [yScroll, setYScroll] = useState(0);
    useEffect(()=>{
        scrollYProgress.onChange((latest)=>{
            console.log(latest)
            setYScroll(latest*20)
        })
    })
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ease:"easeOut", duration:2}}
        className='h-96 bg-white w-100 flex md:flex-col justify-evenly items-center mt-24'>
            <motion.div 
            initial={{translateX:40}}
            animate={{translateX:0}}
            
            className='bg-emp-orange w-100 h-80 flex md:flex-col items-center justify-center px-10'>
                <motion.div 
                style={{translateX:(yScroll)}}
                className='flex flex-col max-w-lg absolute right-0'>
                    <p className='font-bold text-4xl text-emp-light'>Now Working With Your Favorite Delivery Services</p>
                    <div className='flex w-lg'>
                        <button className='bg-emp-dark m-3 p-3 text-emp-light rounded-full font-bold'>Tikus Delivery</button>
                        <button className='bg-emp-dark m-3 p-3 text-emp-light rounded-full font-bold'>Beu Delivery</button>
                        
                    </div>
                </motion.div>
            </motion.div>
            <div className='w-100 z-20 absolute h-80 flex items-center px-24'>
                <img src='./assets/images/beu_ad.png' className='absolute z-10 w-80 shadow-lg'></img>
                <img src='./assets/images/tikus_ad.png' className='absolute translate-x-48 z-0 w-72 shadow-lg'></img>
            </div>
        </motion.div>
    );
};
export default Delivery;