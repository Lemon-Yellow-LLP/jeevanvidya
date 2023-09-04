import { BrowserRouter, Routes, Route } from 'react-router-dom';
import pdfImage from '@/assets/pdf_file_icon.svg';
import { Suspense, lazy } from 'react';
import Loading from './pages/Loading';
import Home from '@/pages/Home/index';
const Navbar = lazy(() => import('@/components/Navbar/index'));
const MediaPress = lazy(() => import('@/pages/MediaPress/index'));
const UniversalPrayer = lazy(() => import('@/pages/UniversalPrayer/index'));
const About = lazy(() => import('@/pages/About/index'));
const Dnyanpeeth = lazy(() => import('@/pages/Dnyanpeeth/index'));
const Download = lazy(() => import('@/pages/Download/index'));
const DownloadFile = lazy(() => import('@/components/DownloadFile/index'));
const Philosophy = lazy(() => import('@/pages/Philosophy/index'));
const TestPage = lazy(() => import('@/pages/TestPage'));
const Testimonial = lazy(() => import('@/pages/Testimonial/index'));
const Welfare = lazy(() => import('@/pages/Welfare/index'));
const PhilosophyQuotes = lazy(() => import('@/pages/PhilosophyQuotes/index'));
const ContactUs = lazy(() => import('@/pages/ContactUs/index'));

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
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/universalPrayer' element={<UniversalPrayer />} />
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
          <Route path='/about' element={<About />} />
          <Route path='/dnyanpeeth' element={<Dnyanpeeth />} />
          <Route path='/media-press' element={<MediaPress />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/philosophy' element={<Philosophy />} />
          <Route path='/welfare' element={<Welfare />} />
          <Route path='/philosophy-quotes' element={<PhilosophyQuotes />} />
          <Route path='/download' element={<Download />} />
          <Route path='*' element={<div>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
