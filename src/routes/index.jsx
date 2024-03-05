//react
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/home/index.jsx'
//other
import { APP_ROUTERS } from '../utils/constants.js'
import DiscountPage from '../pages/discounts/index.jsx'

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={APP_ROUTERS.HOME.value} component={() => <HomePage />} exact />
        <Route path={APP_ROUTERS.CREATE_DISCOUNT.value} component={() => <DiscountPage />} />
      </Switch>
    </BrowserRouter>
  )
}

export default MainRoutes
