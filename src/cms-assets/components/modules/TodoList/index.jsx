import { Island } from '@hubspot/cms-components';
import TodoList from '../../islands/TodoList.jsx?island';

export const Component = (props) => {
  const {
    default_todo: defaultTodos,
    button_color: buttonColor,
    complete_todo_opacity: completeTodoOpacity,
  } = props;
  return (
    <Island
      module={TodoList}
      hydrateOn="load"
      // TodoList props:
      initialTodos={[defaultTodos]}
      buttonColor={buttonColor}
      completeTodoOpacity={completeTodoOpacity}
    />
  );
};
export { fields } from './fields.jsx';
export const meta = {
  label: `Todo List Module`,
};
