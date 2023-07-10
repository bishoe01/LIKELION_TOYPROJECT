import React, { useState } from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { Fade } from 'react-reveal';
import { FlexCol } from '../constants/style';

export default function ReviewTotal() {
    const [starPoint, setStarPoint] = useState(4.5);
    const [reviewCount, setReviewCount] = useState([
        { star: 5, count: 30 },
        { star: 4, count: 17 },
        { star: 3, count: 8 },
        { star: 2, count: 10 },
        { star: 1, count: 2 },
    ]);


    function getMaxCount() {
        return Math.max(...reviewCount.map((review) => review.count));
    }

    function getTotalCount() {
        return reviewCount.reduce((sum, review) => sum + review.count, 0);
    }

    function getGaugeWidth(count) {
        const totalCount = getTotalCount();
        const percentage = (count / totalCount) * 100;
        return `${percentage}%`;
    }
    function renderStars() {
        let stars = [];

        for (let i = 1; i <= 5; i++) {
            if (starPoint >= i) {
                stars.push(<BsStarFill key={i} className="text-orange-500" />);
            } else if (starPoint >= i - 0.5) {
                stars.push(<BsStarHalf key={i} className="text-orange-500" />);
            } else {
                stars.push(<BsStar key={i} className="text-orange-500" />);
            }
        }
        return stars;
    }
    return (
        <Fade>
            <div className='flex items-center rounded-3xl border-2  h-[350px] border-gray-200 overflow-hidden'>
                <div className='rounded-2xl bg-[#eaeef7] w-[20%] h-full flex flex-col items-center justify-center gap-4' >
                    <span className='text-2xl'>전체 평균</span>
                    <h1 className='text-6xl font-bold mb-4'>4.5</h1>
                    <div className='flex gap-2 text-2xl'>
                        {renderStars()}
                    </div>
                    <span className='text-gray-500 text-xl'>(리뷰 67개)</span>
                </div>
                {/*  */}
                <div className={`${FlexCol} w-[80%] h-full items-center justify-center gap-6 px-2`}>
                    {reviewCount.map((review, index) => (
                        <section key={index} className="w-full flex items-center gap-6 justify-center">
                            <div className="flex w-[80%] h-4 bg-gray-200 rounded-full my-1 overflow-hidden">
                                <div
                                    className={`bg-black h-4 rounded-full ${review.count === getMaxCount() && 'bg-primary'}`}
                                    style={{ width: getGaugeWidth(review.count) }}
                                />
                            </div>
                            <span className="w-12 text-lg text-gray-500">{review.star}점</span>
                        </section>
                    ))}
                </div>
            </div>
        </Fade>
    )
}
