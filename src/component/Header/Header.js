import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
      return (
            <div>
                  <div className="row">
                        <div className="col-lg-12 main bg-light">
                              <div className="company-name">
                                    <h3>COUSTOM SHOP</h3>
                              </div>
                              <nav className='navber'>
                              <Link to='/ring'>Ring</Link>
                              <Link to='/book'>Book</Link>
                              <Link to='/tshart'>T-shart</Link>
                              </nav>
                        </div>
                  </div>
            </div>
      );
};

export default Header;