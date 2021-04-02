import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemTask from './item-task';

class ListTask extends Component {
  render() {
    const { todoList } = this.props;
    // console.log(this.props.todoList);
    return (
      <>
        {/* Uncompleted tasks */}
        <ul className='todo' id='todo'>
          {todoList
            .filter((itemTask) => !itemTask.isCompleted)
            .map((itemTask) => (
              <ItemTask itemTask={itemTask} />
            ))}
        </ul>

        {/* Completed tasks */}
        <ul className='todo' id='completed'>
          {todoList
            .filter((itemTask) => itemTask.isCompleted)
            .map((itemTask) => (
              <ItemTask itemTask={itemTask} />
            ))}
        </ul>
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    todoList: state.todoListReducer.todoList,
  };
};

export default connect(mapStatetoProps, null)(ListTask);
