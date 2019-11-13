import React, { useRef, useEffect } from 'react'
import noiseDataUrl from './noiseDataUrl'
import './index.scss'

const NoiseBg = (props) => {
  const { disabled } = props
  const noiseBgRef = useRef()

  let animationTimeOut
  const setupNoise = () => {
    let frame = 0
    const keyframeController = () => {
      if (frame === 4) {
        frame = 0
      } else {
        frame++
      }

      if (noiseBgRef.current) {
        noiseBgRef.current.style.backgroundImage = noiseDataUrl[frame]
      }
    }

    const startNoiseAnimation = () => {
      keyframeController(frame)
      animationTimeOut = setTimeout(() => {
        window.requestAnimationFrame(startNoiseAnimation)
      }, 100)
    }

    startNoiseAnimation()
  }

  useEffect(() => {
    clearTimeout(animationTimeOut)

    if (!disabled) {
      setupNoise()
    }
  }, [disabled])

  return !disabled && <div ref={noiseBgRef} className="noise-bg" />
}

export default NoiseBg
