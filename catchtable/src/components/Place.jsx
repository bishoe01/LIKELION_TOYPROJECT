import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX } from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';
import { useAuthContext } from '../context/context';

export default function Place({ date, time, people, searchedPlace }) {
    const movePage = useNavigate();
    const [selectedCard, setSelectedCard] = useState(null);
    const handleCardClick = (index) => {
        setSelectedCard(index);
        if (placeData[index].title === '밀플랜비') {
            setTimeout(() => {
                movePage('/hotplace');
            }, 1000);
        }
    };
    const { placeData } = useAuthContext();

    const filteredPlaceData = searchedPlace ? placeData.filter(place => place.title === searchedPlace) : placeData;

    return (
        <div className={`${FlexCol}`}>
            <h1 className={`${FlexRow} gap-2 items-center px-20 pt-20 pb-12 basis-5/6 text-white text-3xl font-bold`}>예약이 가능한 곳</h1>
            <div className={`px-20 ${FlexRow} gap-4`}>
                <div className={`text-white text-xl rounded-full border py-2 px-8 w-fit`}>
                    날짜 : {date}
                </div>
                <div className={`text-white text-xl rounded-full border py-2 px-8 w-fit`}>
                    시간 : {time}
                </div>
                <div className={`text-white text-xl rounded-full border py-2 px-8 w-fit`}>
                    인원 : {people}
                </div>
            </div>
            <Fade>
                <div className='grid grid-cols-3 z-0 gap-12 px-20 py-16'>
                    {filteredPlaceData.map((place, index) => (
                        <Pulse when={selectedCard === index}>
                            <PlaceCard
                                key={index}

                                title={place.title}
                                image={place.image}
                                detail={place.detail}
                                price={place.price}
                                star={place.star}
                                review={place.review}

                                index={index}
                                selectedCard={selectedCard}
                                handleCardClick={handleCardClick}
                            />
                        </Pulse>
                    ))}
                </div>
            </Fade>
        </div>
    )
}

function PlaceCard({ title, image, detail, price, review, star,
    index, selectedCard, handleCardClick }) {
    const isSelected = selectedCard === index;
    const renderStars = (numStars) => {
        const stars = [];
        const fullStars = Math.floor(numStars);
        const hasHalfStar = numStars % 1 !== 0;
        console.log(numStars);
        console.log(fullStars);
        console.log(hasHalfStar);

        for (let i = 0; i < fullStars; i++) {
            stars.push(<ImStarFull key={`full_${i}`} />);
        }

        if (hasHalfStar) {
            stars.push(<ImStarHalf key={`half`} />);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<ImStarEmpty key={`empty_${i}`} />);
        }

        return stars;
    };

    return (
        <div className={`${FlexCol} text-white text-xl rounded-[20px] 
            bg-placeCard h-[500px] gap-4 border`}
            style={{ borderColor: isSelected ? '#FE3F02' : 'transparent' }}
            onClick={() => handleCardClick(index)}>
            <img className={`rounded-t-[20px]`} src={image} />
            <div className={`${FlexCol} px-4 gap-4`}>
                <div className={`${FlexRow} items-center relative`}>
                    <p className={`text-[26px]`}>{title}</p>
                    <img
                        className={`ps-4 h-[32px] pb-2 absolute right-0`}
                        src='../images/place_nextToTitle.png' />
                </div>
                <div className={`${FlexRow} items-center`}>
                    {renderStars(star)}
                    <p className={`text-base opacity-50 ps-1`}>({review})</p>
                </div>
                <p className={`text-base tracking-wider pt-2 min-w-fit`}>
                    {detail}
                </p>
                <div className={`${FlexRow} gap-4 items-center pt-2`}>
                    <p className={`text-[26px]`}>{price}</p>
                    <p className={`text-base opacity-50 pt-2`}>점심 저녁 동일가</p>
                </div>
            </div>
        </div>
    )
}
