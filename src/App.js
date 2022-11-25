import './App.css';
import React, { Component } from "react"
import MainForm from "./Components/MainForm"

class App extends Component {
  constructor () {
    super()
    this.state = {
      generalInformation: { firstName: "", lastName: "", email: "", phone: ""},
      education: [{name: "", title: "", date: ""}],
      experience: [{name: "", title: "", tasks: "", dateStart: "", dateEnd: ""}]
    }
  }

  handleChange = (event) => { 
      const { name, value } = event.target
      this.setState({
        generalInformation: {
          [name]: value
        }
      })
      console.log(this.state)
  }


  render(){

    const { generalInformation, education, experience } = this.state


    return (
      <main>
        <MainForm generalInformation={generalInformation}
                  education={education} 
                  experience={experience} 
                  handleChange={this.handleChange} 
                  firstName={generalInformation.firstName}
                  lastName={generalInformation.lastName}/>
      </main>

    )


  }

}

export default App;
