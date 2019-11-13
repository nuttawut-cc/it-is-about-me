import React from 'react'
import './index.scss'

const Skill = () => (
  <div className="skill">
    <div className="javascript">
      <div style={{ flex: '0 0 100%' }}>
        <span className="txt25 txt-hover">Jquery</span>
      </div>
      <div style={{ flex: '0 0 40%', top: '-1.5rem', left: '1.5rem' }}>
        <span className="hl txt50 txt-hover">React</span>
      </div>
      <div style={{ flex: '0 0 60%' }}>
        <span className="txt-hover">Redux-Observable</span>
      </div>
      <div style={{ flex: '2 0 0', top: '-2rem', left: '1rem' }}>
        <span className="hl txt50 txt-hover">Redux</span>
      </div>
      <div style={{ flex: '0 0 40%' }}>
        <span className="txt-hover">Redux-Form</span>
      </div>
      <div style={{ flex: '1 0 0', top: '-1rem' }}>
        <span className="txt35 txt-hover">Jest</span>
      </div>
      <div style={{ top: '-0.5rem' }}>
        <span className="txt-hover">Formik</span>
      </div>
      <div>
        <span className="txt-hover">Enzyme</span>
      </div>
    </div>
    <div className="version-control">
      <div style={{ left: '1rem', top: '-1rem' }}>
        <span className="txt-hover">Github</span>
      </div>
      <div style={{ top: '1rem' }}>
        <span className="hl txt25 txt-hover">Bitbucket</span>
      </div>
    </div>
    <div className="html">
      <div style={{ left: '1rem', top: '0.5rem' }}>
        <span className="txt-hover">HTML5</span>
      </div>
      <div style={{ top: '2rem' }}>
        <span className="txt-hover">Sass</span>
      </div>
      <div style={{ right: '2rem' }}>
        <span className="txt-hover">Css3</span>
      </div>
    </div>
    <div className="other">
      <div style={{ flex: '0 0 20%', left: '2rem' }}>
        <span className="txt-hover">Npm</span>
      </div>
      <div style={{ flex: '0 0 80%', top: '1rem' }}>
        <span className="txt-hover">Yarn & Yarn Workspaces</span>
      </div>
      <div> <span className="txt-hover">Webpack</span></div>
      <div style={{ top: '2rem' }}>
        <span className="txt-hover">Babel</span>
      </div>
      <div style={{ top: '1rem' }}>
        <span className="txt-hover">Express</span>
      </div>
    </div>
  </div>
)

export default Skill
