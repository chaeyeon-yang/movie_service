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
  // JS와 달리 state를 직접 수정하지 않고 함수를 통해 수정한다.

  // 값을 수정하는 함수의 첫 번째 인자로 현재 State를 보낸다(default)
  // currentArray로 직접적으로 쓰게 될 경우 array 안에 또 다른 array가 생성되게 된다.
  // 따라서 ...currentArray를 통해 array 안 원소들만 가져온다.
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
    </div>
  );
}

export default App;
