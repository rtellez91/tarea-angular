import { Component, OnInit, HostBinding, Input, ChangeDetectorRef } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor(private articleService : ArticlesService, private router: Router) {
    // article is populated by the Input now,
    // so we don't need anything here
  }

  voteUp(votes): boolean {
    let currentVotes= +votes;
    currentVotes += 1;
    this.article.votes=currentVotes;
    return false;
  }

  voteDown(votes): boolean {
    let currentVotes= +votes;
    currentVotes -= 1;
    this.article.votes=currentVotes;
    return false;
  }
  // domain() is a utility function that extracts
    // the domain from a URL, which we'll explain shortly
    domain(link): string {
      try {
        // e.g. http://foo.com/path/to/bar
        const domainAndPath: string = link.split('//')[1];
        // e.g. foo.com/path/to/bar
        return domainAndPath.split('/')[0];
      } catch (err) {
        return null;
      }
    }

  ngOnInit() {
  }

  edit(){
    this.router.navigate(['/list/edit', this.article.id]);
  }

  delete(){
    this.articleService.deleteArticle(this.article.id).subscribe(result => {
      this.router.navigate(['/list']);
    });
  }
}
