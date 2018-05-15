export class Article {
    id: number;
    title: string;
    link: string;
    votes: number;
  
    constructor(title: string, link: string, votes?: number, id?: number) {
      this.title = title;
      this.link = link;
      this.votes = votes || 0;
      this.id = id;
    }    
  }
  