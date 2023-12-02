import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './components/Header/Header';
import './App.css';
import FullQuote from './components/Quote/FullQuote';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route path="/quotes/:id" element={<FullQuote />} />
          <Route path="/quotes/:id/:category/:author/:quote" element={<FullQuote />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<FullQuote />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;