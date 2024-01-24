import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { AddquoteComponent } from './addquote/addquote.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { RouterLinkActive } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterLinkActive, PageNotFoundComponent,
    QuoteComponent, AddquoteComponent, QuoteListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '100_FrontEnd';
}
