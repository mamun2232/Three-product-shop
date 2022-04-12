import React, { useState } from 'react';
import loginpic from '../../imgs/login.jpg'
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {

      const [email , setEmail] = useState('')
      const [password , setPassword] = useState('')
      const [erros , setErros] = useState('')
      const [user] = useAuthState(auth)
      const navigate = useNavigate()
      const [signInWithGoogle ] = useSignInWithGoogle(auth);
      const [
            signInWithEmailAndPassword,
            loading,
            error,
          ] = useSignInWithEmailAndPassword(auth);
          const location = useLocation()
          let from = location.state?.from?.pathname || "/";
      const emailHendeler = e =>{
            setEmail(e.target.value)
      }
      const passwordHendeler = e =>{
            setPassword(e.target.value)
      }

      const loginSubmit = event =>{
            event.preventDefault()
            signInWithEmailAndPassword(email , password)
      }
      if(user){
            navigate(from, { replace: true })

      }
      const siginInGoogle = () =>{
            signInWithGoogle()

      }

      return (
            <div className='login-section bg-white'>
                 <div className="container">
                 <div className="row">
                        <div className="col-lg-6">
                              <div className="login-image">
                                    <img src={loginpic} alt="" />

                              </div>
                        </div>
                        <div className="col-lg-6">
                              <div className="login-from border">
                                    <div>
                                    <h3 className='text-center'>Login</h3>
                                    <form onSubmit={loginSubmit}>

                                    <div className="input-grup">
                                    <label htmlFor="Email">Email</label>
                                    <input onBlur={emailHendeler} type="email" name="Email" id="" />
                                    </div>
                                    <div className="input-grup">
                                    <label htmlFor="Email">Password</label>
                                    <input onBlur={passwordHendeler} type="password" name="Email" id="" />
                                    </div>
                                    <div className="submit-btn">
                                    <input className='btn btn-primary w-100 mt-2' type="submit" value="Login" />
                                    </div>
                                    <p className='text-primary'>Forgate password?</p>
                                    <h6 className='text-center mb-4'>Not a member? <span className='text-primary'> <Link to='/signup'>SignUp</Link> </span></h6>

                                    </form>

                                    
                                    <div className="or">
                              <div className='div'></div>
                              <span>OR</span>
                              <div className='div'></div>
                        </div>

                                    <div onClick={siginInGoogle} className="signup-other">
                                          <div className="logo">
                                                <FcGoogle></FcGoogle>
                                          </div>
                                          <div className='text'><span>Continue With google</span></div>
                                    </div>
                                    <div className="signup-other">
                                          <div className="logo">
                                                <BsFacebook></BsFacebook>
                                          </div>
                                          <div className='text'><span>Continue With Facebook</span></div>
                                    </div>

                                    </div>
                              </div>
                        </div>
                  </div>
                 </div>
                  
            </div>
      );
};

export default Login;