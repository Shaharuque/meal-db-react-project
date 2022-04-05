import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import ItemsOfCategory from '../Items_Of_Specific_Category/ItemsOfCategory';
import Spinner from '../Spinner/Spinner';

const SpecificCategory = () => {
    const [items, setItems] = useState([])
    const { category } = useParams()
    //console.log(category)

    //Task: spinner show when data is loading after data loading finish spinner will be hide
    const [dataLoading,setDataLoading]=useState(false)

    //Task: based on the category value i get i need to get data from API using 'category' value
    //fetch data API which is gonna dynamically change on the value of 'category'
    useEffect(() => {
        setDataLoading(true)
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data.meals)
                setDataLoading(false)
            })
    }, [category])


    //back btn event handler
    const navigate=useNavigate()
    const backtoHome=()=>{
        navigate('/catagories')
    }
    return (
        <div>
        {/*using conditional rendering */}
            {
               dataLoading ? <Spinner></Spinner>
               :
               items.length > 12 ?
               <div className='grid md:grid-cols-3 gap-6 p-8'>
                   {
                       items.slice(0, 12).map(item => <ItemsOfCategory key={item.idMeal} item={item}></ItemsOfCategory>)
                   }
               </div>
               :
               <div className='grid md:grid-cols-3 gap-6 p-8'>
                   {
                       items.map(item => <ItemsOfCategory key={item.idMeal} item={item}></ItemsOfCategory>)
                   }
               </div>
            }
            <div className='flex justify-center mb-6'>
            <button className='bg-teal-800 px-6 py-2 rounded-lg text-white'  onClick={backtoHome}>Back</button>
            </div>
            
            
        </div>
    );
};

export default SpecificCategory;