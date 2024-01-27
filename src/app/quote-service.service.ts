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

  Get(quoteId: number)
  {
    let quote: Quote | undefined = this._localStorage.Read(quoteId)

    if(quote == undefined)
    {
      quote = new Quote()
    }
    return quote
  }

  GetNext(currentQuoteId: number)
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

  Create(newQuote: Quote)
  {
    return this._localStorage.Create(newQuote);
  }

  Delete(quoteId : number) : boolean
  {
    var deleted = this._localStorage.Delete(quoteId);
    return deleted;
  }

  List() : Quote[] | undefined
  {
    return this._localStorage.List();
  }
}
