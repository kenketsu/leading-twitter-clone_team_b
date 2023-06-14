import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Top from './Top';
import Signup from './twitter/pages/Signup';

function App() {
  return(
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
              <Route exact path='/' component={Top} />
              <Route exact path='/accounts' component={Signup} />
              <Route render={() => <h4>not found...</h4>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
};

export default App;
