import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import { useState } from 'react'
import axios from 'axios';

export default function Search({apiUrl}) {

    const [inputs, setInputs] = useState({search: ''});
    const {search} = inputs;
    const onChange = (e) => {
        const { value, name } = e.target; 
        setInputs({...inputs, [name]: value }); 
        console.log(e.target);
    };
    // const onSubmit =() =>{
    //     axios.post(`${apiUrl}`)
    // }

    return (
        <Fade>
            <div className={`${FlexRow} mt-20 mx-20 w-2/5`}>
                <form className={`rounded-full ${FlexRow} bg-white flex-auto`}>
                    <input 
                        className='text-xl basis-[90%] rounded-l-full p-4 tracking-wider bg-white outline-none px-12 align-middle' 
                        type="text" 
                        name="search"
                        value={search}
                        onChange={onChange}
                        placeholder='지역, 음식, 레스토랑명으로 찾아보세요' />
                    <button 
                        type="button" 
                        className={` bg-white rounded-r-full outline-none start-[-8px]`}
                        >
                        <img className={`w-4 h-4`} src='./images/filter_search.png' alt=""/>
                    </button>  
                </form>
            </div>
        </Fade>
    )
}
