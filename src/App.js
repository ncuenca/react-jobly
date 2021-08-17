import './App.css';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes/>
    </BrowserRouter>
    
  );
}

export default App;
