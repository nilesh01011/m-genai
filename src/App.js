import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SOPRepository from './pages/SOPRepository';
import MyLearning from './pages/MyLearning';
import References from './pages/References';
import Stats from './pages/Stats';
import './App.css';

function App() {
  return (
    <div className='w-full h-full'>
      {/* main pages */}
      <main>
        <Routes>
          {/* =================== HOME PAGE ============= */}
          <Route path="/" exact element={<HomePage />}></Route>
          {/* =================== SOP PHomePageAGE ============= */}
          <Route path="/sop-repository" element={<SOPRepository />}></Route>
          {/* =================== MY LEARNING PAGE ============= */}
          <Route path="/my-learning" element={<MyLearning />}></Route>
          <Route path="/my-learning/stats" element={<Stats />}></Route>

          {/* <Route path="/my-learning/stats" element={<ModuleOne />}></Route> */}
          {/* =================== REFERENCES PAGE ============= */}
          <Route path="/references" element={<References />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
