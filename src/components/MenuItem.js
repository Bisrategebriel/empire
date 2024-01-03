import React from 'react';
import { useState } from 'react';

const MenuItem = ({name,category, setFilterOption}) => {
    return (
        // <div className='flex items-center h-48'>
            <div onClick={()=> {setFilterOption(category); console.log(category)}} className={'flex flex-col  rounded-lg  w-32 h-40 p-3 items-center justify-between hover:shadow-lg transition duration-150 hover:translate-y-2 ease-in' +  ' border-b-8 border-emp-dark-orange'}>
                <img src='./assets/images/burger.png' alt='' className='w-32'></img>
                <p className='font-medium text-center'>{name}</p>
            </div>
        // </div>
    );
};

export default MenuItem;