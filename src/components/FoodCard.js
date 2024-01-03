import React from 'react'

export default function FoodCard({item}) {
  return (
    // <div>
 
        <div class="max-w-sm rounded shadow-lg my-4">
            <div className='w-full h-auto flex justify-center items-center'>
                <img class="w-100" src={item.img} alt="Sunset in the mountains" />
            </div>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{item.title}</div>
                <p class="text-gray-700 text-base">
                {item.desc}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.category}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.price}</span>
            </div>
        </div>
     
    // </div>
  )
}
