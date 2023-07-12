import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX } from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';
import { useState } from 'react';
import PlaceCard from './PlaceCard';
import PlaceCardMore from './PlaceCardMore';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/context';


export default function MyReservation() {
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
  const reservedPlaces = placeData.filter((place) => place.reserve === true);

  const [showAllPlaces, setShowAllPlaces] = useState(false);
  const handleShowAllPlaces = () => {
    setShowAllPlaces(true);
  };
  const visiblePlaces = showAllPlaces ? reservedPlaces: reservedPlaces.slice(0, 5);

  return (
    <div className={`${FlexCol} px-20`}>
      <div className={`${FlexRow} items-center place-content-end gap-2`}>
        <p className={`text-2xl font-extrabold `}>최근 추가순</p>
        <button>
          <img className={`w-[16px] h-[10px]`} src='../images/MyPageArrow.png' />
        </button>
      </div>
      <p className={`text-3xl font-extrabold m-2 mb-12`}>내 정보</p>
      <Fade>
        <div className='grid grid-cols-3 z-0 gap-8 mb-20'>
          {visiblePlaces.map((place, index) => (
            <Pulse when={selectedCard === index} key={index}>
              <Fade>
                <PlaceCard
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
              </Fade>
            </Pulse>
          ))}
          {!showAllPlaces && visiblePlaces.length >= 5 && (
            <Fade>
              <button
                onClick={handleShowAllPlaces}>
                <PlaceCardMore />
              </button>
            </Fade>
          )}
        </div>
      </Fade>
    </div>
  )
}
