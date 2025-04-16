import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import HighlightText from '../Components/Core/HomePage/HighlightText';
import Button from '../Components/Core/HomePage/Button';
import CodeBlocks from '../Components/Core/HomePage/CodeBlocks';
import Banner from "../assets/images/banner.mp4";

import "../CSS/Pages-CSS/Home.css";

const Home = () => {
  return (
    <div>
        {/* Section 1 */}
        <div className="quote">
            <Link to={"/signup"} style={{textDecoration: "none"}}>
                <div className="becomeInstructor">
                    Become an Instructor &nbsp; <FaArrowRight />
                </div>
            </Link>
            <div className='codingSkillsPara'>
                <p className='empower'>Empower Your Future with <HighlightText text = {"Coding Skills"} HighlightTextColor ={"yellow"} /></p>

                <p className='onlineCodingCourse'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. </p>
            </div>
            <div className='learnMoreBookADemoButton'>
                <Button children={"Learn more"} active={true} linkTo={"/about"} textColor={true} boxShadow={true} />

                <Button children={"Book a demo"} active={false} linkTo={"/signup"} textColor={false} boxShadow={false} />
            </div>

            {/* Section 1 Video */}
            <div className='homePageVideo'>
                <video src={Banner} loop autoPlay muted></video>
            </div>

            {/* Section 1 code */}
            <CodeBlocks
             section={<p>Unlock your <HighlightText text={"coding potential"} /> with our online courses.</p>} 

             subSection={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}

             btn1={
                {
                    children:"Try it Yourself",
                    active: true,
                    linkTo: "/singnup",
                    textColor: true,
                    boxShadow: true
                }
             }

             btn2={
                {
                    children:"Learn More",
                    active: false,
                    linkTo: "/loginup",
                    textColor: false,
                    boxShadow: false
                }
             }

            code={`<!DOCTYPE html>\n
                    <html lang="en">\n
                    <head>\n
                        <meta charset="UTF-8">\n
                        <meta name="viewport" content="width=device-width \n 
                        initial-scale=1.0">\n
                        <title>StudyNotion</title>\n
                    </head>\n
                    <body> Abhay\n
                    </body>\n
                    </html>`}
            // backgroundGradient={"codeBlock1"}
            />

        </div>
    </div>
  )
}

export default Home;
