import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
        }
    }
    handleOnchangeUsername = (event) => {
        this.setState({
            username: event.target.value,

        })
        console.log(event.target.value)
    }
    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value,

        })
        console.log(event.target.value)
    }
    handleLogin = () => {
        console.log('username', this.state.username, 'password', this.state.password)
    }
    handleShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
        console.log('showwing password complately')
    }
    render() {
        return (
            <div className='login-background'>
                <div className='login-container' >
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => {
                                    this.handleOnchangeUsername(event)
                                }}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>password</label>
                            <div className='custom-input-password'><input
                                type={this.state.isShowPassword ? 'text' : 'password'}
                                placeholder='Enter your password'
                                className='form-control'
                                onChange={(event) => {
                                    this.handleOnchangePassword(event)
                                }}
                            />
                                <span onClick={() => { this.handleShowPassword() }} className='isShowPassword'><i class={this.state.isShowPassword ? "fas fa-eye-slash" : "fas fa-eye"} ></i></span></div>
                        </div>
                        <div className='col-12'><button className='btn-login' onClick={() => {
                            this.handleLogin()
                        }}>Login</button></div>
                        <div className='col-12 forgot-password'>
                            <span className='forgot-password'>forgot your password ?</span>
                        </div>
                        <div className='col-12 text-center '>
                            <span className=''>Or login with :</span>
                            <div className='col-12 social-login'>
                                <i className='fab fa-google-plus google'></i>
                                <i class="fab fa-facebook facebook"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
