import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  actToggleCompleteTask,
  actDeleteTask,
  actGetTask,
} from '../redux/actionCreators';

class ItemTask extends Component {
  render() {
    const { itemTask } = this.props;

    return (
      <li>
        <span className='liName'>{itemTask.task}</span>
        <span>
          <i
            onClick={() => this.props.deleteTask(itemTask.id)}
            className='fas fa-trash-alt'
          />
          <i
            className='far fa-check-circle'
            onClick={() => this.props.toggleCompleteTask(itemTask.id)}
          />
          <i
            onClick={() => this.props.getTask(itemTask.id)}
            class='fa fa-pen'></i>
        </span>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (taskId) => dispatch(actDeleteTask(taskId)),

    toggleCompleteTask: (taskId) => dispatch(actToggleCompleteTask(taskId)),

    getTask: (taskId) => dispatch(actGetTask(taskId)),
  };
};

export default connect(null, mapDispatchToProps)(ItemTask);
