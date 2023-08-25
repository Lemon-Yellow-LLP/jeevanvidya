import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import MediaPress from '@/pages/MediaPress';
import Download from './components/Download';
import About from './pages/About';
import Dnyanpeeth from '@/pages/Dnyanpeeth';
import Philosophy from '@/pages/Philosophy';
import pdfImage from '@/assets/pdf_file_icon.svg';
import TestPage from './pages/TestPage';
import Testimonial from '@/pages/Testimonial';
import Welfare from './pages/Welfare';

const fileData = [
  {
    image: pdfImage,
    label: 'Video One',
    size: '2.5 KB',
    name: 'VideoOneNotes',
    file: pdfImage,
  },
  {
    image: pdfImage,
    label: 'Video Two',
    size: '3.5 KB',
    name: 'VideoTwoNotes',
    file: pdfImage,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/media-press' element={<MediaPress />} />
        <Route path='/test' element={<TestPage />} />
        <Route
          path='/test-two'
          element={
            <div className='blue-gradient flex flex-col pt-[164px]'>
              <div className='flex gap-6'>
                {fileData.map((file, index) => (
                  <Download
                    fileImage={file.image}
                    label={file.label}
                    filesize={file.size}
                    filename={file.name}
                    file={file.file}
                    key={index}
                  />
                ))}
              </div>
            </div>
          }
        ></Route>
        <Route path='/about' element={<About />} />
        <Route path='/dnyanpeeth' element={<Dnyanpeeth />} />
        <Route path='/philosophy' element={<Philosophy />} />
        <Route path='/welfare' element={<Welfare />} />
        <Route path='*' element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
