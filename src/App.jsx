import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import MediaPress from '@/pages/MediaPress';
import TestPage from './pages/TestPage';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mediaPress' element={<MediaPress />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
