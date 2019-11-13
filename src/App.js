import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import useMediaQuery from './hook/useMediaQuery'
import MainPage from './MainPage'
import PortfolioPage from './PortfolioPage'
import NoiseBg from './NoiseBg'
import Cursor from './Cursor'

const App = () => {
  const isIpadSize = useMediaQuery('(max-width: 1024px)')

  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/portfolio" component={PortfolioPage} />
        </Switch>
      </HashRouter>
      <NoiseBg disabled={isIpadSize} />
      <Cursor disabled={isIpadSize} />
    </>
  )
}

export default App