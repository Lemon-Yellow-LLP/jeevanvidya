import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import MediaPress from '@/pages/MediaPress';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<MediaPress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
