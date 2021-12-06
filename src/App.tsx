import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import CekOngkir from 'pages/CekOngkir';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cek-ongkir" element={<CekOngkir />} />
    </Routes>
  );
};

export default App;
