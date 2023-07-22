import React from 'react'
import { Link } from 'react-router-dom'
import LogoWhite from '../Logo/LogoWhite'

const Register = () => {
  return (
      <>
          <div class="main-wrapper login-body">
              <div class="login-wrapper">
                  <div class="container">
                      <div class="loginbox">
                          <div class="login-left">
                              <LogoWhite />
                          </div>
                          <div class="login-right">
                              <div class="login-right-wrap">
                                  <h1>Register</h1>
                                  <p class="account-subtitle">Access to our dashboard</p>

                                  <form action="https://dreamguys.co.in/demo/doccure/admin/login.html">
                                      <div class="form-group">
                                          <input class="form-control" type="text" placeholder="Name" />
                                      </div>
                                      <div class="form-group">
                                          <input class="form-control" type="text" placeholder="Email" />
                                      </div>
                                      <div class="form-group">
                                          <input class="form-control" type="text" placeholder="Password" />
                                      </div>
                                      <div class="form-group">
                                          <input class="form-control" type="text" placeholder="Confirm Password" />
                                      </div>
                                      <div class="form-group mb-0">
                                          <button class="btn btn-primary btn-block" type="submit">Register</button>
                                      </div>
                                  </form>

                                  <div class="login-or">
                                      <span class="or-line"></span>
                                      <span class="span-or">or</span>
                                  </div>

                                  <div class="social-login">
                                      <span>Register with</span>
                                      <a href="#" class="facebook"><i class="fa fa-facebook"></i></a><a href="#" class="google"><i class="fa fa-google"></i></a>
                                  </div>

                                  <div class="text-center dont-have">Already have an account? <Link to="/login">Login</Link></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Register