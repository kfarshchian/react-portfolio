import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './compnents/Layout';
import Home from './compnents/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
