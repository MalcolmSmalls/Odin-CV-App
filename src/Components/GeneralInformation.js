import React from "react"


const GeneralInformation = (props) => {


    return (
        <div className = "general-info-div">
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

        </div>
    )

}


export default GeneralInformation