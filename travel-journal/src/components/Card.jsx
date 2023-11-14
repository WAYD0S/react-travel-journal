import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--image">
                <img src={`../../public/${props.coverImg}`} alt="location image" />
            </div>
            <div className="card--text">
                <div className="location--details">
                    <img src="../../public/location-tag.png" />
                    <span className="location">{props.country}</span>
                    <span href="props.mapsLink" className="google-link">View on Google Maps</span>
                </div>
                <div className="location--info">
                    <h2 className="location--name">{props.title}</h2>
                    <p className="location--period">{props.travelPeriod}</p>
                    <p className="location--description">{props.description}</p>
                </div>

            </div>
        </div>
    )
}