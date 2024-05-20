// No es necesario importar React aquí
import Layout from "../Pages/Layout";
import Information from "../Pages/Information";
import Price from "../Pages/Price";
import Components from "../Pages/Components";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MyRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Price" element={<Price />} />
          <Route path="/Components" element={<Components />} />

        </Routes>
      </Router>
    );
  }
export default MyRouter;
