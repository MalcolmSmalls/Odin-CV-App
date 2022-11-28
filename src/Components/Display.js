import React from "react"

export default function Display (props) {
    const { generalInformation, education, experience } = props.state
    return (
        <div className = "cv-results">
            <div className ="general-info">
                <h1>{generalInformation.firstName} {generalInformation.lastName}</h1>
                <span>{generalInformation.email}</span>
                <span>{generalInformation.phone}</span>
                <h2>{education.name && 'Education' || education.title && 'Education' || education.date && 'Education'}</h2>
                <h3>{education.name}</h3>
                <span>{education.title}</span>
                <span>{education.date}</span>
                <h2>{experience.name && 'Experience' || 
                    experience.title && 'Experience' || 
                    experience.tasks && 'Experience' ||
                    experience.dateStart && 'Experience' || 
                    experience.dateEnd && 'Experience'}</h2>
                <h3>{experience.name}</h3>
                <span>{experience.title}</span>
                {experience.tasks && <ul><li>{experience.tasks}</li></ul>}
                <span>{experience.dateStart} {experience.dateStart && experience.dateEnd ? ' - ' : ""} {experience.dateEnd}</span>
            </div>
        </div>

    )
}