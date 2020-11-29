import propTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className="status">{isOnline ? 'online :)' : ':( offline'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
      <p>
        В зависимости от пропа isOnline, должен меняться цвет фона span.status.
        Это можно сделать через разный CSS-класс или Styled Components.
      </p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
