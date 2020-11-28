import './App.css';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import Friends from './components/friends/FriendList';
import Transaction from './components/transaction/TransactionHistory';

import users from './json/user.json';
import statistics from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={users.name}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />
      {/* // Задание 2 - Секция статистики const */}
      {/* <Statistics /> */}
      {/* // Задание 3 - Список друзей */}
      {/* <Friends /> */}
      {/* // Задание 4 - История транзакций */}
      {/* <Transaction /> */}
    </div>
  );
}

export default App;
