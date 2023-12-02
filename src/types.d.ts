export interface ShortQuoteProps {
  id: string;
  quote: string;
  author: string;
}

export interface FullQuoteProps {
  id: string;
  category: string;
  quote: string;
  author: string;
}

export interface QuotesForm {
  data: string;
  submit: boolean;
  quote: string;
  author: string;
}

export interface AllQuotes {
  id: string;
  category: string;
  quote: string;
  author: string;
}