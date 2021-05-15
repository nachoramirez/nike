import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyle.js'

import Home from './containers/Home/Home.jsx'
import Collections from './containers/Collections/Collections.jsx'
import Header from './components/Header/Header.jsx'
import CartPage from './containers/CartPage/CartPage.jsx'
import ProductPage from './containers/ProductPage/ProductPage.jsx'
import Loading from './components/Loading/Loading.jsx'

import { CallApi } from './redux/Actions/index'

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
          <Route exact path="/:category/:id" component={ProductPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
