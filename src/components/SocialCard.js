import React from 'react';
import {FaTwitter, FaUser} from 'react-icons/fa';

const SocialCard = () => {
    return (
        // <div className='bg-white w-1/3 h-36 max-h-1xl rounded-lg shadow-lg relative items-center flex justify-around bg-gradient-to-bl from-light-blue to-emp-light-orange' >
        //     <FaTwitter className='text-2xl absolute top-0 bottom-0 left-0 z-10' color='lightblue' size='35'></FaTwitter>
        //     <div className='flex flex-col w-64 py-3 px-5 h-100 justify-center'>
        //         <p className='font-medium text-xl'>yeab5ira</p>
        //         <p className='font-light'>@empire_burger_et is awesome. Check it out.</p>
        //     </div>
        //     <FaUser className='text-3xl' color='orange'></FaUser>
        // </div>
        <>
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div className="flex justify-center md:justify-end -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="./assets/images/burger.png" />
            </div>
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">Awesome Food</h2>
                <p className="mt-2 text-gray-600">I love their burger! Definitely recommend for you all</p>
            </div>
            <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
            </div>
        </div>
        </>
    );
};

export default SocialCard;