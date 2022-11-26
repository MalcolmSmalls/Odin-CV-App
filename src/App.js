import './App.css';
import React, { Component } from "react"
import GeneralInformation from "./Components/GeneralInformation"
import Education from "./Components/Education"
import Experience from "./Components/Experience"

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
        return {generalInformation: {...prevState.generalInformation, [name]: value}}
      }else if(className === "education"){
        return {education: {...prevState.education, [name]: value}}
      }else if(className === "experience"){
        return {experience: {...prevState.experience, [name]: value}}
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


  handleEducation = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    
    this.setState(prevState => {
      return {educationArr: [...prevState.educationArr, prevState.education]}
    })


    console.log(this.state.educationArr)

  }


  render(){

    const { generalInformation, education, experience } = this.state
    

    const educationAdder = this.state.educationArr.map(school => {
      return(
        <Education
        schoolName={education.name}
        schoolTitle = {education.title}
        schoolDate = {education.date}
        handleChange={this.handleChange}
        handleEducation={this.handleEducation}
      />
      )
    })
    // const educationAdder = function () {
    //   for(let i = 0; i <= this.state.educationArr.length; i++){
    //     return(
    //       <Education
    //       schoolName={education.name}
    //       schoolTitle = {education.title}
    //       schoolDate = {education.date}
    //       handleChange={this.handleChange}
    //       handleEducation={this.handleEducation}
    //     />
    //     )
    //   }
    // }


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


            {this.state.educationArr.length === 0 ? 
              <Education
                schoolName={education.name}
                schoolTitle = {education.title}
                schoolDate = {education.date}
                handleChange={this.handleChange}
                handleEducation={this.handleEducation}
              /> : null
            }


{educationAdder}
            <Experience 
                    companyName={experience.name}
                    jobTitle={experience.title}
                    tasks={experience.tasks}
                    startDate={experience.dateStart}
                    endDate = {experience.dateEnd}
                    handleChange={this.handleChange}
            />


            
              <div className="submit-div">
                  <button>Submit</button>
                  <button>Edit</button>

              </div>
        </form>

      </main>

    )


  }

}

export default App;
