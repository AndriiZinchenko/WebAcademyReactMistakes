import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from './pages/Home';
import ListKey from './pages/ListKey';
import MutateState from './pages/MutateState';
import AsyncState from './pages/AsyncState';
import BindThis from './pages/BindThis';

const App = () => (
    <HashRouter>
      <Header />
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/example1">
              <ListKey />
          </Route>
          <Route path="/example2">
              <MutateState/>
          </Route>
          <Route path="/example3">
              <AsyncState/>
          </Route>
          <Route path="/example4">
              <BindThis/>
          </Route>
      </Switch>
    </HashRouter>
);

export default App;
