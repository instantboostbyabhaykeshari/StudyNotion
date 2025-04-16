import React from 'react';
import courseImage from "../../../assets/Images/TimelineImage.png";
import "../../../CSS/Components/Core/Catalog/Course_Card.css";
import { Link } from 'react-router-dom';

function Course_Card({course}) {

  console.log("abhay: ", )
  return (
    <Link to={`/catalog/${course?.name}/${course._id}`} style={{textDecoration: "none"}}>
      <div className='courseCard'>
        <img src={course?.thumbnail} alt="course-image" />
        <p className='courseCardDescription'>{course?.courseName}</p>
        <p className='courseBuilderName'>{course?.instructor?.firstName} {course?.instructor?.lastName}</p>
        <p className='courseRating'>Average rating</p>
        <h2>{course?.price.toLocaleString("en-IN", { style: 'currency', currency: 'INR' })}</h2>
      </div>
    </Link>
  )
}

export default Course_Card
