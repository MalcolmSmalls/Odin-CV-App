import React, { Component } from "react"


const MainForm = (props) => {



    return (
        <div>
            <form>
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

                <input type="text"
                placeholder="Date of Completion"
                name="date"
                value={props.schoolDate}
                onChange = {props.handleChange}
                className = "education"
                 />
            </form>
        </div>
    )

}


export default MainForm