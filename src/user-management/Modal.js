import React, { Component } from 'react';

class Modal extends Component {
  // state = {
  //   user: {
  //     name: '',
  //     username: '',
  //     email: '',
  //     phoneNumber: '',
  //     type: '',
  //   },
  // };

  // onChangeHandler = (e) => {
  //   const { name, value } = e.target;
  //   const updateUser = { ...this.state.user };
  //   updateUser[name] = value;
  //   this.setState({
  //     user: updateUser,
  //   });
  // };

  // onSubmitHandler = (e) => {
  //   e.preventDefault();

  //   let user;
  //   if (this.props.editUser.id) {
  //     //update user
  //     user = {
  //       ...this.state.user,
  //     };
  //     this.props.updateUserHandler(user);
  //   } else {
  //     //add new user
  //     user = {
  //       ...this.state.user,
  //       id: Math.random().toString(),
  //     };
  //     this.props.addUserHandler(user);
  //   }

  //   this.clearForm();
  // };

  clearForm = () => {
    const clearUser = { ...this.state.user };
    Object.keys(this.state.user).forEach((userKey) => {
      clearUser[userKey] = '';
    });
    this.setState({ user: clearUser });
  };

  render() {
    const { onSubmitHandler, onChangeHandler } = this.props;

    return (
      <div
        className='modal fade'
        id='modelIdUser'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='modelTitleId'
        aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>ADD USER</h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={onSubmitHandler}>
                <div className='form-group'>
                  <label>Username</label>
                  <input
                    name='username'
                    onChange={onChangeHandler}
                    type='text'
                    className='form-control'
                    value={this.props.editUser.username}
                  />
                </div>

                <div className='form-group'>
                  <label>Name</label>
                  <input
                    name='name'
                    onChange={onChangeHandler}
                    type='text'
                    className='form-control'
                    value={this.props.editUser.name}
                  />
                </div>

                <div className='form-group'>
                  <label>Email</label>
                  <input
                    name='email'
                    onChange={onChangeHandler}
                    type='text'
                    className='form-control'
                    value={
                      this.props.editUser.email || this.props.editUser.email
                    }
                  />
                </div>

                <div className='form-group'>
                  <label>Phone Number</label>
                  <input
                    name='phoneNumber'
                    onChange={onChangeHandler}
                    type='text'
                    className='form-control'
                    value={
                      this.props.editUser.phoneNumber ||
                      this.props.editUser.phoneNumber
                    }
                  />
                </div>

                <div className='form-group'>
                  <label>Type</label>
                  <select
                    value={this.props.editUser.type || this.props.editUser.type}
                    name='type'
                    onChange={onChangeHandler}
                    className='form-control'>
                    <option value='User'>USER</option>
                    <option value='VIP'>VIP</option>
                  </select>
                </div>
                <button type='submit' className='btn btn-success'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
