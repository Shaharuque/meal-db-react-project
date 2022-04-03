import React from 'react';

const SearchedResult = (props) => {
    const { strMeal, strMealThumb, strCategory } = props.food
    return (
        <div className='border-2 rounded-lg border-gray-300 p-4 shadow-lg shadow-gray-500'>
            <div className='flex justify-center'>
                <img className='w-2/4 h-1/4' src={strMealThumb} alt="" />
            </div>
            <div className='flex flex-col items-center mt-6'>
                <h1 className='text-gray-400'>{strMeal}</h1>
                <p className='text-gray-600'>{strCategory}</p>
            </div>
        </div>
    );
};

export default SearchedResult;