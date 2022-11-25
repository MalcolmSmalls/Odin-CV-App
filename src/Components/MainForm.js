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
                 />

                <input type="text"
                placeholder="Last Name"
                name="lastName"
                value={props.lastName}
                onChange = {props.handleChange}
                 />
            </form>
        </div>
    )

}


export default MainForm