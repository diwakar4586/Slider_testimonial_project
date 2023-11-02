import React from "react";
import reviews from "../data";
import {FaQuoteLeft, FaQuoteRight, FaGem} from 'react-icons/fa';

const Card=(props)=>{

    let review = props.review;

    return(

        <div className="flex flex-col md:relative">
            <div className=" relative md:absolute  md:top-[-7rem] z-30 mx-auto">
                <img className="  aspect-square rounded-full w-[90px]  md:h-[140px] md:w-[140px]  z-20" src={review.image} alt="" />
                <div className="absolute rounded-full w-[95px] h-[95px] md:w-[140px] md:h-[140px] bg-violet-400 top-[-6px] left-[10px] z-[-10] "></div>
            </div>

            <div className="text-center mt-7  mb-1 font-bold text-2xl">
                <p>{review.name}</p>
            </div>


            <div className="text-center mb-4">
                <p className="text-violet-300 uppercase text-sm">{review.job}</p>
            </div>

            <div className="text-center mb-4 text-violet-400 mx-auto">
                <FaQuoteLeft/>
            </div>
            <div className="text-center mb-4 text-slate-500">
                {review.text.substring(0,150)}
            </div>
            <div className="text-center mb-1 text-violet-400 mx-auto">
                <FaQuoteRight/>
            </div>

        
        </div>
    )
}
export default Card;