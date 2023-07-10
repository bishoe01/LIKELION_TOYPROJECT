import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import { useState } from 'react';
import axios from 'axios';
import MyTabMenu from '../components/MyTabMenu';

export default function MyPage() {
  return (
    <div>
        <div className={`flex h-[210px] mt-20 text-center justify-center items-center`}>
            <p className={`text-3xl font-extrabold`}>내 정보</p>
        </div>
        <MyTabMenu />
    </div>
  )
}
