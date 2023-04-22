'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import { CardSliderSC } from '../styled';

const Slider = ({ screenshots }) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const childrenArray = Array.from(screenshots);
  const currentSlide = childrenArray[currentSlideIdx];

  const prevSlideHandler = () =>
    setCurrentSlideIdx((curr) => (curr ? curr - 1 : screenshots.length - 1));

  const nextSlideHandler = useCallback(
    () =>
      setCurrentSlideIdx((curr) =>
        curr < screenshots.length - 1 ? curr + 1 : 0
      ),
    [screenshots.length]
  );

  useEffect(() => {
    const id = screenshots.length > 2 && setInterval(nextSlideHandler, 5000);
    setOpacity(1);
    return () => id;
  }, [nextSlideHandler, screenshots.length]);

  return currentSlide ? (
    <CardSliderSC opacity={opacity}>
      {screenshots.length > 2 && (
        <button onClick={prevSlideHandler}>
          <span>{'<'}</span>
        </button>
      )}
      <Image
        defaultloader={currentSlide.toString()}
        src={currentSlide.image}
        alt={currentSlide.id}
        height={100}
        width={200}
        priority
      />
      {screenshots.length > 2 && (
        <button onClick={nextSlideHandler}>
          <span>{'>'}</span>
        </button>
      )}
    </CardSliderSC>
  ) : (
    <></>
  );
};

export default Slider;
