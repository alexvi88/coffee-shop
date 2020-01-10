import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Articles from './components/Articles'
import Basket from './components/Basket'
import Header from './components/Header'
import Login from './components/Login'
import ProductPage from './components/ProductPage'
import Products from './components/Products'
import ArticlePage from "./components/ArticlePage";
import Registration from "./components/Registration"

const App: React.FC = () => {
  return (
      <Router>
          <div>
              <Header />

              <Route path="/" exact component={Products} />
              <Route path="/product/:product_id" component={ProductPage} />
              <Route path="/article/:article_id" component={ArticlePage} />
              <Route path="/articles" component={Articles} />
              <Route path="/basket" component={Basket} />
              <Route path="/login" component={Login} />
              <Route path="/registration" component={Registration} />

          </div>
      </Router>
  )
}

export default App