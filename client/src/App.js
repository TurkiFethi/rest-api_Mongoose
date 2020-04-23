import React, { Component } from 'react'
import Contactlist from './components/contact_list/Contactlist'
import './App.css'
import Add_Contact from './components/add_contact/Add_Contact'

export default class App extends Component {
  render() {
    return (
      <div>
        <Add_Contact/>
        <Contactlist/>
      </div>
    )
  }
}
