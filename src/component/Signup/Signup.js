import React, { useState } from 'react';
import './Signup.css'
import login from '../../imgs/login.jpg'
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Signup = () => {

      const [email , setEmail] = useState('')
      const [password , setPassword] = useState('')
      const [confirmPassword , setConfirmPassword] = useState('')
      const [erros , setErros] = useState('')
      const [user] = useAuthState(auth)
      const navigate = useNavigate()

      const [
            createUserWithEmailAndPassword,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth)
      const emailHendeler = e =>{
            setEmail(e.target.value)
      }
      const passwordHendeler = e =>{
            setPassword(e.target.value)
      }
      const confirmPasswordHendeler = e =>{
            setConfirmPassword(e.target.value)
      }

      console.log(email, password, confirmPassword);

      const fromSubmit = event  =>{
            event.preventDefault()
            if(password !== confirmPassword){
                  setErros('Your password dont match..')
                  return
            }
            if(error){
                  setErros('You All ready Create Account,Please Provide new email')
                  return
                 }
            setErros('')
            createUserWithEmailAndPassword(email , password)
      }
      if(user){
            navigate('/')

      }
    


      return (
            <div className='login-section bg-white'>
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-6">
                                    <div className="login-image">
                                          <img src={login} alt="" />

                                    </div>
                              </div>
                              <div className="col-lg-6">
                                    <div className="login-from border">
                                          <div>
                                                <h3 className='text-center'>Signup</h3>
                                                <form onSubmit={fromSubmit}>

                                                      <div className="input-grup">
                                                            <label htmlFor="Email">Email</label>
                                                            <input onBlur={emailHendeler} type="email" name="Email" id="" />
                                                      </div>
                                                      <div className="input-grup">
                                                            <label htmlFor="Email">Password</label>
                                                            <input onBlur={passwordHendeler} type="password" name="password" id="" />
                                                      </div>
                                                      <div className="input-grup">
                                                            <label htmlFor="Email">Confirm Password</label>
                                                            <input onBlur={confirmPasswordHendeler} type="password" name="password" id="" />
                                                            <p className='text-danger'>{erros}</p>
                                                      </div>
                                                      <div className="submit-btn">
                                                            <input className='btn btn-primary w-100 mt-2' type="submit" value="Login" />
                                                      </div>
                                                   
                                                      <h6 className='text-center mb-4'>Allready create account? <span className='text-primary'><Link to='/login'>Login</Link></span></h6>

                                                </form>


                                                <div className="or">
                                                      <div className='div'></div>
                                                      <span>OR</span>
                                                      <div className='div'></div>
                                                </div>

                                                <div className="signup-other">
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

export default Signup;