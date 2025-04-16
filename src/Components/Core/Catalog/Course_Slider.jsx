import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Course_Card from "../Catalog/Course_Card.jsx";
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation";
// import "../../.."
// Import required modules
import { FreeMode, Pagination, Navigation  } from "swiper/modules";
import "../../../CSS/Components/Core/Catalog/Course_Slider.css";

function Course_Slider({Courses}) {
  return (
    <div>
      {
        Courses?.length ? (<div>
            <Swiper 
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            navigation={true}
            modules={[FreeMode, Pagination, Navigation]}
            breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
            }}
            >
                {
                    Courses.map((course, index)=> (
                        <SwiperSlide key={index}>
                            <Course_Card course={course}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>


        </div>) : (<div className='noCoursesFound'><p>No courses found.</p></div>)
      }
    </div>
  )
}

export default Course_Slider;
