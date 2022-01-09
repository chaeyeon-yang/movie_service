// 특정 컴포넌트를 딱 한번만 실행하고(render), 다시는 실행하고 싶지 않을 경우 또는 or 컴포넌트의 변화에만 반응하는 코드를 작성하고 싶을 경우
// 예) api를 실행하는 경우..
// ===> useEffect라고 불리는 function(두 개의 인자를 받음)을 이용한다.
// 첫번째 인자는 실행하고 싶은 코드, 두 번째 인자는 array를 넣는다.
// (즉, array에 컴포넌트를 넣으면 이 특정 컴포넌트가 변화할 때 코드를 실행하라고 지시하는 것이다)
// (고로 빈 array를 할당할 경우 코드가 단 한번만 실행된다.)
import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');
  useEffect(() => {
    console.log('CALL THE API....');
  }, []);

  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('SEARCH FOR', keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log('i run when keyword & counter change.');
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
    // state 가 변경될 때마다 re-rendering 된다
  );
}

export default App;
