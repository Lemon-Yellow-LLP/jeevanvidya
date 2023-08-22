import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import MediaPress from '@/pages/MediaPress';
import UniversalPrayer from './pages/UniversalPrayer';
import About from '@/pages/About';
import Dnyanpeeth from '@/pages/Dnyanpeeth';
import Download from './components/Download';
import pdfImage from '@/assets/pdf_file_icon.svg';

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
import TestPage from './pages/TestPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/universalPrayer' element={<UniversalPrayer />} />
        <Route path='/dnyanpeeth' element={<Dnyanpeeth />} />
        <Route path='*' element={<div>Page not found</div>} />
        <Route
          path='/mediaPress'
          element={
            <div className='blue-gradient flex flex-col pt-[164px]'>
              {/* <MediaPress /> */}

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
        />
        <Route path='/test' element={<TestPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
