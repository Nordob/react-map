import React from 'react';

import List from './components/list';
import Input from './components/input';

import './App.css';

const App = () => (
  <div className="App">
    <Input placeholder="Пункт назначения" />
    <List />
  </div>
);

export default App;
