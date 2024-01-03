import React from 'react';
import MenuItem from './MenuItem';
import FoodCard from './FoodCard';
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from 'swiper';
import Data from '../Data/Data';
import "swiper/css";
import "swiper/css/pagination";
const Menu = () => {

    const menuList = 
        {
            burger : [
                'cheese',
                'beef',
                'double'
            ],
            drinks : [
                'coke',
                'water'
            ]
        }
    
    const [filterOption, setFilterOption] = useState('0');
    const [items, setItem] = useState(Data);
    console.log(menuList.burger)
    
    return (
        <div>
            <div id="menu" className='w-full h-48 bg-light flex items-center'>
                <div className='overflow-x-auto overflow-y-hidden max-w-6xl mx-auto flex space-x-10 justify-center w-full'>
                    <MenuItem name="Breakfast" category="Breakfast" setFilterOption={setFilterOption}/>
                    <MenuItem name="Lunch" category="Lunch" setFilterOption={setFilterOption}/>
                    <MenuItem name="Dinner" category="Dinner" setFilterOption={setFilterOption}/>
                    <MenuItem name="Snacks" category="Snaks" setFilterOption={setFilterOption} />
                    
                </div>
                <div className='absolute -bottom-6 w-full flex justify-center'> 
                    <h1 className='bg-gradient-to-l from-emp-orange to-emp-light-orange bg-emp-light py-2 px-5 text-lg font-bold text-light text-center rounded-full'>Menu</h1>
                    
                </div>
            </div>
            <div id="subMenu" className='w-full bg-light flex items-center'>
                <div className='max-w-full mx-auto my-4 py-4 flex space-x-10 justify-center items-center'>
                    {false && <MenuItem name="BURGER" />}
                    <Swiper
                        // slidesPerView={3}
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
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper "
                    >
                        {
                            items.map((item)=>{
                                if(item.category == filterOption){
                                    return(
                                        <SwiperSlide>
                                            <FoodCard item={item}></FoodCard>
                                        </SwiperSlide>
    
                                    )

                                }

                            })
                        }
                    </Swiper>
                
                </div>
                <div className='absolute -bottom-6 w-full flex justify-center'> 
                    <h1 className='bg-gradient-to-l from-emp-orange to-emp-light-orange bg-emp-light py-2 px-5 text-lg font-bold text-light text-center rounded-full'>Menu</h1>
                    
                </div>

            </div>
        </div>
    );
};

export default Menu;