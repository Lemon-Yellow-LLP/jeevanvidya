import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import MediaPress from '@/pages/MediaPress';
import Download from '@/components/Download';
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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
