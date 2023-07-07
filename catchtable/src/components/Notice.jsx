import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX } from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';

export default function Notice() {

    return (
        <Fade>
            <div className={`justify-center items-center ${FlexCol} px-12`}>
                <div className={`flex flex-col justify-center p-20 text-white bg-searchRealNotice center w-full h-[330px] tracking-wider rounded-xl`}>
                    <h2 className={`py-4 text-2xl font-bold `}>*예약 취소는 예약일로부터 3일전 가능합니다.</h2>
                    <ul className='flex flex-col gap-3 text-xl'>
                        <li>예약 확정 후에는 문구 수정이 어렵습니다.</li>
                        <li>픽업 시간 이전에 오시는 경우, 순차 제작으로 메뉴 픽업이 어려우신 점 참고 부탁드립니다.</li>
                        <li>영업 시간 이후에 방문하시는 경우 근처 픽업 및 매장 앞 픽업이 불가합니다.</li>
                        <li>퀵 이용하시는 경우 다마스퀵 보내주셔야 하며 퀵 이용중 제품 파손에 대한 책임은 없습니다.</li>
                        <li>당장 픽업이 불가하신 경우 제품 보관이 1일 연장됩니다.</li>
                    </ul>
                </div>

            </div>
        </Fade>
    )
}