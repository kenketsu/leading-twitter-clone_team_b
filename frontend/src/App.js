import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Top } from './Top';

export const App = () => {
  return(
    <div>
      <Router>
        <Header />
        <div>
          <Switch>
              <Route exact path='/' component={Top} />
              <Route exact path='/accounts' component={Accounts} />
              <Route render={() => <h4>not found...</h4>} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

