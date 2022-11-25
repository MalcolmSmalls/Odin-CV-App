import './App.css';
import React, { Component } from "react"
import MainForm from "./Components/MainForm"

class App extends Component {
  constructor () {
    super()
    this.state = {
      generalInformation: { name: "", email: "", phone: ""},
      education: [{name: "", title: "", date: ""}],
      experience: [{name: "", title: "", tasks: "", dateStart: "", dateEnd: ""}]
    }
  }

  render(){

    const { generalInformation, education, experience } = this.state


    return (
      <main>
        <MainForm />
      </main>

    )


  }

}

export default App;
