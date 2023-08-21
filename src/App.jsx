import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import MediaPress from '@/pages/MediaPress';
import TestPage from './pages/TestPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<MediaPress />} />
        <Route path='/test' element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
