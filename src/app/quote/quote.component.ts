import { Component } from '@angular/core';
import { QuoteService } from '../quote-service.service';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {

  quote: Quote;

  constructor(private quoteService: QuoteService)
  {
    this.quote = new Quote(-1, 'this quote', 'component constructor', 'none'); 

    this.quote = this.quoteService.GetQuote(1);
  }

  NextQuote()
  {
    var currentQuoteId = this.quote != undefined ? this.quote.id : 0;
        
    this.quote = this.quoteService.GetNextQuote(currentQuoteId);    
  }
}
