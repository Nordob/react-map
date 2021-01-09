import React from "react";
import './App.css';
import Input from "./components/Input/Input";
import { connect } from "react-redux";
import List from './components/List/List'


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
