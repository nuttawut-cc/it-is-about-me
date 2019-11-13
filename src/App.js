import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import MainPage from './MainPage'
import PortfolioPage from './PortfolioPage'
import NoiseBg from './NoiseBg'
import Cursor from './Cursor'

const App = () => (
  <>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/portfolio" component={PortfolioPage} />
      </Switch>
    </HashRouter>
    {/* <NoiseBg /> */}
    <Cursor />
  </>
)

export default App