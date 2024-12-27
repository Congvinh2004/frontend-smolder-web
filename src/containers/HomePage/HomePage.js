import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./HomePage.scss"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryMenu from '../../components/Product/CategoryMenu';
import '../../styles/base.css'
import SpecialProduct from '../../components/Product/SpecialProduct';
import DiscountProduct from '../../components/Product/DiscountProduct';
import Footer from '../../components/Product/Footer';


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
// import brandLogo1 from '../../imgs/brand-logo/1.png'
// import brandLogo2 from '../../imgs/brand-logo/2.png'
// import brandLogo3 from '../../imgs/brand-logo/3.png'
// import brandLogo4 from '../../imgs/brand-logo/4.png'
// import brandLogo5 from '../../imgs/brand-logo/5.png'

import banner13 from '../../imgs/banner/13.png'
import banner14 from '../../imgs/banner/14.png'
import banner15 from '../../imgs/banner/15.png'
import SliderIntro from '../../components/Product/SliderIntro';

// import '../../js/plugins'
// import '../../js/main'

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listImgBanner: [
                banner1,
                banner2,
                banner3

            ],
            listCategoty: [
                category1,
                category2,
                category3,
                category4,
                category5
            ],
            listProduct: {
                foodDrinks: [product1, product2, product3, product4, product5],
                vegetables: [product6, product7, product8, product9, product10],
                driedFoods: [product11, product12, product13, product14, product15],
                breadCake: [product1, product2, product3, product4, product5],
                fishMeat: [product6, product7, product8, product9, product10, product7, product8,]

            },
            isTypeProduct: 'foodDrinks'
        }
    }



    handleRedirectToProductPage = () => {
        if (this.props.history) {

            this.props.history.push(`/product`)
        }
    }
    handleRedirectToCart = () => {
        // if (this.props.history) {

        this.props.history.push(`/cart`)
        // }
    }
    handleRedirectToCheckout = () => {
        if (this.props.history) {
            this.props.history.push(`/checkout`)
        }
    }


    componentDidMount() {
    }

    handleSelectCategory = (resultSelect) => {
        this.setState({
            isTypeProduct: resultSelect
        })
    }
    render() {
        let { isTypeProduct, listProduct } = this.state
        console.log('check list product: ', listProduct[isTypeProduct])

        let { listImgBanner, listCategoty } = this.state
        return (

            <>

                {/* HEADER AREA START (header-3) */}
                <header className="header-container">
                    {/* ltn__header-top-area start */}
                    <div className="header-top-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="top-bar-menu">
                                        <ul className='list-infor'>
                                            <li>
                                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                                    <i className="far fa-envelope" style={{ color: '#80b500', paddingRight: '5px' }} ></i>
                                                    <span>
                                                        info@webmail.com

                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="locations.html">
                                                    <i className="fas fa-map-marker-alt" style={{ color: '#80b500', paddingRight: '5px' }} ></i>

                                                    <span>
                                                        15/A, Nest Tower, NYC

                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="top-bar-right">
                                        <div className="top-bar-menu">
                                            <ul className='list-content-right'>
                                                <li>
                                                    <div className="language-menu">


                                                        <a href="#" className="dropdown-toggle">
                                                            <span className="active-currency">
                                                                English
                                                            </span>
                                                        </a>
                                                        <div className='list-language-container'>

                                                            <ul className='list-language'>
                                                                <li>
                                                                    <a href="#">Arabic</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Bengali</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Chinese</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">English</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">French</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Hindi</a>
                                                                </li>
                                                            </ul>
                                                        </div>


                                                    </div>
                                                </li>

                                                <li>
                                                    {/* ltn__social-media */}
                                                    <div className="social-media">
                                                        <ul className='list-social'>
                                                            <li className='item-social'>
                                                                <a href="#" title="Facebook">
                                                                    <i className="fab fa-facebook-f" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="Twitter">
                                                                    <i className="fab fa-twitter" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="Instagram">
                                                                    <i className="fab fa-instagram" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="Dribbble">
                                                                    <i className="fab fa-dribbble" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ltn__header-top-area end */}
                    {/* ltn__header-middle-area start */}
                    <div className="header-middle-area">
                        <div className="container">
                            <div className="row">
                                <div className='col-2'>

                                    <div className="site-logo">
                                        <a href="index.html">
                                            <img src={logo} alt="Logo" />
                                        </a>
                                    </div>

                                </div>

                                <div className='col-7'>
                                    <div className="header-contact-serarch">

                                        <div className="header-feature">

                                            <i className="fas fa-phone-volume"></i>

                                            <div className="header-feature-info">
                                                <h6>Phone</h6>
                                                <p>
                                                    <a href="tel:0123456789">+0123-456-789</a>
                                                </p>
                                            </div>
                                        </div>
                                        {/* header-search-2 */}
                                        <div className="header-search-2">

                                            <input
                                                type="text"
                                                name="search"
                                                defaultValue=""
                                                placeholder="Search here..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-3'>
                                    <div className="header-options">
                                        <div className='profile'>
                                            <i className="fas fa-user"></i>
                                            <div className='list-action-container'>
                                                <ul className='list-action'>
                                                    <li>
                                                        <a href="#">Sign in</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Register</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">My account</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Wishlist</a>
                                                    </li>

                                                </ul>
                                            </div>


                                        </div>
                                        <div className='cart'>
                                            <div className='cart-item' onClick={() => { this.handleRedirectToCart() }}>
                                                <i className="fas fa-shopping-cart"></i>

                                            </div>
                                            <div className='view-cart'>
                                                <h7>YOUR CART</h7>
                                                <p>$89.25</p>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* header-bottom-area start */}
                    <div className='header-bottom-area'>
                        <div className='content-header'>
                            <h6>HOME +</h6>
                            <h6>ABOUT +</h6>
                            <h6 onClick={() => this.handleRedirectToProductPage()}>SHOP +</h6>
                            <h6>CONTACT</h6>
                        </div>


                    </div>
                </header>

                <div className="ltn__slider-area ltn__slider-3---  section-bg-1--- mt-30" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                {/* CATEGORY-MENU-LIST START */}
                                <CategoryMenu />
                                {/* END CATEGORY-MENU-LIST */}
                            </div>
                            <div className="col-lg-9">
                                <SliderIntro />
                            </div>
                        </div>
                    </div>
                </div>




                {/* BANNER AREA START */}

                <div className="ltn__banner-area mt-120">
                    <div className="container">

                        <div className="row ltn__custom-gutter--- justify-content-center">
                            {listImgBanner.map((itemBanner, index) => (
                                <div className="col-lg-4 col-md-6">
                                    <div className="ltn__banner-item" onClick={() => this.handleRedirectToProductPage()}>
                                        <div className="ltn__banner-img">

                                            <img src={itemBanner} alt="Banner Image" />

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* CATEGORY AREA START  */}

                <div className="ltn__category-area section-bg-1--- pt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-area ltn__section-title-2--- text-center">
                                    <h1 className="section-title white-color---">Top Catagories</h1>
                                    <p className="white-color---">
                                        A highly efficient slip-ring scanner for today's diagnostic
                                        requirements.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="row ltn__category-slider-active--- slick-arrow-1">
                            {listCategoty.map((itemCategory, index) => (

                                <div className="ltn__category-item ltn__category-item-3 text-center">

                                    <div className='ltn__category-item-content'>
                                        <div className="ltn__category-item-img" style={{ cursor: 'pointer' }} onClick={() => this.handleRedirectToProductPage()}>

                                            <img src={itemCategory} alt="Image" />

                                        </div>
                                        <div className="ltn__category-item-name">
                                            <h5>
                                                Browse all
                                            </h5>
                                            <h6>(235 item)</h6>
                                        </div>

                                    </div>
                                </div>

                            ))}


                        </div>
                    </div>
                </div>


                {/* PRODUCT TAB AREA START (product-item-3) */}

                <div className="ltn__product-tab-area ltn__product-gutter pt-115 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-area ltn__section-title-2--- text-center">
                                    {/* <h6 class="section-subtitle ltn__secondary-color">// Cars</h6> */}
                                    <h1 className="section-title">Our Products</h1>
                                    <p>
                                        A highly efficient slip-ring scanner for today's diagnostic
                                        requirements.
                                    </p>
                                </div>

                                {/* LIST ACTION  */}
                                <div className="list-memu">

                                    <div className="list-menu-content">
                                        <span className={`item-menu ${isTypeProduct === 'foodDrinks' ? 'active' : ''}`} onClick={() => this.handleSelectCategory('foodDrinks')}>
                                            Food &amp; Drinks
                                        </span>
                                        <span className={`item-menu ${isTypeProduct === 'vegetables' ? 'active' : ''}`} onClick={() => this.handleSelectCategory('vegetables')}>
                                            Vegetables
                                        </span>
                                        <span className={`item-menu ${isTypeProduct === 'driedFoods' ? 'active' : ''}`} onClick={() => this.handleSelectCategory('driedFoods')}>
                                            Dried Foods
                                        </span>
                                        <span className={`item-menu ${isTypeProduct === 'breadCake' ? 'active' : ''}`} onClick={() => this.handleSelectCategory('breadCake')}>
                                            Bread &amp; Cake
                                        </span>
                                        <span className={`item-menu ${isTypeProduct === 'fishMeat' ? 'active' : ''}`} onClick={() => this.handleSelectCategory('fishMeat')}>
                                            Fish &amp; Meat
                                        </span>
                                    </div>
                                </div>


                                <DiscountProduct listProductByType={listProduct[isTypeProduct]} />
                            </div>
                        </div>
                    </div>
                </div >
                <SpecialProduct />
                <div className="ltn__banner-area">

                    <div className="ltn__banner-item content-left">
                        <div className="ltn__banner-img">

                            <img src={banner13} alt="Banner Image" />

                        </div>
                    </div>
                    <div className='ltn__banner-item content-right'>
                        <div className="banner-item first-child">
                            <div className="ltn__banner-img-top">

                                <img src={banner14} alt="Banner Image" />

                            </div>
                        </div>
                        <div className="banner-item last-child">
                            <div className="ltn__banner-img-bottom">

                                <img src={banner15} alt="Banner Image" />

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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
