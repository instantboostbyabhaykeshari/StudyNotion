import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Button from './Button';
import "../../../CSS/Components/Core/HomePage/CodeBlocks.css";

function CodeBlocks({section, subSection, btn1, btn2, code, backgroundGradient}) {
  return (
    <div className='codeBlock'>
      {/*Section-1*/}
        <div className="unlockPart">
          <div className='unlock'>
              <p>{section}</p>
              <p>{subSection}.</p>
          </div>
          <div className='tryItYourself'>
              <Button children={btn1.children} active={btn1.active} textColor={btn1.textColor} boxShadow={btn1.boxShadow} />
              <Button children={btn2.children} active={btn2.active} textColor={btn2.textColor} boxShadow={btn2.boxShadow} />
          </div>
        </div>

        {/*Section-2*/}
        <div className='codeAnimation'>
          <div className="codeAnimationInside">
            <div>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
              <p>11</p>
            </div>
            {/* <div className={backgroundGradient}></div> */}
            <TypeAnimation
              sequence={[code, 1000]}
              speed={50}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
    </div>
  )
}

export default CodeBlocks;
