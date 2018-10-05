import React from 'react';
import MainSection from '../MainSection';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('MainSection', module)
  .add('all active', () => {
    const todoItems = [
      { id: 'one', text: 'Item One 123 123', completed: false },
      { id: 'two', text: 'Item Two1 123 1', completed: false },
    ];

    return getMainSection(todoItems);
  })
  .add('some completed', () => {
    const todoItems = [
      { id: 'one', text: 'Item One 123123 1', completed: false },
      { id: 'two', text: 'Item Two 123123', completed: true },
    ];

    return getMainSection(todoItems);
  })
  .add('all completed', () => {
    const todoItems = [
      { id: 'one', text: 'Item One 123 123 ', completed: true },
      { id: 'two', text: 'Item Two 123 ', completed: true },
    ];

    return getMainSection(todoItems);
  });

function getMainSection(todos) {
  const actions = {
    clearCompleted: action('clearCompleted'),
    completeAll: action('completeAll')
  };

  return (
    <div className="todoapp">
      <MainSection todos={todos} actions={actions} />
    </div>
  );
}
