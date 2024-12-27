

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { add, padStart } from 'lodash';
import { emitter } from '../../utils/emitter';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            username: '',
            password: '',
            phoneNumber: '',
            avatar: ''
        }
        this.listenToEmitter()
    }

    componentDidMount() {
    }


    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['name', 'address', 'username', 'password', 'phoneNumber']
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
                address: '',
                username: '',
                password: '',
                phoneNumber: '',
                avatar: ''
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

    handleSaveNewUser = () => {
        if (this.checkValidateInput()) {
            console.log('check state: ', this.state)
            this.props.createNewUser(this.state)
        }
    }
    render() {
        let isOpenModal = this.props.isOpenModal
        let { name, address, username, password, phoneNumber, avatar } = this.state
        return (
            <Modal
                isOpen={isOpenModal}
                toggle={() => this.toggle()}
                className='modal-user-container'
                size='lg'
            >

                <ModalHeader toggle={() => this.toggle}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Name</label>
                            <input
                                onChange={(e) => { this.handleOnChange(e, 'name') }}
                                type='text'
                                value={name}

                            />
                        </div>

                        <div className='input-container'>
                            <label>Address</label>
                            <input
                                onChange={(e) => { this.handleOnChange(e, 'address') }}
                                type='text'
                                value={address}

                            />
                        </div>

                        <div className='input-container'>
                            <label>Username</label>
                            <input
                                onChange={(e) => { this.handleOnChange(e, 'username') }}
                                type='text'
                                value={username}

                            />
                        </div>

                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                onChange={(e) => { this.handleOnChange(e, 'password') }}
                                type='password'
                                value={password}

                            />
                        </div>
                        <div className='input-container'>
                            <label>Phone number</label>
                            <input
                                onChange={(e) => { this.handleOnChange(e, 'phoneNumber') }}
                                type='text'
                                value={phoneNumber}

                            />
                        </div>
                        <div className='input-container'>
                            <label>avatar</label>
                            <input
                                onChange={(e) => { this.handleOnChange(e, 'avatar') }}
                                type='text'
                                value={avatar}

                            />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className='btn-action'
                        onClick={(e) => { this.handleSaveNewUser() }}
                    >
                        Save
                    </Button>{' '}

                    <Button color="secondary" className='btn-action' onChange={() => this.toggle()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
