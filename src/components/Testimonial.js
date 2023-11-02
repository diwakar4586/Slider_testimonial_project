import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';


const Testimonial = (props) => {
    let reviews = props.reviews;
    const [idx,setIdx]= useState(0);
 const leftHandler =()=>{
    if(idx-1<0){
        setIdx(reviews.length-1);
    }
    else{
        setIdx(idx-1);
    }

 }
 const rightHandler=()=>{
    if(idx+1>=reviews.length){
        setIdx(0);
    }
    else{
        setIdx(idx+1);
    }

 }
 const surpriseHandler=()=>{
    const val = Math.floor(Math.random()*reviews.length);
    setIdx(val);
 }
    return (

        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 hover:shadow-lg transition-all duration-700">

            <Card review={reviews[idx]}></Card>

            <div className="flex text-3xl  mx-auto mt-5  gap-3 text-violet-300 font-bold">
                <div className="mx-auto">

                <button onClick={leftHandler} className="cursor-pointer hover:text-violet-500"><FiChevronLeft /></button>
                <button onClick={rightHandler} className="cursor-pointer hover:text-violet-500"><FiChevronRight /></button>
                </div>
            </div>
            <div>

                <button onClick={surpriseHandler} type="button" class="text-white mt-[1rem] bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Surprise Me</button>

            </div>
        </div>

    )
}
export default Testimonial;