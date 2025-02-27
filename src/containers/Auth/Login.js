
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
            userName: '',
            password: '',
            isShowPassword: false,
            errMessage: '',

        }


    }

    handleOnchangeUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = async () => {

        this.setState({
            errMessage: ''
        })
        try {
            if (!this.state.userName || !this.state.password) {
                this.setState({
                    errMessage: 'Please enter your username and password !'
                })
                return;
            }
            let data = await handleLoginApi(this.state.userName, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message,
                })
            }
            else if (data && data.errCode === 0) {

                console.log('check data user: ', data.user)
                this.props.userLoginSuccess(data.user)
                console.log('login succeeds')
            }
            // console.log('hoidanit', data)
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }

            }
            console.log('hoidanit', error.response)
            console.log(error)
        }
    }
    handleShowHidePassword = () => {
        if (this.state.password.length > 0) {
            this.setState({
                isShowPassword: !this.state.isShowPassword,
            })
            // alert('1');
        }
        // else alert('0')

    }
    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.handleLogin();

        }

    }
    render() {
        let { userName, passWord, isShowPassword } = this.state
        return (

            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>login</div>
                        <div className='col-12 form-group login-input'>
                            <label>User name:</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your name'
                                value={this.state.userName}
                                onChange={(event) => { this.handleOnchangeUserName(event) }}
                            />

                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input
                                    type={isShowPassword ? 'text' : 'password'}
                                    className='form-control input-password' placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(event) => { this.handleOnchangePassword(event) }}
                                    onKeyDown={(event) => this.handleKeyDown(event)}
                                />
                                <span onClick={() => { this.handleShowHidePassword() }}>
                                    {isShowPassword ?
                                        <i className="fa fa-eye-slash"></i>
                                        :
                                        <i className="fa fa-eye"></i>


                                    }
                                </span>

                            </div>

                        </div>
                        <div className='col-12 error-message' style={{ color: 'red', fontSize: '13px' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login'
                                onClick={() => { this.handleLogin() }}>
                                Login
                            </button>

                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password ?</span>
                        </div>
                        <div className='col-12 text-center mt-3 more-option'>
                            <span className='text-other-login'>Or login with: </span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>

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
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
