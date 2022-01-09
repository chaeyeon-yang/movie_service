// 특정 컴포넌트를 딱 한번만 실행하고(render), 다시는 실행하고 싶지 않을 경우 또는 or 컴포넌트의 변화에만 반응하는 코드를 작성하고 싶을 경우
// 예) api를 실행하는 경우..
// ===> useEffect라고 불리는 function(두 개의 인자를 받음)을 이용한다.
// 첫번째 인자는 실행하고 싶은 코드, 두 번째 인자는 array를 넣는다.
// (즉, array에 컴포넌트를 넣으면 이 특정 컴포넌트가 변화할 때 코드를 실행하라고 지시하는 것이다)
// (고로 빈 array를 할당할 경우 코드가 단 한번만 실행된다.)
import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

// useEffect에서 특정 컴포넌트를 destroy할 때 적용할 수 있는 함수가 있다.
// ===> Cleanup function **

// component가 파괴될 때는 react.js가 useEffect에 실행되는 함수에 작성된 return function(cleanup func)을 실행한다.

// === useEffect(()=>{
//     console.log("created:)")
//     return () => console.log("destroyed :(")
//     },[])

function Hello() {
  function byFn() {
    console.log('bye :(');
  }
  function hiFn() {
    console.log('created:)');
    return byFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}
// component는 단지 jsx를 return하는 function일 뿐이다.

export default App;
