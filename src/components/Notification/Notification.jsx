import PropTypes from "prop-types";

const Notification = ({message}) => 
<p className="results">{message}</p>

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification