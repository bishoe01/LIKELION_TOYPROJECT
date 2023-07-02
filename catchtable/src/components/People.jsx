import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import { useState } from 'react'
import './People.css'

export default function People({getPeople}) {
  let data = [1,2,3,4,5,6,7];
  const [selectedIdx, setSelectedIdx] = useState(null);
  const handleButtonClick = (idx) => {
    setSelectedIdx(idx);
    getPeople(++idx);
  };
  const shouldChangeBackground = selectedIdx !== null;

  return (
    <Fade>
      <div>
        <div className={`${FlexRow} gap-2 items-center px-20 py-12 pt-12`}>
            <div 
              className={`w-10 h-10 bg-searchNotice rounded opacity-70`}
              style={{ backgroundColor: shouldChangeBackground ? '#FE3F02' : '' }}
            ></div>
            <h1 className={`px-12 basis-5/6 text-white text-2xl font-bold`}>방문 인원</h1>
            {/* <button type="button" className={`ms-10 relative right-0 w-12 h-12 items-center`}>
                <img className={`w-6 h-4`} src='./images/filter_button.png' alt=""/>
            </button> */}
        </div>

        <div className={`${FlexRow} px-32 gap-4 w-full`}>
          {data.map((item, idx) =>{
            return (
              <>
                <button 
                  key={idx}
                  value={idx}
                  className={`btn ${selectedIdx === idx ? "btn_active" : ""}`}
                  onClick={() => handleButtonClick(idx)}
                  >
                  <p className={`text-white text-2xl`}>{item}명</p>
                </button>
              </>
            );
          })}
        </div>
      </div>
    </Fade>
  )
}

