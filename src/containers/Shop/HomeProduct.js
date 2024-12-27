import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './HomeProduct.scss'
import InforProduct from '../../components/Product/InforProduct';
import CategoryMenu from '../../components/Product/CategoryMenu';
import HomeHeader from '../../components/Product/HomeHeader';
import Footer from '../../components/Product/Footer';
import CustomScrollbars from '../../components/CustomScrollbars'
import '../../components/Product/HomeHeader.scss'
import logo2 from "../../imgs/logo-2.png"

import { getAllProducts } from '../../services/productService';

import logo from '../../imgs/logo.png'
import banner1 from '../../imgs/banner/1.jpg'
import banner2 from '../../imgs/banner/2.jpg'
import banner3 from '../../imgs/banner/3.jpg'
import category1 from '../../imgs/icons/icon-img/category-1.png'
import category2 from '../../imgs/icons/icon-img/category-2.png'
import category3 from '../../imgs/icons/icon-img/category-3.png'
import category4 from '../../imgs/icons/icon-img/category-4.png'
import category5 from '../../imgs/icons/icon-img/category-5.png'
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


import banner13 from '../../imgs/banner/13.png'
import banner14 from '../../imgs/banner/14.png'
import banner15 from '../../imgs/banner/15.png'
class HomeProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listProducts: [
                product1,
                product2,
                product3,
                product4,
                product5,
                product6,
                product7,
                product8,
                product9,
                product10,
                product11,
                product12,
                product13,
                product14,
                product15,
                product16,
            ],
            listInforProducts: []
        }
    }

    async componentDidMount() {

        let listProducts = await getAllProducts("ALL");
        if (listProducts && listProducts.data.length > 0) {
            this.setState({
                listInforProducts: listProducts.data
            })
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


    render() {
        let { listProducts, listInforProducts } = this.state
        console.log('check  list infor products: ', listInforProducts)
        return (
            <>
                <div className='home-product-container'>
                    <div className='home-header-container' >
                        <div className='home-header-content'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-3'>
                                        <div className='content-left'>
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
                                                    <li className="menu-icon list-action-container">
                                                        <span className='text-selection' onClick={() => this.handleRedirectToProductPage()}>
                                                            Shop +

                                                        </span>

                                                        <ul className='list-action-shop'>
                                                            <li className='item-action' onClick={() => { this.handleRedirectToCart() }}> Cart </li>
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
                    <div className='home-body'>

                        <div className='content-left'>
                            <CustomScrollbars>
                                <div className='category-menu'>
                                    <CategoryMenu />

                                </div>

                            </CustomScrollbars>
                        </div>
                        <div className='content-right'>
                            <CustomScrollbars>

                                <div className='list-product-container'>

                                    {listInforProducts && listInforProducts.length > 0 && listInforProducts.map((product, index) => (
                                        < InforProduct product={product} productImg={listProducts[index]} key={index} />
                                    ))
                                    }

                                </div>
                                <div className='home-footer'>
                                    <Footer />
                                </div>
                            </CustomScrollbars>

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeProduct);
