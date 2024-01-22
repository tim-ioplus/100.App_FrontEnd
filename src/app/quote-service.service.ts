import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  _localStorage : LocalStorageService;
  _hydrated : boolean;

  constructor(private localStorageService : LocalStorageService) 
  {
    this._localStorage = localStorageService;
    this._hydrated = this._localStorage.HydrateStorage();    
  }

  GetQuote(quoteId: number)
  {
    let quote: Quote | undefined = this._localStorage.Read(quoteId)

    if(quote == undefined)
    {
      quote = new Quote()
    }
    return quote
  }

  GetNextQuote(currentQuoteId: number)
  {
    var nextQuote = new Quote(currentQuoteId);

    while(nextQuote.id == currentQuoteId)
    {
      var nextId = Math.floor(Math.random() * this._localStorage.length());
      var _next = this._localStorage.Read(nextId);
      
      if(_next != undefined)
      {
        nextQuote = _next;
      }
    }

    return nextQuote;
  }

  AddQuote(newQuote: Quote)
  {
    var countBefore = this._localStorage.length();
    this._localStorage.Create(newQuote);
    console.info(countBefore + '/' + this._localStorage.length() + ' - Quote added:' + newQuote.text);
  }
}
