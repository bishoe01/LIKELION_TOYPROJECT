import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';
import { useState } from 'react';

export default function MyReview() {
  const [selectedBtn, setSelectedBtn] = useState(1);
  const handleButtonClick = (idx) => {
    setSelectedBtn(idx);
  }
  const reviewData = [
    { review: "매장 안 분위기도 괜찮고 여러 명이 모여서 저녁 즐기기 딱이었어요!", star: "5.0", day:"하루전"},
    { review: "요구 사항이 많았는데 직원 분이 엄청 친절하게 대해주셔서 만족스러웠어요", star: "4.7", day:"5일전"},
    { review: "요구 사항이 많았는데 직원 분이 엄청 친절하게 대해주셔서 만족스러웠어요", star: "4.5", day:"6일전"},
    { review: "요구 사항이 많았는데 직원 분이 엄청 친절하게 대해주셔서 만족스러웠어요", star: "4.5", day:"6일전"},
    { review: "요구 사항이 많았는데 직원 분이 엄청 친절하게 대해주셔서 만족스러웠어요", star: "4.5", day:"6일전"},
    { review: "요구 사항이 많았는데 직원 분이 엄청 친절하게 대해주셔서 만족스러웠어요", star: "4.5", day:"6일전"},
    { review: "요구 사항이 많았는데 직원 분이 엄청 친절하게 대해주셔서 만족스러웠어요", star: "4.5", day:"6일전"},
    { review: "요구 사항이 많았는데 직원 분이 엄청 친절하게 대해주셔서 만족스러웠어요", star: "4.5", day:"6일전"},
    { review: "요구 사항이 많았는데 직원 분이 엄청 친절하게 대해주셔서 만족스러웠어요", star: "4.5", day:"6일전"},
    { review: "요구 사항이 많았는데 직원 분이 엄청 친절하게 대해주셔서 만족스러웠어요", star: "4.5", day:"6일전"},
  ];
  
  const [showAllReviews, setShowAllReviews] = useState(false);
  const handleShowAllReviews = () => {
    setShowAllReviews(true);
  };
  const getVisibleReviewCount = (selectedBtn) => {
    switch (selectedBtn) {
      case 1:
        return 3;
      case 2:
        return 4;
      case 3:
        return 9;
      default:
        return 0;
    }
  };
  const visibleReviews = showAllReviews ? reviewData : reviewData.slice(0, getVisibleReviewCount(selectedBtn));

  return (
    <div className={`${FlexCol} mx-20`}>
      <div className={`${FlexRow} gap-4 relative`}>
        <div className={`${FlexRow} gap-4`}>
          <button 
            className={`w-[30px] h-[30px]`} 
            onClick={() => {handleButtonClick(1); setShowAllReviews(false);}}>
            <img src='../images/MyReviewOne.png'/>
          </button>
          <button 
            className={`w-[30px] h-[30px]`} 
            onClick={() => {handleButtonClick(2); setShowAllReviews(false);}}>
            <img src='../images/MyReviewTwo.png'/>
          </button>
          <button 
            className={`w-[30px] h-[30px]`} 
            onClick={() => {handleButtonClick(3); setShowAllReviews(false);}}>
            <img src='../images/MyReviewThree.png'/>
          </button>
        </div>
        <div className={`${FlexRow} items-center gap-2 absolute right-0`}>
          <p className={`text-2xl font-extrabold`}>최근 추가순</p>
          <button>
            <img className={`w-[16px] h-[10px]`} src='../images/MyPageArrow.png'/>
          </button>
        </div>
      </div>
      <Fade>
        <div className={`mt-8`}>
          <div className={`grid grid-cols-${selectedBtn} mt-12 gap-8 mb-12`}>
          {visibleReviews.map((review, index) => (
            <div key={index}>
              {selectedBtn === 1 && 
              <MyReviewOne 
                  review={review.review}
                  star={review.star}
                  day={review.day}

                  index={index}
                />
              }
              {selectedBtn === 2 &&
              <MyReviewTwo
                  review={review.review}
                  star={review.star}
                  day={review.day}

                  index={index}
                />
              }
              {selectedBtn === 3 &&
              <MyReviewThree
                  review={review.review}
                  star={review.star}
                  day={review.day}

                  index={index}
                />
              }
            </div>
          ))}
          </div>
          {!showAllReviews && (
            <button
              className={`mt-4 mb-20 rounded-[20px] w-full h-20 bg-gray-200 text-2xl font-black`}
              onClick={handleShowAllReviews}>
              모든 리뷰 보기
            </button>
          )}
        </div>
      </Fade>
    </div>
  )
}

function MyReviewOne({review, star, day}) {
  return(
    <div className={`${FlexCol} border-b-[6px] border-gray-300 pb-8`}>
        <img 
          className={`w-[300px] h-[200px] rounded-[12px] object-cover`}
          src='../images/place_Ann.jpg'/>
        <div className={`${FlexRow} text-2xl font-medium mt-8`}>
          <p className={`w-[80%]`}>{review}</p>
          <div className={`${FlexRow} w-[10%] items-center`}>
            <img 
              className={`w-[20px] h-[19px]`}
              src='../images/MyPageStar.png'/>
            <p className={`text-center`}>{star}</p>
          </div>
          <p className={`w-[10%] text-center`}>{day}</p>
        </div>
    </div>
  )
}

function MyReviewTwo({review, star, day}) {
  return(
    <div className={`${FlexCol} text-2xl font-medium mb-8 
                      border-b-[6px] border-gray-300 pb-4`}>
      <img 
        className={`aspect-square rounded-[12px] object-cover place-self-center`}
        src='../images/place_Ann.jpg'/>
      <p className={`mt-4 mx-2 mb-2`}>{review}</p>
      <div className={`${FlexRow} place-content-center items-center`}>
        <img 
          className={`w-[20px] h-[19px]`}
          src='../images/MyPageStar.png'/>
        <p className={`text-center mr-2`}>{star}</p>
        <p className={`text-center ml-2`}>{day}</p>
      </div>
    </div>
  )
}

function MyReviewThree({review, star, day}){
  return(
    <div className={`${FlexCol} text-2xl font-medium mb-8
                      border-b-[6px] border-gray-300 pb-4`}>
      <img 
        className={`aspect-square rounded-[12px] object-cover place-self-center`}
        src='../images/place_Ann.jpg'/>
      <p className={`mt-4 mb-2`}>{review}</p>
      <div className={`${FlexRow} place-content-center items-center`}>
        <img 
          className={`w-[20px] h-[19px]`}
          src='../images/MyPageStar.png'/>
        <p className={`text-center mr-2`}>{star}</p>
        <p className={`text-center ml-2`}>{day}</p>
      </div>
    </div>
  )
}