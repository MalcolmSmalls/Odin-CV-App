import React, { Components } from "react"

export default function Display (props) {
    return (
        <h1>{props.state.generalInformation.firstName}</h1>
    )
}