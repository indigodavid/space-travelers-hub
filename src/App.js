import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MyProfile from './pages/MyProfile';
import Rockets from './components/rockects/Rockets';
import Footer from './components/Footer';
import MissionsPage from './pages/MissionsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<MissionsPage />} />
        <Route path="myprofile" element={<MyProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
