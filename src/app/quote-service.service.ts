import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { QUOTES } from './mock-quotes';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  _quotes: Quote[] = QUOTES;

  constructor() 
  {
    if(this._quotes.length<=1){}   
    
  }

  GetQuote(quoteId: number)
  {
    let quote: Quote | undefined = this._quotes.find(q => q.id == quoteId);
    if(quote == undefined)
    {
      quote = new Quote(); 
    }
    return quote;
  }

  GetNextQuote(qNumber: number)
  {
    var nextQuote = new Quote(qNumber);
    while(nextQuote.id == qNumber)
    {
      var index = Math.floor(Math.random() * this._quotes.length);
      nextQuote = this._quotes[index];
    }

    return nextQuote;
  }

  AddQuote(newQuote: Quote)
  {
    var countBefore = this._quotes.length;
    this._quotes.push(newQuote);
    console.info(countBefore + '/' + this._quotes.length + ' - Quote added:' + newQuote.text);
  }
}
