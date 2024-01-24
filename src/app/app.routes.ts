import { Routes } from '@angular/router';
import { AddquoteComponent } from './addquote/addquote.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'add-quote', component: AddquoteComponent },
    {path: 'quote-list', component: QuoteListComponent },
    {path: 'show-quote', component: QuoteComponent },
    {path: '', redirectTo: '/show-quote', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
