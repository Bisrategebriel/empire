import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { FaUser, FaCartArrowDown, FaSignOutAlt } from 'react-icons/fa';
import useToken from '../hooks/useToken';


function Navbar(props) {
    const {token, setToken} = useToken();

    
    return (
        <div className='z-10'>
            <div className='flex flex-col items-center p-6 md:flex-row md:justify-between max-w-6xl mx-auto z-10'>
                <div className='logo-container font-bold text-slate-200 text-2xl'>
                    <img src='./assets/images/typography-logo.svg' className='h-20 w-auto' alt='empire-burger-logo'/>
                </div>
                <div className='hidden flex-col md:flex md:flex-row space-x-10 font-medium text-emp-light items-center z-10'>
                    <a className='hover:text-white hover:bg-emp-dark/10 py-2 px-3 rounded-full transition duration-75 ease-in'href='#about'> ABOUT US</a>
                    <a className='hover:text-white hover:bg-emp-dark/10 py-2 px-3 rounded-full transition duration-75 ease-in' href='#contact'> FIND US</a>
                    <a className='hover:text-white hover:bg-emp-dark/10 py-2 px-3 rounded-full transition duration-75 ease-in' href=''> ALL CAMPAIGNS</a> 
                    
                    {
                        !token ?  <Link to='/signin' className='bg-white p-2 rounded-lg text-emp-dark shadow-md font-bold'><FaUser /></Link> : 
                        <button onClick={localStorage.clear('token')}><FaSignOutAlt /></button>
                    }
                    
                    <button className='bg-white p-2 rounded-lg text-emp-dark shadow-md font-bold'><FaCartArrowDown/></button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;