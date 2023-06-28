import React, { useState } from 'react'
import { FlexCol, FlexRow, PaddingX, PaddingY } from '../constants/style'
import { Fade, Slide } from 'react-reveal';

export default function Footer() {
    const [quickLink, setQuickLink] = useState(["Home", "Products", "About", "Features", "Contact"]);
    const [resources, setResources] = useState(["Terms of Service", "Privacy Policy", "Location & Contact", "FAQ", "Gift Cards", "Refund Policy"]);
    return (
        <div
            className={`${FlexRow} ${PaddingX} py-16 text-white relative
        bg-[#0e0e0e] h-[420px] gap-24
        `}>
            <img
                className='w-[400px] h-[150px] object-contain mt-16'
                src="./images/removedlogo.png" alt="" />
            <div className='w-2/3 grid grid-cols-2 tracking-wide'>
                <div className='flex flex-col gap-3'>
                    <Fade top>
                        <h1 className='text-[24px] font-bold'>Quick Link</h1>
                        <div className='grid grid-cols-2 gap-8 mt-6 w-2/3'>
                            {quickLink.map((item, index) => (
                                <span className='text-xl opacity-90 hover:text-primary' key={index}>{item}</span>
                            ))
                            }
                        </div>
                    </Fade>
                </div>
                <div className='flex flex-col gap-3'>
                    <Fade top>

                        <h1 className='text-[24px] font-bold'>Resources</h1>
                        <div className='grid grid-cols-2 gap-8 mt-6'>

                            {resources.map((item, index) => (
                                <span className='text-xl opacity-90 hover:text-primary' key={index}>{item}</span>
                            ))
                            }
                        </div>

                    </Fade>
                </div>
                <h1 className='text-xl font-bold absolute left-[100px] bottom-4 tracking-widest'>
                    ©2023 CATCHTABLE |  All rights reserved
                </h1>
            </div>


        </div>
    )
}
