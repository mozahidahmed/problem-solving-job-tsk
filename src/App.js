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
      <List items={items}/>
    </div>
  );
}

export default App;
