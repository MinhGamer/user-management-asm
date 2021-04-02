import React, { Component } from 'react';
import './index.css';
import ListTask from './list-task';
import AddTask from './add-task';

export default class Todolist extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card__header'>
          <img src='./img/X2oObC4.png' alt='' />
        </div>
        <div className='card__body'>
          <div className='card__content'>
            <div className='card__title'>
              <h2>My Tasks</h2>
              <p>September 9,2020</p>
            </div>
            <div className='card__add'>
              <AddTask />
            </div>
            <div id='validation' style={{ display: 'none' }} />
            <div
              id='notiInput'
              className='alert-danger'
              style={{ display: 'none' }}
            />
            <div className='card__todo'>
              {/* Uncompleted tasks */}
              <ListTask />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
