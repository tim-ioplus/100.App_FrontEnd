import { Injectable } from "@angular/core";
import { LocalStorageRefService } from "./local-storage-ref.service";
import { Quote } from "./quote";
import { QUOTES } from "./mock-quotes";

@Injectable({ providedIn: 'root' })
export class LocalStorageService 
{

   private _localStorage: Storage;
   private _currentId : number = 0;

   public length() : number
   {
        return this._localStorage.length;
   }

   constructor(private _localStorageRefService: LocalStorageRefService) {
      this._localStorage = _localStorageRefService.localStorage;

      this.HydrateStorage();
   }

    HydrateStorage() 
    {
        QUOTES.forEach(quote => {
            this._localStorage.setItem(quote.id, JSON.stringify(quote));
            this._currentId = quote.id;                
        });

        return this._localStorage.length == QUOTES.length;
    }

    public Create(newQuote: Quote)
    {
        var newId = this._currentId + 1;

        if(this.GetQuote(newId) == null)
        {
            // good, new Id is unused            
        }
        else
        {
            // not good, new Id already used 
            while(this.GetQuote(newId) != null)
            {
                newId++;            
            }
        }        

        newQuote.id = newId;        
        this._localStorage.setItem(newQuote.id, JSON.stringify(newQuote));
        this._currentId = newQuote.id;

        return newQuote.id;
    }

    public Read(quoteId: number): Quote | undefined 
    {
        var quote = this.GetQuote(quoteId);

        return quote;
    }

    public Update(quote: Quote)
    {
        var quoteToUpdate = this.GetQuote(quote.id);

        if(quoteToUpdate != undefined)
        {
            this._localStorage.removeItem(quote.id);
            this._localStorage.setItem(quote.id, JSON.stringify(quote));
        }
    }

    public Delete(quoteId: number) : boolean
    {
        this._localStorage.removeItem(quoteId.toString());

        return this.GetQuote(quoteId) == undefined;
    }

    public List() : Quote[] | undefined
    {
        let quotes : Quote[] = [];
        let i : number = 1;
        while(i <= this._localStorage.length)
        {
            var quote = this.GetQuote(i);
            if(quote != undefined && quote != null)
            {
                quotes.push(quote);
            }

            i++;
        }

        return quotes;
    }

    private GetQuote(quoteId: number) : Quote | undefined
    {
        var item = this._localStorage.getItem(quoteId.toString());
        var quote: Quote =  item != null ? JSON.parse(item) : undefined;

        return quote;
    }

}
