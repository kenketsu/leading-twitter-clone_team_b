import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
      <div>
      <Link to='/'>Top</Link>
      <ul>
      <li><Link to='/Signup'>日報</Link></li>
      </ul>
      </div>
    )
};

export default Header;
