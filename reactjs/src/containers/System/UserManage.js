import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUser: []
        }
    }
    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUser: response.users
            }, () => {
                console.log('check state user 1', this.state.arrUser)
            })
        }
    }


    render() {
        console.log('check render', this.state)
        let arrUser = this.state.arrUser;
        return (
            <div className="user-container">
                <div className='tittle text-center'>Manage users with Ich Son</div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>actions</th>
                        </tr>
                        {
                            arrUser.map((item, index) => {
                                console.log('Ich Son check map', item, index)
                                return (
                                    <>
                                        <tr>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className='btn-edit'><i className="fas fa-edit"></i></button>
                                                <button className='btn-delete'><i className="fas fa-trash-alt"></i></button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </table>

                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
