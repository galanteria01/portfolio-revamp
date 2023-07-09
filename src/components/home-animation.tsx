
import React from 'react'
import animationData from '../assets/tea-brewing.json'
import Lottie from 'react-lottie';

export default function HomeAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Lottie options={defaultOptions} />
  )
}
