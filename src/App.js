import React from 'react'
import { LoadScript } from '@react-google-maps/api'
import { app, sidebar, wrapper } from './App.module.css'
// import { connect } from 'react-redux'
import List from './components/List'
import Input from './components/Input'
import Map from './components/Map'

const googleMapsApiKey = 'AIzaSyBfcEFFuRT3cmPuOQWeexiF6aaDpolRKkY'

const App = () => (
  <div className={app}>
    <div className={wrapper}>
      <LoadScript
        id="script-loader"
        googleMapsApiKey={googleMapsApiKey}
        libraries={['places']}
      >
        <div className={sidebar}>
          <Input placeholder="Пункт назначения" />
          <List />
        </div>
        <Map />
      </LoadScript>
    </div>
  </div>
)

// function mapStateToProps(state) {
//   return {

//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {

//   };
// }
// connect(mapStateToProps, mapDispatchToProps)
export default App
