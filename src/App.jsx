import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import MediaPress from '@/pages/MediaPress';
import About from './pages/About';
import UniversalPrayer from './pages/UniversalPrayer';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mediaPress' element={<MediaPress />} />
        <Route path='/about' element={<About />} />
        <Route path='/universalPrayer' element={<UniversalPrayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
