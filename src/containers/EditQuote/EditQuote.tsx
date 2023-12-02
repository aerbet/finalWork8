import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosApi from '../../axiosApi';

const EditQuote: React.FC = () => {
  const [text, setText] = useState('');
  const { quoteId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axiosApi.get(`quotes/${quoteId}.json`);
        setText(response.data.text);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, [quoteId]);

  const handleUpdate = async () => {
    try {
      await axiosApi.put(`quotes/${quoteId}.json`, { text });
      navigate('/all');
    } catch (error) {
      console.error('Error updating quote:', error);
    }
  };

  return (
    <div>
      <label>Text:</label>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleUpdate}>Update Quote</button>
    </div>
  );
};

export default EditQuote;