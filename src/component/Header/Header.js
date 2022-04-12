import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
      const [user] = useAuthState(auth)
      const logout = () =>{
            signOut(auth)
      }
      console.log(user);
      return (
            <div>
                  <div className="row">
                        <div className="col-lg-12 main bg-light">
                              <div className="company-name">
                                    <h3>SUPER SHOP</h3>
                              </div>
                              <nav className='navber'>
                              <Link to='/ring'>Ring</Link>
                              <Link to='/book'>Bag</Link>
                              <Link to='/tshart'>Shous</Link>
                          {user ? <button onClick={logout} className='logoutbtn'>Logout</button> : <Link to='/login'>Login</Link>}
                              </nav>
                        </div>
                  </div>
            </div>
      );
};

export default Header;