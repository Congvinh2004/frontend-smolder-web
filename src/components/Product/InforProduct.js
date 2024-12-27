import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './InforProduct.scss'
class InforProduct extends Component {

    state = {

    }


    componentDidMount() {
    }


    handleRedirectToCart = () => {
        if (this.props.history) {
            this.props.history.push(`/cart`)
        }
    }

    handleRedirectToProductPage = () => {
        if (this.props.history) {

            this.props.history.push(`/product`)
        }
    }
    render() {

        let { product, productImg } = this.props
        console.log('check props: ', this.props)
        return (
            <>

                {

                    <div className="product-item text-center">
                        <div className='product-img'
                            // onClick={() => { this.handleRedirectToProductPage() }}
                            style={{
                                backgroundImage: `url(${product.image})`,
                            }}>
                            <div className="product-badge">
                                <span className="sale-badge">-19%</span>
                            </div>
                            <div className='product-hover-action-container'>

                                <div className="product-hover-action">
                                    <span className='product-action-child'>
                                        <i className="far fa-eye" />
                                    </span>

                                    <span className='product-action-child cart-item' onClick={() => { this.handleRedirectToCart() }}>
                                        <i className="fas fa-shopping-cart" />
                                    </span>

                                    <span className='product-action-child'>
                                        <i className="far fa-heart" />
                                    </span>


                                </div>
                            </div>

                        </div>
                        <div class="product-info">
                            <div class="product-ratting">
                                <ul className='list-ratting'>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a>
                                    </li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
                                    <li class="review-total"> <a href="#"> (24)</a></li>
                                </ul>
                            </div>
                            <h6 class="product-title">{product.name}</h6>
                            <div class="product-price">
                                <span className='price'>{`${product.price}đ`}</span>
                                {/* <del className='price'>$46.00</del> */}
                            </div>
                        </div>
                    </div>




                }
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InforProduct));
