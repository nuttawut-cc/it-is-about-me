import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import Name from '../Name'
import PortfolioButton from '../PortfolioButton'
import Education from '../Education'
import Experience from '../Experience'
import Skill from '../Skill'
import Layout from '../Layout'
import './index.scss'

const MainPage = (props) => {
  const [isActive, set] = useState(false)

  useEffect(() => {
    set(true)
  }, [])

  const onEntertoPortfiloPage = () => {
    props.history.push('/portfolio')
  }

  return (
    <Layout className={classnames('main', { active: isActive })}>
      <Name />
      <Education />
      <Experience />
      <Skill />
      <PortfolioButton onClick={onEntertoPortfiloPage} />
      <div className="contact clearfix">
        <div className="tel">0618815537</div>
        <div className="socials">
          <a target="_blank" href="https://github.com/nuttawut-cc" className="icon github linked" />
          <a target="_blank" href="http://line.me/ti/p/~woodycatty" className="icon line linked" />
        </div>
      </div>
    </Layout>
  )
}

export default MainPage
