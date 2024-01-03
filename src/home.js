import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Menu from './components/Menu';
import CardThird from './components/CardThird';
import Delivery from './components/Delivery';
import SocialCard from './components/SocialCard';
import SocialsBar from './components/SocialsBar';
import Footer from './components/Footer';
import {Link, Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from 'swiper';
import { motion } from 'framer-motion';
import Signin from './signin';
import "swiper/css";
import "swiper/css/pagination";
import Contact from './components/Contact';
import LoginModal from './components/LoginModal';
import AboutUs from './components/AboutUs';
import Pizza from './components/Pizza';

export default function home() {
    const cardContents = [
        {
            "title": 'ANY DAY OFFERS',
            'text': 'New Phenomenon Burger Taste',
            'secondaryText': '12.90TL',
            'icon': './assets/images/burger.png',
            'delay': '0'
        },
        {
            "title": 'OTHER FLAVORS',
            'text': 'Save Room, We Made Cookies',
            'secondaryText': '3.90TL',
            'icon': './assets/images/burger.png',
            'delay': '1'
        },
        {
            "title": 'FIND OUR STORE NEAR YOU',
            'icon': './assets/images/map.png',
            'delay': '2'
        },
        
    ]
  return (
    <div>
      <motion.div className='bg-gradient-to-tl from-emp-dark-orange to-emp-orange min-h-full h-screen hero-container overflow-hidden'>
                <Navbar />
                {/* <div className='empire-text-container absolute'> */}
            
                    {/* <h1 className='empire-text absolute -z-5 -mt-32'>EMPIRE</h1> */}
                    <motion.img 
                    initial={{scale:0.8}}
                    animate={{scale:1}} 
                    transition={{duration:2}}
                    className='h-screen absolute -z-15 opacity-25 bottom-0 pointer-events-none' src='./assets/images/empire.svg' alt='empire-text'/>
                {/* </div> */}
                <Hero></Hero> 
            </motion.div>
            <Menu />
            <div className='flex items-center sm:space-x-4 justify-center flex-wrap bg-emp-light py-12 px-8 md:px-16 lg:px-42 pt-16'>
                <CardThird content={cardContents[0]}></CardThird>
                <CardThird content={cardContents[1]}></CardThird>
                <CardThird content={cardContents[2]}></CardThird>
                <CardThird content={cardContents[1]}></CardThird>
                <CardThird content={cardContents[2]}></CardThird>
            
            </div>
            <Delivery />
            <div className='w-100 py-16 flex flex-col md:flex-row px-lg space-x-5 justify-around w-screen h-screen items-center relative'>
                <div className='w-100 h-42'>
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                        width: 640,
                        slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                        width: 768,
                        slidesPerView: 2,
                        },
                    }}
                    // slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper "
                >
                    <SwiperSlide>
                        <SocialCard/>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <SocialCard/>

                    </SwiperSlide>
                    <SwiperSlide> 
                        <SocialCard/>

                    </SwiperSlide>
                    <SwiperSlide> 
                        <SocialCard/>

                    </SwiperSlide>
                    <SwiperSlide> 
                        <SocialCard/>

                    </SwiperSlide>
                    <SwiperSlide> 
                        <SocialCard/>

                    </SwiperSlide>
                    <SwiperSlide> 
                        <SocialCard/>

                    </SwiperSlide>
                </Swiper>
                </div>
                
                <img src='./assets/images/testimonial.svg' className='absolute h-screen -z-20 -top-48'></img>
            </div>

            <Pizza></Pizza>

            {/* <LoginModal></LoginModal> */}
            <AboutUs></AboutUs>
            {/* <img src='./assets/images/aa.png'/> */}
            <Contact></Contact>
            <SocialsBar/>
            <Footer/>
    </div>
  )
}
