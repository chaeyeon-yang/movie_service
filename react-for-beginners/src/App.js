import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [todo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === '') {
      return;
    }
    setToDos((currentArray) => [todo, ...currentArray]);
    setToDo('');
  };
  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
// map은 하나의 array에 있는 item을 내가 원하는 무엇이든지로 바꿔주는 역할을 하고 그 후 새로운 array로 return 해준다.

export default App;
