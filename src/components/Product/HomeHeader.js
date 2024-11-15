import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './HomeHeader.scss'


import logo2 from "../../imgs/logo-2.png"
class HomeHeader extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <>
                <div className="home-header-container">
                    <div className='home-header-content'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className='content-left'>
                                        <div className="site-logo">
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
                                                <li className="menu-icon list-action-container">
                                                    <span className='text-selection'>
                                                        Shop +

                                                    </span>

                                                    <ul className='list-action-shop'>
                                                        <li className='item-action'> Cart </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
