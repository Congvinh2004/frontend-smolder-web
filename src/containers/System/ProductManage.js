import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./ProductManage.scss"
import { getAllProducts, deleteProduct, createNewProductsFromService } from "../../services/productService"
import ModalProduct from './ModalProduct';
import { emitter } from '../../utils/emitter'


class ProductManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listProducts: [],
            isOpenModal: false
        }
    }

    async componentDidMount() {
        await this.getAllProductsFromReact()
    }

    getAllProductsFromReact = async () => {
        let response = await getAllProducts('ALL')
        if (response && response.data.length > 0) {

            this.setState({
                listProducts: response.data

            })
        }
    }
    handleOpenModalProduct = () => {
        this.setState({
            isOpenModal: true
        })
    }

    toglleProductModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal

        })

    }
    createNewProduct = async (data) => {
        try {
            let response = await createNewProductsFromService(data);
            console.log('check response: ', response)
            if (response && response.errCode === 0) {
                this.toglleProductModal()
                await this.getAllProductsFromReact()
                // emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log('error: ', e)
        }
    }

    handleDeleteProduct = async (product) => {
        console.log('check productID: ', product.productID)
        try {

            let response = await deleteProduct(product.productID)
            alert(response.errMessage)
            if (response && response.errCode === 0) {
                await this.getAllProductsFromReact()
            }
        } catch (e) {
            console.log('error: ', e)
        }
    }
    render() {
        let { listProducts, isOpenModal } = this.state
        console.log('check state: ', this.state)
        return (
            <>
                <ModalProduct createNewProduct={this.createNewProduct} isOpenModal={isOpenModal} toglleFromParent={this.toglleProductModal} />

                <div className="product-container">

                    <div className="title text-center">

                        Manage Products
                    </div>

                    <div className='mx-1'>
                        <button className='btn btn-primary' onClick={() => this.handleOpenModalProduct()}>
                            <i className="fas fa-plus"></i>
                            Add a new product
                        </button>
                    </div>
                    <div className='user-table mt-3 mx-1'>
                        <table id="customers">
                            <tbody>

                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Category ID</th>
                                    <th>Action</th>
                                </tr>

                                {listProducts.map((itemProduct, index) => (
                                    (
                                        <>
                                            <tr key={index}>
                                                <td>{itemProduct.name}</td>
                                                <td>{itemProduct.description}</td>
                                                <td>{itemProduct.price}</td>
                                                <td>{itemProduct.quantity}</td>
                                                <td>{itemProduct.productCategoryID}</td>
                                                <td className='action-icon text-center'>
                                                    <i className="fas fa-edit _edit"></i>
                                                    <i className="fas fa-trash _delete" onClick={() => this.handleDeleteProduct(itemProduct)}></i>
                                                </td>

                                            </tr>
                                        </>
                                    )
                                ))}

                            </tbody>

                        </table>
                    </div>
                </div>

            </>

        );
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
