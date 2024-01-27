import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteService } from '../quote-service.service';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-list.component.html',
  styleUrl: './quote-list.component.css'
})
export class QuoteListComponent {

  quotes : Quote[] | undefined;
  
  constructor(private quoteService : QuoteService)
  {
    this.quotes = quoteService.List();
  }   

  Delete(quoteToDeleteId: number)
  {
    alert("Delete: " + quoteToDeleteId)
    if(this.quoteService.Delete(quoteToDeleteId))
    {
      alert("Quote {{quoteTodeleteId }} deleted.")
    }
    else
    {
      alert("Quote {{quoteTodeleteId }} not deleted.");
    }
  }

}
