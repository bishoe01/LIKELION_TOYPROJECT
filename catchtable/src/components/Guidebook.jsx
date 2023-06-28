import React from "react";
import { FlexCol, PaddingY } from "../constants/style";

export default function Guidebook() {
  return <div className={`${FlexCol} items-center bg-guidebook h-[1400px] py-[130px] relative`}
  >
    <h1 className="text-white text-[48px] font-bold">
      가이드북 선정 레스토랑
    </h1>
    <FoodImage food="bg-food2" position="right-20 top-80" />
    <FoodImage food="bg-food1" position="left-20 top-80" />
    <FoodCard />
  </div>

}


function FoodCard() {
  return (
    <div className="flex flex-col w-[500px] h-[650px] p-[50px] items-center justify-center border-2 mt-28 first-letter
    z-10
    bg-gradient-to-b from-black via-[#636363] to-[#636363] rounded-3xl opacity-[0.83]">
      <article className="text-white flex flex-col  gap-12">
        <h1 className="font-bold text-[36px] tracking-wide" >라시네 (Rachinnee)</h1>
        <p className="text-2xl tracking-wide">라시네는 한국과 벨기에 퓨전의
          컨템포러리 다이닝 레스토랑으로 벨기에
          디시 특유의 깔끔한 플레이팅과...<br />
          <br />
          라시네는 한국과 벨기에 퓨전의 컨템포러리 다이닝 레스토랑으로 벨기에 디시 특유의 깔끔한 플레이팅과 음식을 선보여줍니다.</p>

        <div className="flex items-center justify-around font-bold text-lg">
          <span>후기보기</span>
          <span>⭐️ 4.8</span>
          <button className="px-4 py-2 bg-transparent border-4 border-white rounded-xl">예약 오픈 알림 받기</button>
        </div>
      </article>
    </div>
  )
}


function FoodImage({ food, position }) {
  return (
    <div className={`
    flex flex-col w-[500px] h-[650px] 
      border-2 mt-28 absolute
      ${food} bg-cover bg-center bg-no-repeat rounded-2xl opacity-70
      ${position}
    `}
    >

    </div>
  )
}