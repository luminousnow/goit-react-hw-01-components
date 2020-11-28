import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import Friends from './components/friends/FriendList';
import Transaction from './components/transaction/TransactionHistory';

import users from './json/user.json';
import statistics from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

// Задание 1 - Профиль социальной сети
const { name, tag, location, avatar, stats } = users;
ReactDOM.render(
  <Profile
    name={name}
    tag={tag}
    location={location}
    avatar={avatar}
    stats={stats}
  />,
  document.getElementById('root'),
);

// Задание 2 - Секция статистики
const {} = statistics;
ReactDOM.render(<Statistics />, document.getElementById('root'));

// Задание 3 - Список друзей
const {} = friends;
ReactDOM.render(<Friends />, document.getElementById('root'));

// Задание 4 - История транзакций
const {} = transactions;
ReactDOM.render(<Transaction />, document.getElementById('root'));

// заімпортувати ReactDOM from 'react-dom' в index.js (точка входу)
// ReactDOM.render(els, document.getElementById('root'));

// створити каталог під колекції json, покласти файл json
// заімпортувати колекцію об'єктів json в index.js (точка входу)
//
// створити Компонент (функцію) в окремому каталозі з return, котра буде приймати пропси (деструктуризувати)
// export defoult
// заімпортувати Компонент в index.js (точка входу)
// рендирити результат ReactDOM.render(Компонент, document.getElementById('root'));
//
//

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
