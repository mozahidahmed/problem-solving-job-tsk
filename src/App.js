import './App.css';
import List from './components/List';

function App() {

  const items = [
    { text: 'Apple'},
    { text: 'Mango'},
    { text: 'Banana'},
  ]

  return (
    <div className="App">
      <h2>Fruit List</h2>
      <List items={items}/>
    </div>
  );
}

export default App;
