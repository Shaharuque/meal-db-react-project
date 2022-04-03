import React from 'react';

const ItemsOfCategory = (props) => {
    const {item}=props
    const {strMeal,strMealThumb,idMeal}=item
    return (
        <div className='p-6 border-2 shadow-lg shadow-teal-500 rounded-lg'>
            <div className='flex flex-col items-center'>
                <img className='w-2/4 ' src={strMealThumb} alt="" />
            </div>
            <div>
                <p className='font-bold font-mono mt-6 text-center'>{strMeal}</p>
            </div>
        </div>
    );
};

export default ItemsOfCategory;