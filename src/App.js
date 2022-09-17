import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import PeekABoo from './components/PeekABoo'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/peekaboo' element={<PeekABoo />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
