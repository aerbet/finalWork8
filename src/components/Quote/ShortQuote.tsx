import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { ShortQuoteProps } from '../../types';

interface Props {
  quotes: ShortQuoteProps[];
}

const ShortQuote: React.FC<Props> = ({ quotes }) => {
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

export default ShortQuote;