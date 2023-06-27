import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    return (
        <div className='flex justify-between items-center '>
            <img className=' cursor-pointer' onClick={() => navigate('/ss')} src="./images/logo.png" alt="" />
            <ul className='flex gap-8'>
                <Link to='/region'>Home</Link>
                <Link to='/menuchoice'>About</Link>
                <Link to='/hotplace'>Contact</Link>
            </ul>
        </div>
    )
}

export default Header