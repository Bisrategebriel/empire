import React from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion"

function Pizza() {
    const { scrollYProgress } = useViewportScroll()
    const y2 = useTransform(scrollYProgress, (value) => value * 720)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
  return (
    <div className='h-screen min-w-full w-screen relative overflow-x overflow-y-visible'>
        <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px] absolute">
            {/* <span className="mb-5 inline-block bg-emp-light py-2 px-5 text-lg font-medium text-dark-orange">
            About Us
            </span> */}
            <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
            Bringing you refreshing taste to Addis.
            </h2>
            <p className="mb-9 text-base leading-relaxed text-body-color">
            We have started providing service 3 months ago at our new location, bole. 
            We have started providing service 3 months ago at our new location, bole. 
            We have started providing service 3 months ago at our new location, bole. 
            </p>
            <a href="" className="inline-flex items-center justify-center rounded bg-emp-dark-orange py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg">
            Learn More
            </a>
        </div>
      <motion.img 
      style={{
          rotateZ: y2,
          scale
      }}
      src='./assets/images/pizza.png' className='absolute right-0' />
    </div>
  )
}

export default Pizza
