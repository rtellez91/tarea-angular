import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../shared/articles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../_models/article.model';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  title = 'app works!';
  @Input() article : Article;
  constructor(private articleService:ArticlesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getArticle();
  }

  getArticle() : void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.get(id).subscribe(article => this.article = article);
  }

  edit(): boolean {
    //this.articleService.addArticle(title,link);
    this.articleService.edit(this.article)
      .subscribe(result => {
        //this.articles=result;
        this.router.navigate(['/list']);
      });
    
    return false;
  }

}
