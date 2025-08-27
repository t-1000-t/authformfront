import React from 'react'
import { createPortal } from 'react-dom'
import { Center, usePrefersReducedMotion } from '@chakra-ui/react'
import Lottie from 'react-lottie-player'
import animationData from '../animations/loadingb2f5ea.json'

const LoadingScreen = ({ size = 120, bg = 'black', overlay = true, loop = true }) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const LOADING_SPINNER = document.querySelector('#loading-spinner')

  return createPortal(
    <Center
      position={overlay ? 'fixed' : 'relative'}
      inset={overlay ? 0 : undefined}
      w="100%"
      minH="100dvh" // safer on mobile than 100vh
      bg={bg}
      pointerEvents="none" // avoid trapping clicks if overlayed
    >
      <Lottie
        animationData={animationData}
        play={!prefersReducedMotion}
        loop={loop && !prefersReducedMotion}
        style={{ width: size, height: size }}
        role="img"
        aria-label="Loading"
      />
    </Center>,
    LOADING_SPINNER,
  )
}

export default LoadingScreen
