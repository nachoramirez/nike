import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyle.js';

import Home from './containers/Home/Home.jsx'
import Collections from './containers/Collections/Collections.jsx'
import Header from './components/Header/Header.jsx'
import CartPage from './containers/CartPage/CartPage.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/running" component={Collections} />
          <Route exact path="/training" component={Collections} />
          <Route exact path="/futbol" component={Collections} />
          <Route exact path="/sportswear" component={Collections} />
          <Route exact path="/jordan" component={Collections} />
          <Route exact path="/Cart" component={CartPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
