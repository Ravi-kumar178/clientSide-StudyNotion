import React, { useEffect, useState } from 'react'
import Footer from '../Component/Common/Footer'
import { useParams } from 'react-router-dom'
import { categories } from '../Services/api'
import { apiConnector } from '../Services/apiConnector'
import { CategoryPageDetails } from '../Services/Operations/CategoryPageDetails'
import { useSelector } from 'react-redux'

export const Catalog = () => {
    
    const {catalogName} = useParams();
    const [categoryId, setCategoryId] = useState("");
    const[categoryPageData, setCategoryPageData] = useState([]);

    


    useEffect(()=>{
        const getCategoryId = async()=>{
            const response = await apiConnector("GET",categories.CATEGORIES_API);
            console.log("categories: ",response); 
            const categoryId = response.data.data.filter((ct)=>ct.name.split(" ").join("-").toLowerCase()===catalogName)[0]._id;
            setCategoryId(categoryId);
        }
        getCategoryId();
    },[catalogName])

    useEffect(()=>{
       const getPageData = async() =>{
        const response = await CategoryPageDetails({categoryId});
        console.log("response: ", response);
        setCategoryPageData(response);
       }
       if(categoryId){
        getPageData();
        
       }
    },[categoryId])
    
  return (
    <div className='text-white'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* <Footer/> */}
    </div>
  )
}
