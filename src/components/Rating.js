import React from 'react';

import { IoMdStarHalf } from '@react-icons/all-files/io/IoMdStarHalf';
import { IoMdStarOutline } from '@react-icons/all-files/io/IoMdStarOutline';
import { IoMdStar } from '@react-icons/all-files/io/IoMdStar';

const getArrayFormat = (rate) => {
  let array = [0, 0, 0, 0, 0].map((i, index) => (index < rate ? 1 : 0));
  if (rate % 1) {
    // if number has decimal part
    array[array.lastIndexOf(1)] = 0.5;
  }
  return array;
};

const Rating = ({ rate, className }) => {
  const array = getArrayFormat(rate);
  return (
    <div className="flex flex-row">
      {array.map((a) => {
        if (a === 1) return <IoMdStar className={className} />;
        else if (a === 0.5) return <IoMdStarHalf className={className} />;
        else return <IoMdStarOutline className={className} />;
      })}
    </div>
  );
};

export default Rating;
