import React from "react"

export default function Experience (props) {
    
    
    
    
    return(
        <div className = "experience-div">
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

                <button>Add task</button>

                
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

        </div>

    )

}