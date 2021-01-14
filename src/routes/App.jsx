import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Transactions from '../pages/Transactions';
import Customers from '../pages/Customers';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/transactions' component={Transactions} />
          <Route exact path='/customers' component={Customers} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
