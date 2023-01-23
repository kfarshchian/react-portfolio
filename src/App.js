import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './compnents/Layout';
import Home from './compnents/Home';
import About from './compnents/About'
import Contact from './compnents/Contact'
import Portfolio from './compnents/Portfolio';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" index element={<About />} />
      <Route path="contact" index element={<Contact />} />
      <Route path="portfolio" index element={<Portfolio />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
