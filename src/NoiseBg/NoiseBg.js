import React, { useRef, useEffect } from 'react'
import noiseDataUrl from './noiseDataUrl'
import './index.scss'

const NoiseBg = () => {
  const noiseBgRef = useRef()

  const setupNoise = () => {
    let frame = 0
    const keyframeController = () => {
      if (frame === 4) {
        frame = 0
      } else {
        frame++
      }

      noiseBgRef.current.style.backgroundImage = noiseDataUrl[frame]
    }

    const startNoiseAnimation = () => {
      keyframeController(frame)
      setTimeout(() => {
        window.requestAnimationFrame(startNoiseAnimation)
      }, 100)
    }

    startNoiseAnimation()
  }

  useEffect(setupNoise, [])

  return <div ref={noiseBgRef} className="noise-bg" />
}

export default NoiseBg
