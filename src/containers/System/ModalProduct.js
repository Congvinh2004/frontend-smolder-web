

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import "./ProductManage.scss"
import { add, padStart } from 'lodash';
import { emitter } from '../../utils/emitter';
class ModalProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: '',
            image: '',
            quantity: '',
            productCategoryID: ''
        }
        this.listenToEmitter()
    }

    componentDidMount() {
    }


    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['name', 'description', 'price', 'quantity', 'productCategoryID']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert('Please input ' + arrInput[i])
                isValid = false
                break;
            }
        }
        return isValid

    }


    listenToEmitter = () => {

        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                name: '',
                description: '',
                price: '',
                image: '',
                quantity: '',
                productCategoryID: ''
            })
        })
    }

    toggle = () => {
        this.props.toglleFromParent()
    }


    handleOnChange = (e, label) => {
        let copyState = { ...this.state }
        copyState[label] = e.target.value
        this.setState({
            ...copyState
        })


    }

    handleSaveNewProduct = () => {
        if (this.checkValidateInput()) {
            console.log('check state: ', this.state)
            this.props.createNewProduct(this.state)
        }
    }
    render() {
        let isOpenModal = this.props.isOpenModal
        let { name, description, price, image, quantity, productCategoryID } = this.state
        return (
            <Modal
                isOpen={isOpenModal}
                toggle={() => this.toggle()}
                className='modal-product-container'
                size='lg'
            >

                <ModalHeader toggle={() => this.toggle}>Create a new product</ModalHeader>
                <ModalBody>
                    <div className='modal-product-body'>
                        <div className='input-container'>
                            <label>Name</label>
                            <input
                                onChange={(e) => { this.handleOnChange(e, 'name') }}
                                type='text'
                                value={name}

                            />
                        </div>

                        <div className='input-container'>
                            <label>description</label>
                            <input
                                onChange={(e) => { this.handleOnChange(e, 'description') }}
                                type='text'
                                value={description}

                            />
                        </div>

                        <div className='input-container'>
                            <label>Price</label>
                            <input
                                onChange={(e) => { this.handleOnChange(e, 'price') }}
                                type='text'
                                value={price}

                            />
                        </div>



                        <div className='input-container'>
                            <label>Quantity</label>
                            <input
                                onChange={(e) => { this.handleOnChange(e, 'quantity') }}
                                type='text'
                                value={quantity}

                            />
                        </div>
                        <div className='input-container'>
                            <label>Category ID</label>
                            <input
                                onChange={(e) => { this.handleOnChange(e, 'productCategoryID') }}
                                type='text'
                                value={productCategoryID}

                            />
                        </div>

                        <div className='input-container'>
                            <label>Image</label>
                            <input
                                onChange={(e) => { this.handleOnChange(e, 'image') }}
                                type='text'
                                value={image}

                            />
                        </div>

                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className='btn-action'
                        onClick={(e) => { this.handleSaveNewProduct() }}
                    >
                        Save
                    </Button>{' '}

                    <Button color="secondary" className='btn-action' onClick={() => this.toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

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

export default connect(mapStateToProps, mapDispatchToProps)(ModalProduct);
