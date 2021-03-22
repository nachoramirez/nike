import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './containers/Home/Home.jsx'
import Collections from './containers/Collections/Collections.jsx'
import Header from './components/Header/Header.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/running" component={Collections} />
          <Route exact path="/training" component={Collections} />
          <Route exact path="/futbol" component={Collections} />
          <Route exact path="/sportswear" component={Collections} />
          <Route exact path="/jordan" component={Collections} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
