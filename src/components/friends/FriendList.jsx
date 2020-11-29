import propTypes from 'prop-types';
import './FriendList.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(el => (
        <li className="item" key={el.id}>
          <FriendListItem
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        </li>
      ))}
      {/* <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве --> */}
    </ul>
  );
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
