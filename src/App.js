import React from "react";
import { connect } from "react-redux";

import List from './components/list'
import Input from "./components/input";

import './App.css';


function App() {
  

  return (
    <div className="App">
      <Input
        placeholder='Пункт назначения'
      />
      <List/>
    </div>
  );
}

function mapStateToProps(state) {
  return{

  }
}

function mapDispatchToProps(dispatch) {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
