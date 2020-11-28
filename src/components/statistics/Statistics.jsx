import './Statistics.css';
import propTypes from 'prop-types';
import StatisticItems from './StatisticItems';

export default function Statistics({ title, stats }) {
  console.log();
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(el => (
          <StatisticItems
            key={el.id}
            label={el.label}
            percentage={el.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array.isRequired,
};
