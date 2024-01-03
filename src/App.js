import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Menu from './components/Menu';
import CardThird from './components/CardThird';
import Delivery from './components/Delivery';
import SocialCard from './components/SocialCard';
import SocialsBar from './components/SocialsBar';
import Footer from './components/Footer';
import {Link, Switch, Routes, Route, BrowserRouter as Router, Navigate} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from 'swiper';
import { motion } from 'framer-motion';
import Signin from './signin';
import Signup from './signup';
import "swiper/css";
import "swiper/css/pagination";
import Contact from './components/Contact';
import LoginModal from './components/LoginModal';
import AboutUs from './components/AboutUs';
import Home from './home';
import Login from './signin';
import useToken from './hooks/useToken'
import ProtectedPages from './Layout/ProtectedPages';



function App() {
    // const token = getToken();
    const {token, setToken} = useToken();
    
       
    // if(!token){
    //     return <Signin setToken={setToken}></Signin>
    // }
    return (
        <>
        {/* <Router>     */}
            <Routes>
                    {/* <Route index element={
                        token ? <Home/> : <Signin setToken={setToken}/>
                    }/>   */}

                    {/* <Signin setToken={setToken}></Signin> */}
                <Route index element={<Home/>}></Route>
                <Route path="signin" element={<Signin setToken={setToken}/>}/>
                <Route path="signup" element={<Signup />}/>
            </Routes>
            
        {/* </Router> */}
        </>
    );

}

export default App;
