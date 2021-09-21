import React from 'react'

import ButtonComponent2 from '../ButtonComponent/Button2/ButtonComponent2'
import ButtonComponent3 from '../ButtonComponent/Button3/ButtonComponent3'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StyleLogin.scss'
class LoginComponent extends React.Component {
    state = {
        email: "",
        pass: ""
    }
    loginOnClick() {
        if (this.state.email === "admin" && this.state.pass === "123@ABC") {
            window.location.replace('/admin')
        }
        else
            alert('Login fail');
    }
    eyeIconMouseDown() {
        let input = document.querySelectorAll('.input-password')
        input.forEach(element=>{
            element.type = "text"
            element.style.fontSize = "1em"
        })
    }
    eyeIconMouseUp() {
        let input = document.querySelectorAll('.input-password')
        input.forEach(element=>{
            element.type = "password"
            element.style.fontSize = "2em"
        })
    }
    render() {
        return (
            <div className="login-container">
                <div className="login-part login-child">
                    <h5>i have an account</h5>
                    <span className="mention">* Require Field</span>
                    <div className="input-wrapper-cuabomay">
                        <input type="text" className="input-cuabomay" required onChange={(e) => { this.setState({ email: e.target.value }) }}></input>
                        <span className="input-holder-text">Email*</span>
                    </div>
                    <div className="input-wrapper-cuabomay">
                        <input type="password" className="input-cuabomay input-password" required onChange={(e) => { this.setState({ pass: e.target.value }) }}></input>
                        <span className="input-holder-text">Password*</span>
                        <FontAwesomeIcon icon={faEye} className="eye-icon" onMouseDown={() => this.eyeIconMouseDown()} onMouseUp={() => this.eyeIconMouseUp()} onMouseLeave={() => this.eyeIconMouseUp()} />
                    </div>
                    <div className="button2-container">
                        <ButtonComponent2 text="Forgot Your Password?" />
                    </div>

                    <div className="button3-container" onClick={() => this.loginOnClick()}>
                        <ButtonComponent3 text='login' />
                    </div>

                </div>
                <div className="sign-up-part login-child">
                    <div>
                        <h5>i don't have an account</h5>
                        <p>Create a My OMEGA account to benefit from our exclusive services and keep up to date with our latest publications.</p>
                    </div>
                    <div className="button3-container">
                        <ButtonComponent3 text='sign up' />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent