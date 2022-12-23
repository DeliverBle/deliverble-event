import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Result from '../pages/Result';
import ScrollToTop from './ScrollToTop';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
