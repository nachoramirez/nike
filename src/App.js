import React from 'react'
import 'react-notifications-component/dist/theme.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyle.js'

import Home from './containers/Home/Home.jsx'
import Collections from './containers/Collections/Collections.jsx'
import Header from './components/Header/Header.jsx'
import CartPage from './containers/CartPage/CartPage.jsx'
import ProductPage from './containers/ProductPage/ProductPage.jsx'
import ReactNotification from 'react-notifications-component'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ReactNotification />
        <Header />
        <GlobalStyle />
        <Switch>
          <Route exact path="/nike" component={Home} />
          <Route exact path="/nike/running" component={Collections} />
          <Route exact path="/nike/training" component={Collections} />
          <Route exact path="/nike/futbol" component={Collections} />
          <Route exact path="/nike/sportswear" component={Collections} />
          <Route exact path="/nike/basquet" component={Collections} />
          <Route exact path="/nike/Cart" component={CartPage} />
          <Route exact path="/nike/:category/:id" component={ProductPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
