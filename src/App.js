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
      const { name, value, className } = event.target
      this.setState(prevState => {
      if(className === "generalInformation"){
        return {generalInformation: {... prevState.generalInformation, [name]: value}}
      }else if(className === "education"){
        return {education: [{... prevState.education[0], [name]: value}]}
      }
}
    )
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
                  schoolName={education.name}
                  schoolTitle = {education.title}
                  schoolDate = {education.date}
                  firstName={generalInformation.firstName}
                  lastName={generalInformation.lastName}/>
      </main>

    )


  }

}

export default App;
