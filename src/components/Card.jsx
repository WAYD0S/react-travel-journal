import PropTypes from 'prop-types';

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--image">
                <img src={`../../public/${props.coverImg}`} alt="location image" />
            </div>
            <div className="card--text">
                <div className="location--details">
                    <img src="../../public/location-tag.svg" className="location--tag"/>
                    <span className="location">{props.country}</span>
                    <a href={props.mapsLink} className="google-link" >View on Google Maps</a>
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

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    travelPeriod: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired, 
    mapsLink: PropTypes.string.isRequired 
};