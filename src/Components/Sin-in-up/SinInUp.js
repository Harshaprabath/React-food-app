import React, { useState } from 'react';
import './SinInUp.css';

function SinInUp() {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className="sinup">
            <div className="sinupbody">
                <div className={`siucontainer ${isRightPanelActive ? 'right-panel-active' : ''}`} id="siucontainer">

                    {/* Sign Up Form */}
                    <div className="form-siucontainer sign-up-siucontainer">
                        <form className='siuform' action="#">
                            <h1>Create Account</h1>
                            <div className="social-siucontainer">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <div className='singup-input'>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Mobile Number" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm Password" />
                            </div>
                            <button>Sign Up</button>
                        </form>
                    </div>


                    {/* Sign In Form */}
                    <div className="form-siucontainer sign-in-siucontainer">
                        <form className='siuform' action="#">
                            <h1>Sign in</h1>
                            <div className="social-siucontainer">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>

                    {/* Overlay */}
                    <div className="overlay-siucontainer">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" onClick={handleSignInClick} id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start your journey with us</p>
                                <button className="ghost" onClick={handleSignUpClick} id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinInUp;
