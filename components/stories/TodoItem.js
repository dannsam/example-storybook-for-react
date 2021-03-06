import React from 'react';
import TodoItem from '../TodoItem';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('TodoItem', module)
  .add('not completed', () => {
    const todo = {
      id: 'the-id',
      text: 'Hello Todo 123123123',
      completed: false
    };

    return getItem(todo);
  })
  .add('completed', () => {
    const todo = {
      id: 'the-id',
      text: 'Hello Todo 4124 124 124 ',
      completed: true
    };

    return getItem(todo);
  });


function getItem(todo) {
  return (
    <div className="todoapp">
      <div className="todo-list">
        <TodoItem
          todo={todo}
          editTodo={action('editTodo')}
          deleteTodo={action('deleteTodo')}
          completeTodo={action('completeTodo')}/>
      </div>
    </div>
  );
}
