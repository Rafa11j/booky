import React from "react";
import { MdStar, MdStarHalf } from "react-icons/md";

interface IRaterState {
  generateStars(rate: number): React.ReactNode;
}

const generateStars = (rate: number) => {
  const starsLength = Array.from({length: 5}, (v, k) => k + 1);
  if (rate) {
    const format = String(rate).split('.');
    const length = Number(format[0]);
    if (format.length > 1) {
      const list = Array.from({length}, (v, k) => k + 1)
      const rest = 5 - (list.length + 1);
      const restList = Array.from({length: rest}, (v, k) => k + 1)

      return (
        <>
          {
            list.map(item => (
              <MdStar key={item} color="#ffc107" />
            ))
          }
          <MdStarHalf color="#ffc107" />
          {
            rest > 0 &&
              restList.map(item => (
                <MdStar key={item} color="#8c8c8c" />
              ))
          }
        </>
      )
    } else {
      const list = Array.from({length}, (v, k) => k + 1)
      const rest = 5 - list.length;
      const restList = Array.from({length: rest}, (v, k) => k + 1)
      return (
        <>
          {
            list.map(item => (
              <MdStar key={item} color="#ffc107" />
            ))
          }
          {
            rest > 0 && (
              restList.map(item => (
                <MdStar key={item} color="#8c8c8c" />
              ))
            )
          }
        </>
      )
    }
  }
  return (
    starsLength.map(item => (
      <MdStar key={item} color="#8c8c8c" />
    ))
  )
};

export default function useRater(): IRaterState {
  return {
    generateStars
  }
}
