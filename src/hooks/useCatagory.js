import { useEffect, useState } from "react"

const useCatagory=()=>{
    const [catagory,setCatagory]=useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=>setCatagory(data.categories))
    },[])
    return [catagory,setCatagory]
}

export {useCatagory}