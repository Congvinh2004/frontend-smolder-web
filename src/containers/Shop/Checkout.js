import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './Checkout.scss'
import '../../components/Product/HomeHeader.scss'
import logo2 from "../../imgs/logo-2.png"
import Cash from '../../imgs/icons/cash.png'
import ApplePay from '../../imgs/icons/applepay.png'
import payPal from '../../imgs/icons/payment-3.png'

import Footer from '../../components/Product/Footer';
class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginVisible: false,
            isCouponVisible: false
        }
    }

    componentDidMount() {
    }
    toggleLoginVisibility = () => {
        this.setState({
            isLoginVisible: !this.state.isLoginVisible
        })
    }
    toggleCouponVisibility = () => {
        this.setState({
            isCouponVisible: !this.state.isCouponVisible
        })
    }
    handleWayBackHome = () => {
        if (this.props.history) {

            this.props.history.push(`/home`)
        }
    }
    handleRedirectToProductPage = () => {
        if (this.props.history) {

            this.props.history.push(`/product`)
        }
    }

    handleRedirectToCart = () => {
        if (this.props.history) {
            this.props.history.push(`/cart`)
        }
    }

    render() {
        let { isLoginVisible, isCouponVisible } = this.state
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className='content-left' >
                                        <div className="site-logo" onClick={() => this.handleWayBackHome()}>
                                            <img src={logo2} alt="Logo" />

                                        </div>

                                    </div>
                                </div>

                                <div className='col-6'>
                                    <div className="content-middle">

                                        <div className='section-search-container'>
                                            <input type='text' className='section-search' placeholder='Nhập từ khóa tìm kiếm' />
                                            <i className="fas fa-search search-icon"></i>

                                        </div>


                                        <div className="header-menu-content">

                                            <ul className='list-action'>
                                                <li className="menu-icon">Home + </li>
                                                <li className="menu-icon list-about-container">
                                                    <span className='text-selection'>
                                                        About +
                                                    </span>
                                                    <div className='list-about'>
                                                        <ul className='list-about-content'>
                                                            <li className='item-about'>About</li>
                                                            <li className='item-about'>FAQ </li>
                                                            <li className='item-about'>Google Map locations</li>
                                                        </ul>

                                                    </div>
                                                </li>
                                                <li className="menu-icon list-action-container" >
                                                    <span className='text-selection' onClick={() => this.handleRedirectToProductPage()}>
                                                        Shop +

                                                    </span>

                                                    <ul className='list-action-shop'>
                                                        <li className='item-action' onClick={() => this.handleRedirectToCart()}> Cart </li>
                                                        <li className='item-action'> Checkout </li>
                                                        <li className='item-action'>  Order Tracking </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-icon">Contact</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className="content-right">
                                        <div className='list-user-selection'>
                                            <div className="header-search-wrap">

                                                <div className="search-icon">
                                                    <i className="fas fa-search"></i>
                                                </div>

                                            </div>
                                            <div className="user-menu">
                                                <i className="fas fa-user"></i>
                                                <ul className='user-selection'>
                                                    <li className='item-selection'>
                                                        Sign in
                                                    </li>
                                                    <li className='item-selection'>
                                                        Register
                                                    </li>
                                                    <li className='item-selection'>
                                                        My Account
                                                    </li>
                                                    <li className='item-selection'>
                                                        Wishlist
                                                    </li>
                                                </ul>

                                            </div>
                                            {/* mini-cart */}
                                            <div className="mini-cart-icon" onClick={() => { this.handleRedirectToCart() }}>

                                                <i className="fas fa-shopping-cart"></i>
                                                <sup>2</sup>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className='home-checkout-container'>
                    <div className='home-checkout-content'>
                        <div className='login-container'>
                            <div className='not-login'>
                                <span className='not-login-title'>You are not logged in?</span>
                                <span className='returning-login-title' onClick={() => this.toggleLoginVisibility()}>Click here to login</span>
                            </div>
                            {isLoginVisible === true &&

                                <div className='login'>
                                    <div className='login-title'>
                                        <span className='title-text'>Please login your accont.</span>
                                    </div>
                                    <div className='input-login'>
                                        <input type='text' placeholder='Enter your name' className='input-username' />
                                        <input type='password' placeholder='Enter your password' className='input-password' />

                                    </div>
                                    <div className='btn-login'>
                                        <button>Sign in</button>
                                    </div>
                                    <div className='forget-register'>
                                        <span className='child-content'>
                                            Sign up
                                        </span>
                                        <span className='child-content'>

                                            Forget to password?
                                        </span>

                                    </div>
                                </div>
                            }



                        </div>


                        <div className='apply-coupon-container'>
                            <div className='have-coupon'>
                                <span className='have-coupon-title'>Have a coupon?</span>
                                <span className='returning-login-title' onClick={() => this.toggleCouponVisibility()}>Click here to enter your code</span>
                            </div>
                            {isCouponVisible === true &&

                                <div className='enter-coupon'>
                                    <div className='enter-coupon-title'>
                                        <span className='title-text'>If you have a coupon code, please apply it below.</span>
                                    </div>
                                    <div className='input-coupon'>
                                        <input type='text' placeholder='Couppon code' className='input-couppon-code' />

                                    </div>
                                    <div className='btn-apply-coupon'>
                                        <button>Apply coupon</button>
                                    </div>

                                </div>
                            }



                        </div>

                        <div className='detail-payment-container'>
                            <div className='detail-payment-content'>
                                <h2 className='personal-information-title'>Billing Details</h2>
                                <div className='personal-information-body'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className="form-group col-md-6">
                                                <label >First name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First name"
                                                />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Last name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last name"
                                                />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="inputEmail4"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Phone number</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Phone number"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="inputAddress">Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputAddress"
                                                    placeholder="1234 Main St"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputAddress">Order Notes (optional)</label>
                                                <input
                                                    type="text"
                                                    className="form-control input-order"
                                                />
                                            </div>



                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className='checkout-payment-method-container'>

                            <div className="checkout-payment-method-content">
                                <h3 className="payment-method-title">Payment Method</h3>
                                <div className="payment-method-title-body">
                                    <div className="payment-method">
                                        <div className="payment-method-item cash">
                                            <div className='selection-type-payment'>
                                                <div className='check-box'>
                                                    <div className='check-box-child'></div>
                                                </div>
                                                <span className='payment-method-type'>
                                                    Cash on delivery

                                                </span>

                                            </div>
                                            <img className='payment-method-img' src={Cash} alt="#" />
                                        </div>

                                        {/* <div className="payment-method-detail">
                                            <p>Pay with cash upon delivery.</p>
                                        </div> */}
                                    </div>
                                    <div className="payment-method">
                                        <div className="payment-method-item apple-pay">
                                            <div className='selection-type-payment'>
                                                <div className='check-box'>
                                                    <div className='check-box-child'></div>
                                                </div>

                                                <span className='payment-method-type'>
                                                    ApplePay

                                                </span>

                                            </div>
                                            <img className='payment-method-img' src={ApplePay} alt="#" />
                                        </div>

                                        <div className="payment-method-detail">
                                            <p>Apple Pay is the modern way to pay.</p>
                                        </div>
                                    </div>
                                    <div className="payment-method">
                                        <div className="payment-method-item paypal">
                                            <div className='selection-type-payment'>
                                                <div className='check-box'>
                                                    <div className='check-box-child'></div>
                                                </div>

                                                <span className='payment-method-type'>
                                                    PayPal

                                                </span>

                                            </div>
                                            <img className='payment-method-img' src={payPal} alt="#" />
                                        </div>

                                        <div className="payment-method-detail">
                                            <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="shoping-cart-total-content">
                                <h3 className="cart-total-title">Cart Totals</h3>
                                <div className="cart-total-body">
                                    <table className="table list-prict-product">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Vegetables Juices <strong>× 2</strong>
                                                </td>
                                                <td>$298.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Orange Sliced Mix <strong>× 2</strong>
                                                </td>
                                                <td>$170.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Red Hot Tomato <strong>× 2</strong>
                                                </td>
                                                <td>$150.00</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping and Handing</td>
                                                <td>$15.00</td>
                                            </tr>
                                            <tr>
                                                <td>Vat</td>
                                                <td>$00.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Order Total</strong>
                                                </td>
                                                <td>
                                                    <strong>$633.00</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="ltn__payment-note mt-30 mb-30">
                                        <p style={{ fontSize: 13, fontStyle: "italic" }}>
                                            Your personal data will be used to process your order, support your
                                            experience throughout this website, and for other purposes described
                                            in our privacy policy.
                                        </p>
                                    </div>
                                    <button className="btn-checkout" >
                                        Place order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <Footer />

            </>

        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
