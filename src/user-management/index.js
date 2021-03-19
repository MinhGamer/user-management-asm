import React, { Component } from 'react';
import Search from './Search';
import Users from './Users';
import Modal from './Modal';

const DUMMY_USERS = [
  {
    id: '1',
    name: 'Dinh Phuc Nguyen',
    username: 'dpnguyen',
    email: 'dpnguyen@gmail.com',
    phoneNumber: '1123123213',
    type: 'VIP',
  },
  {
    id: '2',
    name: 'Minh',
    username: 'minhnq',
    email: 'minhnq@gmail.com',
    phoneNumber: '8785123213',
    type: 'VIP',
  },
  {
    id: '3',
    name: 'Thao',
    username: 'thaont',
    email: 'thaont@gmail.com',
    phoneNumber: '5645223213',
    type: 'VIP',
  },
  {
    id: '4',
    name: 'Lam',
    username: 'lamkh',
    email: 'lamkh@gmail.com',
    phoneNumber: '7777123213',
    type: 'VIP',
  },
];
class Home extends Component {
  state = {
    userList: DUMMY_USERS,
  };

  addUserHandler = (user) => {
    this.setState({
      userList: [...this.state.userList, user],
    });
  };

  deleteUserHandler = (userId) => {
    console.log(userId);
  };

  render() {
    return (
      <div className='container'>
        <h1 className='display-4 text-center my-3'>User Management</h1>

        <div className='d-flex justify-content-between align-items-center'>
          <Search />
          <button
            className='btn btn-success'
            data-toggle='modal'
            data-target='#modelIdUser'>
            Add User
          </button>
        </div>

        <Users
          deleteUserHandler={this.deleteUserHandler}
          userList={this.state.userList}
        />

        {/* add user */}
        <Modal addUserHandler={this.addUserHandler} />
      </div>
    );
  }
}

export default Home;
