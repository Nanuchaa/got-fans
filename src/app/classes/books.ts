import { Characters } from "./characters";

export class Books {
    
    id: number = 0;
    url: string = "";
    name: string = "";
    isbn: string = "";
    authors: [] = [];
    numberOfPages: number = 0;
    publisher: string = "";
    country: string = "";
    mediaType: string = "";
    released: string = "";
    characters: Characters[] = [];
    povCharacters: Characters[] = [];
}