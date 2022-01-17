import { useState, useEffect } from 'react';
import Movie from './components/Movie';
import Home from './routes/Home';
import Detail from './routes/Detail';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// React Router는 다이나믹 (동적) url을 지원해준다. [url에 변수를 넣을 수 있다.]
// react-router-dom v6이 v5.x와 달라진 점에 대해 정리된 문서
// https://alpaca92.notion.site/react-router-dom-4fc2c78083594edc9a04d73caa71aa38
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
// <Route path="/movie/:id"> 는 Router한테 여기 오는 id 값이 뭔지 알고 싶다고 말하고 있는 것이다.
export default App;
