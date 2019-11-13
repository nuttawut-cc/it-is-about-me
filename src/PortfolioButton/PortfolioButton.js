import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import './index.scss'

const PortfolioButton = (props) => {
  const { onClick } = props
  const [isClick, set] = useState(false)
  const onButtonClick = () => {
    set(prevState => !prevState)
    setTimeout(onClick, 2000)
  }

  return (
    <div
      className={
        classnames('portfolio-button linked bounce-in', {
          'bounce-out active': isClick
        })
      }
      onClick={onButtonClick}
    >
      <div className="wrapper">
        {'Portfolio'.split('').map((char, idx) => <div key={idx}>{char}</div>)}
      </div>
    </div>
  )
}

export default PortfolioButton
