import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token'))
      setIsAuth(true);
  }, []);

  return (
    <nav>
        <div>I am a navbar</div>
        <Link to='/'>Home</Link>
        {isAuth ? (
            <Link to='/logout'>Logout</Link>
        ) : (
            <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            </>
        )}
    </nav>
  );
};

export default Navbar;
