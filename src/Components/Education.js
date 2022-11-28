import React, { Component } from "react"

export default function Education (props) { 


        return (
            <div className="education-div">
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
                
                <button type="button" >Add Education</button>

            </div>
        )
    }


