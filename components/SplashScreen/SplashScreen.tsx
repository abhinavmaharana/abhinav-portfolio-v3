'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import anime from 'animejs'

interface SplashScreenProps {
    finishLoading: () => void;
}

function SplashScreen({ finishLoading }: SplashScreenProps) {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
        complete : () => finishLoading()
    })

    loader.add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        easing: "easeInOutExpo"
    })
    .add({
        targets: "#logo",
        delay: 0,
        scale: 1.25,
        easing: "easeInOutExpo"
    }).add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        easing: "easeInOutExpo"
    })
    .add({
        targets: "#logo",
        delay: 0,
        scale: 1.25,
        easing: "easeInOutExpo"
    })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
  })
  return (
    <div
        className={`flex h-screen items-center justify-center ${isMounted ? 'is-mounted' : ''}`}
    >
        <Image id="logo" src="/favicon.png" alt="Logo" width={124} height={76}/>
    </div>
  )
}

export default SplashScreen