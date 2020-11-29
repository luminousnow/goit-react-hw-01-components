import './App.css';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friends/FriendList';
import Transaction from './components/transaction/TransactionHistory';

import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

function App() {
  return (
    <div className="App">
      {/* // Задание 1 - Профиль социальной сети */}
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* // Задание 2 - Секция статистики const */}
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}
      {/* // Задание 3 - Список друзей */}
      <FriendList friends={friends} />
      {/* // Задание 4 - История транзакций */}
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
