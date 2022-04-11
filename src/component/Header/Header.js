import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
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
                              <Link to='/tshart'>Shues</Link>
                              <Link to='/login'>Login</Link>
                              </nav>
                        </div>
                  </div>
            </div>
      );
};

export default Header;