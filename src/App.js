import React, { Component } from 'react'
import TestCheckBox from './components/CheckBoxGroup/Test'
import TestRadioBox from "./components/RadioBoxGroup/Test"
import TestSelect from "./components/Select/Test"
export default class App extends Component {
 
  render() {
    return (
      <>
       <TestCheckBox />
        <TestRadioBox />
        <TestSelect />
      </>

    )
  }
}

