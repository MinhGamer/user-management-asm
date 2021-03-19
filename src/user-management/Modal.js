import React, { Component } from 'react';

class Modal extends Component {
  state = {
    user: {
      name: '',
      username: '',
      email: '',
      phoneNumber: '',
      type: '',
    },
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    const updateUser = { ...this.state.user };
    updateUser[name] = value;
    this.setState({
      user: updateUser,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      ...this.state.user,
      id: Math.random().toString(),
    };

    this.props.addUserHandler(newUser);
  };

  render() {
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
              <form onSubmit={(e) => this.onSubmitHandler(e)}>
                <div className='form-group'>
                  <label>Username</label>
                  <input
                    name='username'
                    onChange={this.onChangeHandler}
                    type='text'
                    className='form-control'
                  />
                </div>

                <div className='form-group'>
                  <label>Name</label>
                  <input
                    name='name'
                    onChange={this.onChangeHandler}
                    type='text'
                    className='form-control'
                  />
                </div>

                <div className='form-group'>
                  <label>Email</label>
                  <input
                    name='email'
                    onChange={this.onChangeHandler}
                    type='text'
                    className='form-control'
                  />
                </div>

                <div className='form-group'>
                  <label>Phone Number</label>
                  <input
                    name='phoneNumber'
                    onChange={this.onChangeHandler}
                    type='text'
                    className='form-control'
                  />
                </div>

                <div className='form-group'>
                  <label>Type</label>
                  <select
                    name='type'
                    onChange={this.onChangeHandler}
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
