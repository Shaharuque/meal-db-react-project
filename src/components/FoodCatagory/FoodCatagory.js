import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodCatagory = (props) => {
    const {singleCategory}=props
    const {strCategory,strCategoryDescription,strCategoryThumb}=singleCategory

    //defined path a niye jay
    const navigate=useNavigate()
    //Explore more!! btn click event handler
    const exploreMore=()=>{
        navigate(`/specific_category/${strCategory}`)
    }
    return (
        <div className='rounded border-2 p-4 shadow-lg shadow-teal-500'>
            <div>
                <img src={strCategoryThumb} alt="" />
            </div>
            <div>
                <p className='text-center my-10 font-sans font-bold'>{strCategory}</p>
                <p className='font-mono text-sm'>{strCategoryDescription.length>80 ?strCategoryDescription.slice(0,80)+'...':strCategoryDescription}</p>
                <div className='flex justify-center'>
                    <button onClick={exploreMore} className='bg-teal-400 hover:bg-purple-500 p-3 text-white mt-8 rounded-lg'>Explore more!!</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCatagory;