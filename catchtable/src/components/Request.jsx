import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import { useState } from 'react'
import './Request.css'

export default function Request({getRequest}) {

  const [inputs, setInputs] = useState({request: ''});
  const {request} = inputs;
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({...inputs, [name]: value }); // 기존의 input 객체를 복사한 뒤 name 키를 가진 값을 value 로 설정
    getRequest(e.target);
    console.log(inputs);
  };

  // const [isFormOpen, setIsFormOpen] = useState(true);
  // const handleButtonClick = () => {
  //   setIsFormOpen(!isFormOpen);
  // };
  
  return (
    <Fade>
      <div className={`${FlexCol} pt-12`}>

        <div className={`${FlexRow} gap-2 items-center px-20 py-12`}>
            <div className={"filled" + (request == "" ? "" : "_yes")}></div>
            <h1 className={`px-12 basis-5/6 text-white text-2xl font-bold`}>요청 사항</h1>
            {/* <button 
              type="button" 
              className={`ms-10 relative right-0 w-12 h-12 items-center`}
              onClick={handleButtonClick}
              >
                <img className={`w-6 h-4`} src='./images/filter_button.png' alt=""/>
            </button> */}
        </div>

        <form className={`flex justify-center pb-12 px-20 w-full transition-height `}>
          <textarea className='resize-none rounded p-4 tracking-wider w-[90%] h-[280px]
                  bg-white outline-none px-4 align-middle  align-top text-xl' 
                  type="text" 
                  name="request"
                  value={request}
                  onChange={onChange}
                  placeholder='요청사항을 적어주세요' />
        </form>
        
      </div>
    </Fade>
  )
}
