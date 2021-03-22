import { useState } from 'react';
import './App.css';
import Direction from './components/Map/Direction';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  return (
    <div>
      <input type="text" placeholder="Starting from" onBlur={e => { setOrigin(e.target.value)}}/>
      <input type="text" placeholder="Destination to" onBlur={e => { setDestination(e.target.value)}}/>
      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
