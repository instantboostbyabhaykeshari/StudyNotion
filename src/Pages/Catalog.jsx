import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import {apiConnector} from "../Services/apiConnector.js";
import { categories } from '../Services/apis';
import { getCatalogPageData } from '../Services/Operations/PageAndComponentData.js';
import "../CSS/Pages-CSS/Catalog.css";
import Course_Slider from '../Components/Core/Catalog/Course_Slider.jsx';

function Catalog() {
    const {catalogName} = useParams();
    // console.log(catalogName);
    const [catalogPageData, setCatalogPageData] = useState(null);
    const [categoryId, setCategoryId] = useState("");
    const [active, setActive] = useState(1);

    //Fetch all categories
    useEffect(()=>{
        try{
            const getCategories = async() => {
                const response = await apiConnector("GET", categories.CATEGORIES_API);
                // console.log(response?.data?.data.find((ct)=>ct).name);
                const categoryId = response?.data?.data?.filter(
                    (category) => category.name.split(" ").join("-").toLowerCase() === catalogName
                  )[0]._id

                console.log(categoryId);
                setCategoryId(categoryId);
            }
            getCategories();
        }catch(err){
            console.log(err);
            console.log("Could not fetch category.");
        }
    }, [catalogName]);

    useEffect(()=>{
        const getCategoryDetails = async() => {
            try{
                const response = await getCatalogPageData(categoryId);
                console.log(response);
                setCatalogPageData(response);
            }catch(err){
                console.log(err);
                console.log("Failed to get category details.");
            }
        }
        getCategoryDetails();
    }, [categoryId]);
    
  return (
    <>
        <div style={{backgroundColor: "#161D29"}}>
            <div className="catalogPageDetails">
                <div className='homeCatalogCategoryName'>
                    <p>{`Home / Catalog /`} <span style={{color: "#FFD60A"}}>{catalogPageData?.data?.selectedCategory?.name}</span></p>
                    <p>{`${catalogPageData?.data?.selectedCategory?.name}`}</p>
                    <p>{`${catalogPageData?.data?.selectedCategory?.description}`}</p>
                </div>
            </div>
        </div>
        

        {/* Section-1 */}

        <div>
            <div className="coursesToGetYouStarted">
                <p>Courses to get you started</p>
            </div>

            <div className='coursesCategoryDiv'>
                <p id='mostpopular' className={active===1 ? "activeCoursesCategory" : "unactiveCourseCategory"} onClick={()=>setActive(1)} >Most popular</p>
                <p id='new' className={active===2 ? "activeCoursesCategory" : "unactiveCourseCategory"} onClick={()=>setActive(2)}>New</p>
                <p id='trending' className={active===3 ? "activeCoursesCategory" : "unactiveCourseCategory"} onClick={()=>setActive(3)}>Trending</p>
            </div>

            <div className='mostPopularCourses'>
                {
                    active === 1 && (<Course_Slider className="mostPopularCourseSlider"  Courses={catalogPageData?.data?.allCoursesRegardingSelectedCategory}/>)
                }
                {
                    active === 2 && (<Course_Slider className="mostPopularCourseSlider"  Courses={catalogPageData?.data?.recentCourses}/>)
                }
            </div>

            <div className="topCourses">
                <p>Top Courses in {`${catalogPageData?.data?.selectedCategory?.name}`}</p>
                <Course_Slider className="mostPopularCourseSlider"  Courses={catalogPageData?.data?.recentCourses}/>
            </div>

            <div></div>
        </div>
    </>
  )
}

export default Catalog;


