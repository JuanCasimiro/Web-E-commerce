import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EcommerceStore from "./components/EcommerceStore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EcommerceStore />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
