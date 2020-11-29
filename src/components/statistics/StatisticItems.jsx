import './Statistics.css';
import propTypes from 'prop-types';

export default function StatisticItems({ label, percentage }) {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

StatisticItems.propTypes = {
  // key: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
