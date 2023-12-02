import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { FullQuoteProps } from '../../types';

interface FullQuoteListProps {
  fullQuotes: FullQuoteProps[];
}

const FullQuoteList: React.FC<FullQuoteListProps> = ({ fullQuotes }) => {
  const [quotes, setQuotes] = useState<FullQuoteProps[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotesData = await Promise.all(
        fullQuotes.map(async (id) => {
          const response = await axiosApi.get(`quotes/${id}.json`);
          return response.data;
        })
      );

      setQuotes(quotesData);
    };

    fetchQuotes();
  }, [fullQuotes]);

  return (
    <>
      {quotes.map((quote) => (
        <Card key={quote.id} body>
          <CardText>{quote.quote}</CardText>
          <CardTitle>{quote.author}</CardTitle>

          <p className="lead float-right">
            <NavLink to={`/quotes/${quote.id}/edit`}>
              <Button color="primary">Edit Post</Button>
            </NavLink>
            <NavLink to={`/quotes/${quote.id}/edit`}>
              <Button color="danger">Delete Post</Button>
            </NavLink>
          </p>
        </Card>
      ))}
    </>
  );
};

export default FullQuoteList;