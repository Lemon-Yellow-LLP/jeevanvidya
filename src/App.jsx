import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import MediaPress from '@/pages/MediaPress';
import About from '@/pages/About';
import Dnyanpeeth from '@/pages/Dnyanpeeth';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/media-press' element={<MediaPress />} />
        <Route path='/about' element={<About />} />
        <Route path='/dnyanpeeth' element={<Dnyanpeeth />} />
        <Route path='*' element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
