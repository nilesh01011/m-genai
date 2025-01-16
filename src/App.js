import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='w-full h-full'>
      <Header />
      {/* main pages */}
      <Routes>
        {/* =================== hOME pAGE ============= */}
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
