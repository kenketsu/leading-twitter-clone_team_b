import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">Top</Link>
      <br />
      <Link to="/Signup">SignUp</Link>
    </div>
  );
}

export default Header;
