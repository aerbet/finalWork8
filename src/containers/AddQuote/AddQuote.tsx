import React from 'react';
import QuoteForm from '../../components/QuoteForm/QuoteForm';

const AddQuote: React.FC = () => {
  const categories = ['Star Wars', 'Famous people', 'Saying', 'Humour', 'Motivational'];
  const authors = ['Yoda', 'Arnold', 'Beethoven', 'Jim', 'Steven'];

  return (
    <div>
      <QuoteForm onSubmit={() => {}} categories={categories} authors={authors} />
    </div>
  );
};

export default AddQuote;