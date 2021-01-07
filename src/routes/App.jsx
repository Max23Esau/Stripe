import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
