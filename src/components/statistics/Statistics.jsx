import propTypes from 'prop-types';
import './Statistics.css';

export default function Statistics({ title, stats }) {
  console.log();
  return (
    <section className="statistics">
      {/* Перевірка якщо title не прийшов */}
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(el => (
          <li className="item" key={el.id}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
            <p>
              Цвет фона элемента статистики в оформлении можно пропустить, либо
              создать функцию для генерации случайного цвета.
            </p>
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
