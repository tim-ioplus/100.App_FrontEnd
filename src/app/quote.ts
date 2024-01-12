export class Quote 
{
    id: any | number;
    text: any | string;
    author: any | string;
    image: any | string;

    constructor(number?: number, text?: string, author?: string, image?: string) 
    {
        this.id = number;
        this.text = text;
        this.author = author;
        this.image = image;
    }
}
