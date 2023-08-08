import React from 'react'
import LogoWhite from '../../components/Logo/LogoWhite';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <>
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
                <div className="container">
                    <div className="loginbox">
                        <div className="login-left">
                            <LogoWhite />
                        </div>
                        <div className="login-right">
                            <div className="login-right-wrap">
                                <h1>Forgot Your Password</h1>

                                <form >
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary btn-block" type="submit">Send</button>
                                    </div>
                                </form>


                                <div className="text-center dont-have">Already have an account? <Link to="/login">Login</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Forgot;