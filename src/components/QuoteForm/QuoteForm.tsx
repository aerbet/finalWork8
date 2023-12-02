import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { CATEGORIES } from '../../Categories';
import { QuotesForm } from "../../types";

interface Props {
  quoteForm: QuotesForm;
}

const QuoteForm: React.FC<Props> = ({ quoteForm }) => {
  const [state, setState] = useState({
    category: Object.keys(CATEGORIES)[0],
    author: '',
    quote: '',
  });

  const valueChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    quoteForm.submit({ ...state });
  };

  useEffect(() => {
    if (quoteForm.data) {
      setState((prev) => ({ ...prev, author: quoteForm.data.author, quote: quoteForm.data.quote }));
    }
  }, [quoteForm.data]);

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label for="category">Category</Label>
        <Input
          type="select"
          name="category"
          id="category"
          value={state.category}
          onChange={valueChanged}
        >
          {Object.keys(CATEGORIES).map((categoryId) => (
            <option value={categoryId} key={categoryId}>
              {CATEGORIES[categoryId]}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="author">Author</Label>
        <Input
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          value={state.author}
          onChange={valueChanged}
        />
      </FormGroup>
      <FormGroup>
        <Label for="quote">Quote</Label>
        <Input
          type="textarea"
          name="quote"
          id="quote"
          placeholder="Quote"
          style={{ height: '300px' }}
          value={state.quote}
          onChange={valueChanged}
        />
      </FormGroup>
      <Button>{quoteForm.data ? 'Update Quote' : 'Add Quote'}</Button>
    </Form>
  );
};

export default QuoteForm;