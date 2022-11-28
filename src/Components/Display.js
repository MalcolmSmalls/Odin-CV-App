import React, { Components } from "react"

export default function Display (props) {
    const { generalInformation } = props.state
    return (
        <div className = "cv-results">
            <div className ="general-info">
                <h1>{generalInformation.firstName} {generalInformation.lastName}</h1>
                <span>{generalInformation.email}</span>
                <span>{generalInformation.phone}</span>
            </div>
        </div>

    )
}