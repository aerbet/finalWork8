import React, { useState, useEffect } from 'react';
import axiosApi from '../../axiosApi';
import ShortQuote from '../../components/Quote/ShortQuote';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../../Categories';

const AllQuotes: React.FC = () => {
  const [quotes, setQuotes] = useState<any[]>([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        let url = 'quotes.json';

        if (category) {
          const categoryId = CATEGORIES.find((cat) => cat.id === category)?.title;
          url += `?orderBy="category"&equalTo="${categoryId}"`;
        }

        const response = await axiosApi.get(url);
        const quotesData = Object.keys(response.data).map((key) => ({ id: key, ...response.data[key] }));
        setQuotes(quotesData);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, [category]);

  const handleDelete = async (quoteId: string) => {
    try {
      await axiosApi.delete(`quotes/${quoteId}.json`);
      setQuotes((prevQuotes) => prevQuotes.filter((quote) => quote.id !== quoteId));
    } catch (error) {
      console.error('Error deleting quote:', error);
    }
  };

  const handleEdit = async (quoteId: string, newText: string, newAuthor: string) => {
    try {
      await axiosApi.patch(`quotes/${quoteId}.json`, { text: newText, author: newAuthor });
      setQuotes((prevQuotes) =>
        prevQuotes.map((quote) =>
          quote.id === quoteId ? { ...quote, text: newText, author: newAuthor } : quote
        )
      );
    } catch (error) {
      console.error('Error editing quote:', error);
    }
  };

  return (
    <div>
      <h2>{category ? `Quotes - ${CATEGORIES.find((cat) => cat.id === category)?.title}` : 'All Quotes'}</h2>
      {quotes.map((quote) => (
        <ShortQuote
          id={quote.id}
          key={quote.id}
          text={quote.text}
          author={quote.author}
          onDelete={() => handleDelete(quote.id)}
          onEdit={(newText, newAuthor) => handleEdit(quote.id, newText, newAuthor)}
        />
      ))}
      <Link to="/add" className="btn btn-primary mt-3">
        Add New Quote
      </Link>
    </div>
  );
};

export default AllQuotes;