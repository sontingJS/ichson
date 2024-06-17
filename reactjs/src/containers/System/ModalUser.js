import { first } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    toggle = () => {
        this.props.toggleFromParent();
    }
    componentDidMount() {
    }

    handleOnChangeInput = (event, id) => {
        let coppyState = { ...this.state };
        coppyState[id] = event.target.value;
        this.setState({
            ...coppyState
        }, () => {
            console.log('coppy state : ', coppyState)
        })
    }
    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            console.log(arrInput[i])
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('missing parameters ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            //call api creat modal 
            this.props.creatNewUser(this.state)
        }
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen}
                    toggle={() => this.toggle()}
                    size='lg'
                    centered
                >
                    <ModalHeader toggle={() => this.toggle()}>Create New User</ModalHeader>
                    <ModalBody>
                        <div classNameName='container'>
                            <div classNameName='row'>
                                <form className="row g-3 needs-validation" action="/post-crud" method="post">
                                    <div className="col-12 mt-3 ">Create a new user</div>
                                    <div className="col-6">
                                        <label for="validationemail" className="form-label">Email</label>
                                        <input type="email"
                                            className="form-control"
                                            name="email"
                                            onChange={(event) => this.handleOnChangeInput(event, 'email')}
                                            value={this.state.email}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label for="validationpassword" className="form-label">Password</label>
                                        <input type="password"
                                            className="form-control"
                                            name="password"
                                            onChange={(event) => this.handleOnChangeInput(event, 'password')}
                                            value={this.state.password} />
                                    </div>
                                    <div className="col-6">
                                        <label for="validationCustom01" className="form-label">First name</label>
                                        <input type="text"
                                            className="form-control"
                                            name="firstName" onChange={(event) => this.handleOnChangeInput(event, 'firstName')}
                                            value={this.state.firstName}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label for="validationCustom02" className="form-label">Last name</label>
                                        <input type="text"
                                            className="form-control"
                                            name="lastName"
                                            onChange={(event) => this.handleOnChangeInput(event, 'lastName')}
                                            value={this.state.lastName}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label for="validationCustom03" className="form-label">Address</label>
                                        <input type="text"
                                            className="form-control"
                                            name="address"
                                            onChange={(event) => this.handleOnChangeInput(event, 'address')}
                                            value={this.state.address}
                                        />
                                    </div>
                                    {/* <div className="col-6">
                                        <label for="validationCustom03" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" name="phoneNumber" />
                                    </div>
                                    <div className="col-3">
                                        <label for="validationCustom05" className="form-label">Sex</label>
                                        <select className="form-control" name="gender" />
                                        <option value="1">Male</option>
                                        <option value="0">Female</option>
                                        <select />
                                    </div>
                                    <div className="col-3">
                                        <label for="validationCustom05" className="form-label">Role</label>
                                        <select className="form-control" name="roleId">
                                            <option value="1">Admin</option>
                                            <option value="0">Doctor</option>
                                            <option value="2">Patient</option>
                                        </select>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='px-3' color="primary" onClick={() => this.handleAddNewUser()}>
                            Add new
                        </Button>{' '}
                        <Button className='px-3' color="secondary" onClick={() => this.toggle()}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
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

