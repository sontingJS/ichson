import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, addNewUser, deleteUser, updateUser } from '../../services/userService';
import ModalUser from './ModalUser';
import ModalUpdate from './ModalUpdate';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUser: [],
            isOpenModalUser: false,
            isOpenModalUpdate: false,
            userToUpdate: {},
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUser: response.users
            });
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        });
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        });
    }

    toggleUpdateModal = () => {
        this.setState({
            isOpenModalUpdate: !this.state.isOpenModalUpdate
        });
    }

    creatNewUser = async (data) => {
        let isCheckExist = !this.state.arrUser.some(user => user.email === data.email);

        if (isCheckExist) {
            await addNewUser(data);
            this.setState({
                isOpenModalUser: false
            });
            this.componentDidMount();
        } else {
            alert('Email already exists');
        }
    }

    handleDeleteUser = async (user) => {
        try {
            let res = await deleteUser(user.id);
            if (res && res.errCode === 0) {
                this.componentDidMount();
            } else {
                alert(res.errMessage);
            }
        } catch (e) {
            console.error(e);
        }
    }

    handleUpdateUser1 = async (data) => {
        await this.setState({
            userToUpdate: data,
            isOpenModalUpdate: true,
        });
        console.log('userToUpdate : ', this.state.userToUpdate.id)
    }

    updateUser1 = async (dataUpdate) => {
        try {

            await this.setState(prevState => ({
                userToUpdate: {
                    ...prevState.userToUpdate,
                    firstName: dataUpdate.firstName,
                    lastName: dataUpdate.lastName,
                    address: dataUpdate.address
                }
            }));

            console.log('userToUpdate : ', this.state.userToUpdate)
            let res = await updateUser(this.state.userToUpdate);
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalUpdate: false
                });
                this.componentDidMount();
            } else {
                alert(res.errMessage);
            }
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        let arrUser = this.state.arrUser;
        return (
            <div className="user-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    creatNewUser={this.creatNewUser}
                />
                <ModalUpdate
                    isOpen={this.state.isOpenModalUpdate}
                    toggleFromParent={this.toggleUpdateModal}
                    userToUpdate={this.state.userToUpdate}
                    updateUser1={this.updateUser1}
                />

                <div className='title text-center'>Manage users with Ich Son</div>
                <div className='mx-1'>
                    <button className='btn btn-primary px-3' onClick={this.handleAddNewUser}>
                        <i className="fas fa-plus"></i> Add new user
                    </button>
                </div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                            {
                                arrUser.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit' onClick={() => this.handleUpdateUser1(item)}>
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className='btn-delete' onClick={() => this.handleDeleteUser(item)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
