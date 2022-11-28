import './App.css';
import React, { Component } from "react"
import GeneralInformation from "./Components/GeneralInformation"
import Education from "./Components/Education"
import Experience from "./Components/Experience"
import { nanoid } from "nanoid"
import Display from "./Components/Display"

class App extends Component {
  constructor () {
    super()
    this.state = {
      generalInformation: { firstName: "", lastName: "", email: "", phone: ""},
      education: {name: "", title: "", date: ""},
      experience: {name: "", title: "", tasks: "", dateStart: "", dateEnd: ""},
      educationArr: [],
      experienceArr: []
    }
  }



  handleChange = (event) => { 
      const { name, value, className } = event.target
      this.setState(prevState => {
      if(className === "generalInformation"){
        return {generalInformation: {...prevState.generalInformation, [name]: value, id: nanoid()}}
      }else if(className === "education"){
        return {education: {...prevState.education, [name]: value, id: nanoid()}}
      }else if(className === "experience"){
        return {experience: {...prevState.experience, [name]: value, id: nanoid()}}
      }
}
    )
      console.log(this.state)
  }


//   addEducation = (event) => {
//     for(let i = 0; i < this.state.educationArr.length; i++){
//       return (
//         <Education
//         schoolName={this.state.education.name}
//         schoolTitle = {this.state.education.title}
//         schoolDate = {this.state.education.date}
//         handleChange={this.handleChange}
// />
//       )
//     }
//   }



  handleSubmit = (event) => {
    event.preventDefault()
  }


  render(){

    const { generalInformation, education, experience } = this.state
    



    return (
      <main>
        <form>
          <GeneralInformation 
                    handleChange={this.handleChange} 

                    firstName={generalInformation.firstName}
                    lastName={generalInformation.lastName}
                    email={generalInformation.email}
                    phone={generalInformation.phone}
                    />


              <Education
                schoolName={education.name}
                schoolTitle = {education.title}
                schoolDate = {education.date}
                handleChange={this.handleChange}
              /> 

            <Experience 
                    companyName={experience.name}
                    jobTitle={experience.title}
                    tasks={experience.tasks}
                    startDate={experience.dateStart}
                    endDate = {experience.dateEnd}
                    handleChange={this.handleChange}
            />


            
              <div className="submit-div">
                  {/* <button onClick = {this.handleSubmit}>Submit</button>
                  <button>Edit</button> */}

              </div>
        </form>
            <div className="results">
              <Display state = {this.state}/>
            </div>

      </main>

    )


  }

}

export default App;
