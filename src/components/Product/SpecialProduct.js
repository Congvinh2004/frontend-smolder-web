import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InforProduct from './InforProduct';
import product1 from '../../imgs/product/11.png'
import "./SpecialProduct.scss"
class SpecialProduct extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <>
                <div className='special-product-container'>
                    <div className='special-product-top'>
                        <span>
                            Special Offers

                        </span>
                        <div className='see-more'>
                            <button className='btn-see-more'>
                                See more

                                <i className="fas fa-long-arrow-alt-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className='special-product-bottom'>

                        <div className='special-product-content'>

                            <Slider {...settings}>

                                <div className='img-customize'>
                                    <InforProduct product={product1} />
                                </div>
                                <div className='img-customize'>
                                    <InforProduct product={product1} />
                                </div>
                                <div className='img-customize'>
                                    <InforProduct product={product1} />
                                </div>
                                <div className='img-customize'>
                                    <InforProduct product={product1} />
                                </div>
                                <div className='img-customize'>
                                    <InforProduct product={product1} />
                                </div>
                                <div className='img-customize'>
                                    <InforProduct product={product1} />
                                </div>
                            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(SpecialProduct);
