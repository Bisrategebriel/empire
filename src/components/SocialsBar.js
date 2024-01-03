import React from 'react';
import {FaFacebook, FaTwitter, FaTelegram, FaInstagram} from 'react-icons/fa';

const SocialsBar = () => {
    return (
        <div className='flex w-100 h-24 bg-emp-dark-orange items-center justify-between py-2 px-48 '>
            <div className='flex space-x-24'>
                <img src='./assets/images/typography-logo.svg' className='h-16'></img>

            </div>
            <div className='flex space-x-8 '>
                <FaFacebook color='white' size='2rem'></FaFacebook>
                <FaInstagram color='white' size='2rem'></FaInstagram>
                <FaTelegram color='white' size='2rem'></FaTelegram>
                <FaTwitter color='white' size='2rem'></FaTwitter>
            </div>
        </div>
    );
};

export default SocialsBar;