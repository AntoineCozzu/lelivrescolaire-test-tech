import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import { Students } from './pages/students/students';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/students" component={Students}/>
          <Redirect to='/students'/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
