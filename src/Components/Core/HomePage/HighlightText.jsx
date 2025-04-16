import React from 'react'
import "../../../CSS/Components/Core/HomePage/HighlightText.css";

function HighlightText({text}) {
  return (
      <span className='highlightTextColor'>
        {text}
      </span>
  )
}

export default HighlightText;
