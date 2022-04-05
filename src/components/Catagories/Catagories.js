import React from 'react';
import { useCatagory } from '../../hooks/useCatagory';
import FoodCatagory from '../FoodCatagory/FoodCatagory';

const Catagories = () => {
    const [catagory, setCatagory] = useCatagory()
    return (
        <div className='grid md:grid-cols-3 gap-8 container mx-auto p-8'>
            {
                catagory.map(singleCategory => <FoodCatagory key={singleCategory.idCategory} singleCategory={singleCategory}></FoodCatagory>)
            }
        </div>
    );
};

export default Catagories;