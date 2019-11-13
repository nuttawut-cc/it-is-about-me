import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import Logo1 from '../images/logo1.png'
import Logo2 from '../images/logo2.png'
import Logo3 from '../images/logo3.png'
import Logo4 from '../images/logo4.png'
import Logo5 from '../images/logo5.png'
import Logo6 from '../images/logo6.png'
import Logo7 from '../images/logo7.png'
import Layout from '../Layout'
import './index.scss'

const PortfolioPage = (props) => {
  const [isActive, set] = useState(false)

  useEffect(() => {
    set(true)
  }, [])

  const onEntertoMainPage = () => {
    props.history.push('/')
  }

  return (
    <Layout className={classnames('portfolio', { active: isActive })}>
      <div className="content">
        <div className="heading txt-hover">Portfolio</div>
        <div className="logos">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <div><a target="_blank" href="http://bizidea.co.th/demo_html/workpointmusic" className="linked"><img src={Logo1} /></a></div>
            <div><a target="_blank" href="http://bizidea.co.th/demo_html/agc/" className="linked"><img src={Logo2} /></a></div>
            <div><a target="_blank" href="http://bizidea.co.th/demo_html/the-cube/" className="linked"><img src={Logo3} /></a></div>
            <div><a target="_blank" href="http://bizidea.co.th/demo_html/holidayinn" className="linked"><img src={Logo4} /></a></div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <div><a target="_blank" href="http://bizidea.co.th/demo_html/nutriliving/" className="linked"><img src={Logo5} /></a></div>
            <div><a target="_blank" href="http://bizidea.co.th/demo_html/interguard/" className="linked"><img src={Logo6} /></a></div>
            <div><a target="_blank" href="http://bizidea.co.th/demo_html/ifriend/" className="linked"><img src={Logo7} /></a></div>
          </div>
        </div>
        <div className="content-footer">
          <div
            className="back-to-home txt-hover linked"
            onClick={onEntertoMainPage}
          >
            ◁ Back to Main Page
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage
