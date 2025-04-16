import React from 'react';
import "../../CSS/Components/Common/Tab.css";

function Tab({tabData, field, setField}) {
  return (
    <div className='shifting'>
      {
        tabData.map((tab)=> (
          <div style={{backgroundColor: `${field === tab.type ? "#000814" : "#161D29"}`, cursor: "pointer"}} className='acountType' key={tab.id} onClick={()=>setField(tab.type)}>
            {tab?.tabName}
          </div>
        ))
      }
    </div>
  )
}

export default Tab

