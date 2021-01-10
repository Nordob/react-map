import React from "react"
import './App.css'
import List from './components/list';
import Input from './components/input';

import { connect } from "react-redux"
import { LoadScript } from '@react-google-maps/api' 
const googleMapsApiKey = "";

const App = () => (
  return (
    <div className="App">
      <LoadScript id="script-loader" googleMapsApiKey={googleMapsApiKey} libraries={["places"]}>
    	<Input placeholder="Пункт назначения" />
        <List/>
      </LoadScript>
    </div>
  )
)

function mapStateToProps(state) {
  return{

  }
}

function mapDispatchToProps(dispatch) {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
