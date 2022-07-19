import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import Myprofile from './components/Myprofile';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="myprofile" element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
