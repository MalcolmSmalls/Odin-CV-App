import React from "react"


const MainForm = (props) => {



    return (
        <div>
            <form>
                <h2>General Information</h2>
                <input type="text"
                placeholder="First Name"
                name="firstName"
                value={props.firstName}
                onChange = {props.handleChange}
                className = "generalInformation"
                 />

                <input type="text"
                placeholder="Last Name"
                name="lastName"
                value={props.lastName}
                onChange = {props.handleChange}
                className = "generalInformation"
                 />

                <input type="email"
                placeholder="E-mail"
                name="email"
                value={props.email}
                onChange = {props.handleChange}
                className = "generalInformation"
                 />

                <input type="tel"
                placeholder="Phone Number"
                name="phone"
                value={props.phone}
                onChange = {props.handleChange}
                className = "generalInformation"
                 />

                <h2>Education</h2>
                <input type="text"
                placeholder="Institute's Name"
                name="name"
                value={props.schoolName}
                onChange = {props.handleChange}
                className = "education"
                 />

                <input type="text"
                placeholder="Field of Study"
                name="title"
                value={props.schoolTitle}
                onChange = {props.handleChange}
                className = "education"
                />

                <input type="date"
                placeholder="Date of Completion"
                name="date"
                value={props.schoolDate}
                onChange = {props.handleChange}
                className = "education"
                />

                <h2>Experience</h2>
                
                <input type="text"
                placeholder="Company Name"
                name="name"
                value={props.companyName}
                onChange = {props.handleChange}
                className = "experience"
                />

                
                <input type="text"
                placeholder="Job Title"
                name="title"
                value={props.jobTitle}
                onChange = {props.handleChange}
                className = "experience"
                />

                
                <input type="text"
                placeholder="Job Task"
                name="tasks"
                value={props.tasks}
                onChange = {props.handleChange}
                className = "experience"
                />

                
                <input type="date"
                placeholder="Start Date"
                name="dateStart"
                value={props.startDate}
                onChange = {props.handleChange}
                className = "experience"
                />

                <input type="date"
                placeholder="End Date"
                name="dateEnd"
                value={props.endDate}
                onChange = {props.handleChange}
                className = "experience"
                />
            </form>
        </div>
    )

}


export default MainForm