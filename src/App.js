import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  { text: 'Analysis of trends', completed: true },
  { text: 'Update forecast', completed: false },
  { text: 'Update performance', completed: false },
  { text: 'Send Capacity Plan email', completed: false },

];

function App() {
  return (
    <>
      <TodoCounter completed={1} total={4} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}

      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
