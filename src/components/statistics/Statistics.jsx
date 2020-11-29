import propTypes from 'prop-types';
import s from './Statistics.module.css';
import getRundomColor from './get-rundom-hex-color';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {/* Перевірка якщо title не прийшов */}
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(el => (
          <li
            className={s.item}
            key={el.id}
            style={{ backgroundColor: getRundomColor() }}
          >
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }),
  ),
};
