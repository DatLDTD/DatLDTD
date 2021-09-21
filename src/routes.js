import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import * as page from './pages';
import history from './history'

const Routes = () => (
  <div className="content">
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={page.HomePage} />
        <Route exact path="/list-product" component={page.AllProductPage}/>
        <Route exact path="/detail-product" component={page.DetailProductPage}/>
        <Route exact path="/admin" component={page.AdminPage}/>
        <Route exact path="/login" component={page.LoginPage}/>
        <Route exact path="/basket" component={page.BasketPage}/>
        <Route exact path="/proceed-payment" component={page.ProceedPaymentPage}/>
      </Switch>
    </Router>
  </div>
);

export default Routes;
