import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './CategoryMenu.scss'
class CategoryMenu extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <>
                <div className="category-menu-container">
                    <div className="category-menu-title">
                        <h2 className="title">
                            categories
                        </h2>
                    </div>
                    <div className="list-category-container">
                        <ul className='list-category'>
                            {/* Submenu Column - unlimited */}
                            <li className="item-category">
                                <a href="shop.html">
                                    <i className="icon-shopping-bags" />
                                    Vegetables and Fruits{" "}
                                </a>
                            </li>
                            {/* Submenu Column - 4 */}
                            <li className="item-category">
                                <a href="shop.html">
                                    <i className="icon-options" />
                                    Fresh Meat{" "}
                                </a>
                            </li>
                            {/* Submenu Column - 3 */}
                            <li className="item-category">
                                <a href="shop.html">
                                    <i className="icon-award" />
                                    Fish and Seafood
                                </a>
                            </li>
                            {/* Submenu Column - 2 */}
                            <li className="item-category">
                                <a href="shop.html">
                                    <i className="icon-user" />
                                    Butter and Cream
                                </a>
                            </li>
                            {/* Submenu */}
                            <li className="item-category">
                                <a href="shop.html">
                                    <i className="icon-shopping-cart" />
                                    Oil and Vinegar
                                </a>
                            </li>
                            {/* Submenu */}
                            <li className="item-category">
                                <a href="shop.html">
                                    <i className="icon-tag" />
                                    Breads
                                </a>
                            </li>
                            {/* Submenu */}
                            <li className="item-category">
                                <a href="shop.html">
                                    <i className="icon-shopping-bags" />
                                    Apple Juice{" "}
                                </a>
                            </li>
                            {/* Submenu */}
                            <li className="item-category">
                                <a href="shop.html">
                                    <i className="icon-options" />
                                    Dry Nuts
                                </a>
                            </li>
                            {/* Show more menu */}
                            <li className="item-category">
                                <a href="shop.html">
                                    <i className="icon-shopping-bags" />
                                    Apple Juice
                                </a>

                            </li>
                            <li className="item-category">
                                <a href="shop.html">
                                    <i className="icon-options" />
                                    Dry Nuts
                                </a>

                            </li>
                            <li className="item-category">
                                <a className="rx-default">
                                    More categories <span className="cat-thumb  icon-plus" />
                                </a>

                            </li>
                            {/* Single menu end */}
                        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);
