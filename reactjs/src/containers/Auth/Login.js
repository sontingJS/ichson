import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
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
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        console.log('username', this.state.username, 'password', this.state.password)
        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.userData)
                console.log('login succesly')
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }
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
                                <span onClick={() => { this.handleShowPassword() }} className='isShowPassword'><i className={this.state.isShowPassword ? "fas fa-eye-slash" : "fas fa-eye"} ></i></span></div>
                        </div>
                        <div className='col-12 text-danger'>
                            {this.state.errMessage}
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
                                <i className="fab fa-facebook facebook"></i>
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
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
