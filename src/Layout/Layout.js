import React, { useEffect } from 'react'
import './index.scss'

const Layout = (props) => {
  const { className } = props

  useEffect(() => {
    document.body.setAttribute('class', className)
  }, [className])

  return (
    <div className="page-wrapper">
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default Layout
