import React, { useEffect, useState } from 'react';
import { useCatagory } from '../../hooks/useCatagory';
import FoodCatagory from '../FoodCatagory/FoodCatagory';
import SearchedResult from '../SearchedFood/SearchedResult';



const Home = () => {
    const [catagory, setCatagory] = useCatagory()
    //console.log(catagory) //food categories array pabo

    const [result, setResult] = useState([])
    const [searchText, setSearchText] = useState('')

    //fetch data basaed on search text by user
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setResult(data.meals))
    }, [searchText])  //searchText ar value can change so fetched data will be different on different searchText thats why searchText is in the dependency

    console.log(result)
    const searchFood = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <div>
            <div className='flex justify-center p-8'>
                <input onChange={searchFood} className=' border-2 border-sky-600 rounded' type="text" placeholder="search-food" />
            </div>
            <div className='grid md:grid-cols-3 gap-6 container mx-auto p-8'>
                {
                    
                    result.map(food=><SearchedResult key={food.idMeal} food={food}></SearchedResult>)
                   
                }
            </div>
            <p className='text-center font-serif text-2xl'>Categories</p>
            <p className='text-center font-serif text-xs mt-2'>you can choose anything u desire....</p>
            <div className='grid md:grid-cols-3 gap-8 container mx-auto p-8'>
                {
                    catagory.map(singleCategory => <FoodCatagory key={singleCategory.idCategory} singleCategory={singleCategory}></FoodCatagory>)
                }
            </div>
        </div>
    );
};

export default Home;