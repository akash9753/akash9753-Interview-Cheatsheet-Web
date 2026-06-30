import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { CoursePage } from './pages/CoursePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:slug" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}
