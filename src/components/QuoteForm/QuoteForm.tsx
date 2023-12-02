import React, { useState } from 'react';
import axiosApi from '../../axiosApi';
import { CATEGORIES } from '../../Categories';

interface QuoteFormProps {
  onSubmit: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axiosApi.post('quotes.json', { text, author, category });
      console.log('Quote added:', response.data);
      onSubmit();
      setText('');
      setAuthor('');
      setCategory('');
    } catch (error) {
      console.error('Error adding quote:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <label htmlFor="quoteText" className="form-label">
          Цитата:
        </label>
        <input
          type="text"
          className="form-control"
          id="quoteText"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="quoteAuthor" className="form-label">
          Автор:
        </label>
        <input
          type="text"
          className="form-control"
          id="quoteAuthor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="quoteCategory" className="form-label">
          Категория:
        </label>
        <select
          className="form-select"
          id="quoteCategory"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            Выберите категорию
          </option>
          {CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.title}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Добавить цитату
      </button>
    </form>
  );
};

export default QuoteForm;