import { BrowserRouter, Routes, Route } from 'react-router-dom';
import pdfImage from '@/assets/pdf_file_icon.svg';
import TestPage from './pages/TestPage';
import Testimonial from '@/pages/Testimonial';
import Welfare from './pages/Welfare';
import PhilosophyQuotes from './pages/PhilosophyQuotes';
import Donation from './pages/Donation';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import UniversalPrayer from './pages/UniversalPrayer';
import MediaPress from './pages/MediaPress';
import Dnyanpeeth from './pages/Dnyanpeeth';
import Philosophy from './pages/Philosophy';
import Download from './pages/Download';
import DownloadFile from './components/DownloadFile';
import ErrorPage from './pages/Error';

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
        <Route path='/about' element={<About />} />
        <Route path='/universal-prayer' element={<UniversalPrayer />} />
        <Route path='/media-press' element={<MediaPress />} />
        <Route path='/test' element={<TestPage />} />
        <Route
          path='/test-two'
          element={
            <div className='blue-gradient flex flex-col pt-[164px]'>
              <div className='flex gap-6'>
                {fileData.map((file, index) => (
                  <DownloadFile
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
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/dnyanpeeth' element={<Dnyanpeeth />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/philosophy' element={<Philosophy />} />
        <Route path='/welfare' element={<Welfare />} />
        <Route path='/philosophy-quotes' element={<PhilosophyQuotes />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/download' element={<Download />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
