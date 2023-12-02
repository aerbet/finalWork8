import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AddQuote from './containers/AddQuote/AddQuote';
import AllQuotes from './containers/AllQuotes/AllQuotes';
import EditQuote from './containers/EditQuote/EditQuote';

import './App.css';

const CATEGORIES = {
  'Star Wars': 'Звездные войны',
  'Famous people': 'Известные личности',
  'Saying': 'Высказывания',
  'Humor': 'Юмор',
  'Motivational': 'Мотивационные',
};

const App: React.FC = () => {
  return (
    <div className="app">
      <Header categories={CATEGORIES} />
      <Routes>
        <Route path="/add" element={<AddQuote />} />
        <Route path="/all" element={<AllQuotes />} />
        <Route path="/edit/:quoteId" element={<EditQuote />} />
      </Routes>
    </div>
  );
}

export default App;