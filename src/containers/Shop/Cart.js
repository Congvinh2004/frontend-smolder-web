import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './Cart.scss'
import '../../components/Product/HomeHeader.scss'
import logo2 from "../../imgs/logo-2.png"
import Footer from '../../components/Product/Footer';



import product1 from '../../imgs/product/1.png'
import product2 from '../../imgs/product/2.png'
import product3 from '../../imgs/product/3.png'
import product4 from '../../imgs/product/4.png'
import product5 from '../../imgs/product/5.png'
import product6 from '../../imgs/product/6.png'
import product7 from '../../imgs/product/7.png'
import product8 from '../../imgs/product/8.png'
import product9 from '../../imgs/product/9.png'
import product10 from '../../imgs/product/10.png'
import product11 from '../../imgs/product/11.png'
import product12 from '../../imgs/product/12.png'
import product13 from '../../imgs/product/13.png'
import product14 from '../../imgs/product/14.png'
import product15 from '../../imgs/product/15.png'
import product16 from '../../imgs/product/16.png'
class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
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

    handleRedirectToCheckout = () => {
        if (this.props.history) {
            this.props.history.push(`/checkout`)
        }
    }

    componentDidMount() {
    }


    render() {
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
                                                <li className="menu-icon" onClick={() => this.handleWayBackHome()}>Home + </li>
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
                                                        <li className='item-action' onClick={() => this.handleRedirectToCheckout()}> Checkout </li>
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
                                            <div className="mini-cart-icon">

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
                <div className='home-body-cart'>
                    <div className='cart-title-container'>
                        <div className='cart-title-container'>
                            cart
                            <i className="fas fa-shopping-cart"></i>

                        </div>

                    </div>
                    <div className='cart-detail-container'>

                        <div className='cart-detail'>
                            <div className="cart-product-remove">x</div>
                            <div className="cart-product-image">
                                <img src={product1} alt="#" />
                            </div>
                            <div className="cart-product-info">
                                <h4>
                                    <span className='product-name'>

                                        Vegetables Juices
                                    </span>
                                </h4>
                            </div>
                            <div className="cart-product-price">
                                <span className='price'>
                                    $149.00

                                </span>
                            </div>
                            <div className="cart-product-quantity">
                                <div className="cart-plus-minus">
                                    <div className="block-container">
                                        <div className="block-item item-left">-</div>
                                        <div className="block-item item-middle">02</div>
                                        <div className="block-item item-right">+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-product-subtotal">
                                <span className='total-price'>
                                    $298.00
                                </span>
                            </div>

                        </div>
                        <div className='cart-detail'>
                            <div className="cart-product-remove">x</div>
                            <div className="cart-product-image">
                                <img src={product1} alt="#" />
                            </div>
                            <div className="cart-product-info">
                                <h4>
                                    <span className='product-name'>

                                        Vegetables Juices
                                    </span>
                                </h4>
                            </div>
                            <div className="cart-product-price">
                                <span className='price'>
                                    $149.00

                                </span>
                            </div>
                            <div className="cart-product-quantity">
                                <div className="cart-plus-minus">
                                    <div className="block-container">
                                        <div className="block-item item-left">-</div>
                                        <div className="block-item item-middle">02</div>
                                        <div className="block-item item-right">+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-product-subtotal">
                                <span className='total-price'>
                                    $298.00
                                </span>
                            </div>

                        </div>
                        <div className='cart-detail'>
                            <div className="cart-product-remove">x</div>
                            <div className="cart-product-image">
                                <img src={product1} alt="#" />
                            </div>
                            <div className="cart-product-info">
                                <h4>
                                    <span className='product-name'>

                                        Vegetables Juices
                                    </span>
                                </h4>
                            </div>
                            <div className="cart-product-price">
                                <span className='price'>
                                    $149.00

                                </span>
                            </div>
                            <div className="cart-product-quantity">
                                <div className="cart-plus-minus">
                                    <div className="block-container">
                                        <div className="block-item item-left">-</div>
                                        <div className="block-item item-middle">02</div>
                                        <div className="block-item item-right">+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-product-subtotal">
                                <span className='total-price'>
                                    $298.00
                                </span>
                            </div>

                        </div>
                        <div className='cart-detail'>
                            <div className="cart-product-remove">x</div>
                            <div className="cart-product-image">
                                <img src={product1} alt="#" />
                            </div>
                            <div className="cart-product-info">
                                <h4>
                                    <span className='product-name'>

                                        Vegetables Juices
                                    </span>
                                </h4>
                            </div>
                            <div className="cart-product-price">
                                <span className='price'>
                                    $149.00

                                </span>
                            </div>
                            <div className="cart-product-quantity">
                                <div className="cart-plus-minus">
                                    <div className="block-container">
                                        <div className="block-item item-left">-</div>
                                        <div className="block-item item-middle">02</div>
                                        <div className="block-item item-right">+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-product-subtotal">
                                <span className='total-price'>
                                    $298.00
                                </span>
                            </div>

                        </div>
                        <div className='cart-detail'>
                            <div className="cart-product-remove">x</div>
                            <div className="cart-product-image">
                                <img src={product1} alt="#" />
                            </div>
                            <div className="cart-product-info">
                                <h4>
                                    <span className='product-name'>

                                        Vegetables Juices
                                    </span>
                                </h4>
                            </div>
                            <div className="cart-product-price">
                                <span className='price'>
                                    $149.00

                                </span>
                            </div>
                            <div className="cart-product-quantity">
                                <div className="cart-plus-minus">
                                    <div className="block-container">
                                        <div className="block-item item-left">-</div>
                                        <div className="block-item item-middle">02</div>
                                        <div className="block-item item-right">+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-product-subtotal">
                                <span className='total-price'>
                                    $298.00
                                </span>
                            </div>

                        </div>
                        <div className='cart-detail'>
                            <div className="cart-product-remove">x</div>
                            <div className="cart-product-image">
                                <img src={product1} alt="#" />
                            </div>
                            <div className="cart-product-info">
                                <h4>
                                    <span className='product-name'>

                                        Vegetables Juices
                                    </span>
                                </h4>
                            </div>
                            <div className="cart-product-price">
                                <span className='price'>
                                    $149.00

                                </span>
                            </div>
                            <div className="cart-product-quantity">
                                <div className="cart-plus-minus">
                                    <div className="block-container">
                                        <div className="block-item item-left">-</div>
                                        <div className="block-item item-middle">02</div>
                                        <div className="block-item item-right">+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-product-subtotal">
                                <span className='total-price'>
                                    $298.00
                                </span>
                            </div>

                        </div>
                        <div className='cart-detail'>
                            <div className="cart-product-remove">x</div>
                            <div className="cart-product-image">
                                <img src={product1} alt="#" />
                            </div>
                            <div className="cart-product-info">
                                <h4>
                                    <span className='product-name'>

                                        Vegetables Juices
                                    </span>
                                </h4>
                            </div>
                            <div className="cart-product-price">
                                <span className='price'>
                                    $149.00

                                </span>
                            </div>
                            <div className="cart-product-quantity">
                                <div className="block-container">
                                    <div className="block-item item-left">-</div>
                                    <div className="block-item item-middle">02</div>
                                    <div className="block-item item-right">+</div>
                                </div>
                            </div>
                            <div className="cart-product-subtotal">
                                <span className='total-price'>
                                    $298.00
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="shoping-cart-total-container">
                        <div className="shoping-cart-total">

                            <h4 className='cart-total-title'>Cart Totals</h4>

                            <div className="cart-total-body">
                                <div className="cart-total-content">
                                    <div className='detail-total-price'>
                                        <span className='type-price'>Cart Subtotal</span>
                                        <span>$618.00</span>
                                    </div>
                                    <div className='detail-total-price'>
                                        <span className='type-price'>Shipping and Handing</span>
                                        <span className='amount'>$15.00</span>
                                    </div>
                                    <div className='detail-total-price'>
                                        <span className='type-price'>Vat</span>
                                        <span className='amount'>$00.00</span>
                                    </div>
                                    <div className='detail-total-price'>
                                        <div>
                                            <strong className='order-total'>Order Total</strong>
                                        </div>
                                        <div>
                                            <strong className='amount'>$633.00</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-order" onClick={() => this.handleRedirectToCheckout()}>
                                <span >
                                    Proceed to checkout

                                </span>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='home-footer'>
                    <Footer />
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
