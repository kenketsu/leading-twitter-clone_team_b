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
              <Route exact path='/' element={<Top />} />
              <Route exact path='/Signup' element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
};

export default App;
