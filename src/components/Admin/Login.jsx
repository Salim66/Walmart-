import React from 'react'
import LogoWhite from '../Logo/LogoWhite'
import { Link } from 'react-router-dom'

const Login = () => {
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
                                  <h1>Login</h1>
                                  <p class="account-subtitle">Access to our dashboard</p>

                                  <form action="https://dreamguys.co.in/demo/doccure/admin/index.html">
                                      <div class="form-group">
                                          <input class="form-control" type="text" placeholder="Email" />
                                      </div>
                                      <div class="form-group">
                                          <input class="form-control" type="text" placeholder="Password" />
                                      </div>
                                      <div class="form-group">
                                          <button class="btn btn-primary btn-block" type="submit">Login</button>
                                      </div>
                                  </form>

                                  <div class="text-center forgotpass"><a href="forgot-password.html">Forgot Password?</a></div>
                                  <div class="login-or">
                                      <span class="or-line"></span>
                                      <span class="span-or">or</span>
                                  </div>

                                  <div class="social-login">
                                      <span>Login with</span>
                                      <a href="#" class="facebook"><i class="fa fa-facebook"></i></a><a href="#" class="google"><i class="fa fa-google"></i></a>
                                  </div>

                                  <div class="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Login