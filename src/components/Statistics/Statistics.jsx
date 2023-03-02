import PropTypes from "prop-types";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div className="stats">
          <p className="results">Good: {good}</p>
          <p className="results">Neutral: {neutral}</p>
          <p className="results">Bad: {bad}</p>
          <p className="results">Total: {total}</p>
          <p className="results">Positive feedback: {positivePercentage}%</p>
    </div>
)
Statistics.propTypes = {
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
}
export default Statistics;