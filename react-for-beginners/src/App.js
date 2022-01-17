import { useState, useEffect } from 'react';
import Movie from './components/Movie';
import Home from './routes/Home';
import Detail from './routes/Detail';
// 라우터는 Hash Router와 BrowserRouter로 나뉜다.
// 둘의 차이점은 URL의 생김새에 있다.

// Browser Router에서 나온 URL은 보통의 웹사이트 처럼 생겼다.
// (localhost:3000/)
// Hash Router는 뒤에 부가적인 것이 붙는다
// (localhost:3000/#/)
// -> 일반적으로 Browser Router가 쓰이며, Hash Router는 잘 쓰이지 않는다

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// npm i react-router-dom@5.3.0
// react-router-dom은 아주 쿨한 컴포넌트들의 모음집이다
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
// Switch는 Route를 찾는다. Route를 찾으면 컴포넌트를 렌더링 한다.
// Route -> (1) 유저가 홈화면(URL)으로 갈 때 사용할 Route [path="/"]
//          (2) 유저가 특정 화면으로 갈 때 사용할 Route

// Switch는 한 번에 하나의 라우트만 렌더링 하기 위해 사용한다. 하지만
// react-router-dom은 버전 6이상부터 더 이상 switch를 쓰지 않는다.
// 이제 그 역할은 Routes가 대신할 것이다. (공식문서 참조)

// 한 라우트에서 다른 라우트로 가고 싶을 땐 a 태그의 href 속성이 가장 먼저 생각 날 것이다.
// 실제로도 그렇게 코드를 작성하면 이도잉 가능하다. 하지만 페이지 전체가 새로고침되기 때문에 리액트의 장점을 깎아 먹는다.
// 따라서 재실행 되는 것을 막기 위해 react-router-dom에서 import한 link 태그를 사용하면 된다.

// *Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트이다.
export default App;

//App.js 는 router를 render 한다.

//home 라우트(페이지)는 모든 영화를 보여주고
//Movie 라우트는 영화 하나만 보여준다.
//라우트 별로 생각해야함
//home라우트는 기본적으로 App 컴포넌트 전체를 가지고 있게 만든다.
