import { Component } from '@angular/core';
import { QuoteService } from '../quote-service.service';
import { Quote } from '../quote';

@Component({
  selector: 'app-addquote',
  standalone: true,
  imports: [],
  templateUrl: './addquote.component.html',
  styleUrl: './addquote.component.css'
})

export class AddquoteComponent {

  constructor(private quoteService: QuoteService)
  {}

  AddQuote(secretTextvalue: string, newQuoteTextValue:string, newQuoteAuthorValue:string, newQuoteImageValue:string) 
  {
    if(secretTextvalue == "mySecret")
    {
      let newQuote = new Quote(1,newQuoteTextValue,newQuoteAuthorValue, newQuoteImageValue);
      let newId = this.quoteService.Create(newQuote);
      alert("New Quote " + newId + " saved.");
    }
    else
    {
      alert("Wrong credentials, quote can not be saved");
    }    
  }
}
