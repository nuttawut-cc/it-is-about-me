import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import './index.scss'

const Cursor = () => {
  const cursorRef = useRef()
  const onMouseMove = (e) => {
    const axisX = e.clientX
    const axisY = e.clientY
    const isLinked = e.target.classList.contains('linked')
    cursorRef.current.className = `cursor ${isLinked ? 'active' : ''}`.trim()
    cursorRef.current.style.top = `${axisY}px`
    cursorRef.current.style.left = `${axisX}px`
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  })

  return createPortal(
    <div ref={cursorRef} className="cursor" />,
    document.body
  )
}

export default Cursor