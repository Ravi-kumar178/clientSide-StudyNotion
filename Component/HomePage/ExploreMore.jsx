import React, { useState } from 'react'
import HighlightText from './HighlightText';
import { HomePageExplore } from '../../data/homepage-explore';
import CourseCard from './CourseCard';

const tags = ["Free","New to coding","Most popular","Skills paths","Career paths"];


function ExploreMore() {

    const [currentTab, setCurrentTab] = useState(tags[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    console.log(courses);

    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);
    console.log(setCurrentCard)

    function setMyCard(value){
        setCurrentTab(value);
        setCourses(HomePageExplore.filter((courses)=>(courses.tag === value))[0].courses);
        setCurrentCard(HomePageExplore.filter((courses)=>(courses.tag === value))[0].courses[0].heading);
    }

  return (
    <div className='w-full mt-48 -mb-24 font-inter'>
        <div className='flex flex-col gap-4 mx-auto items-center'>
            {/* heading */}
            <div className='text-4xl font-bold text-richblack-5'>
                Unlock the <HighlightText text={"Power of Code"}/>
            </div>

            {/* description */}
            <div className='font-medium text-center text-pure-greys-400'>
             Learn to Build Anything You Can Imagine
            </div>

            {/* tabs */}
            <div className={`mt-8 bg-richblack-700 text-richblack-5
            flex flex-row items-center gap-5 px-4 py-2 rounded-full`}>
                {
                    tags.map((element,index)=>{
                        return(
                            <div key={index}
                            className={`cursor-pointer ${currentTab === element?"bg-richblack-900 rounded-full  px-3.5 py-1 font-mono":""}`}
                             onClick={()=>setMyCard(element)}
                            >
                                {element}
                            </div>
                        )
                    })
                }
            </div>

            {/* cards */}
            <div className='flex mt-16 w-11/12 max-w-maxContent gap-10 mx-auto flex-row items-center  '>
                {
                    courses.map((element,index)=>{
                        return(
                            <CourseCard 
                            key={index}
                            courseData = {element}
                            currentCard = {currentCard}
                            setCurrentCard = {setCurrentCard}
                            />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ExploreMore