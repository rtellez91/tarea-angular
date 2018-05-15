import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { SortingValues } from '../_models/enumerations';
import { Observable, Subscription } from "rxjs/Rx";
import { select } from '@angular-redux/store';
import { IArticleFilterParam } from '../_models/shared.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit, OnChanges {
  articles: Article[]; // <-- component property
  sortValue: any = "";
  filters: IArticleFilterParam = {
    sortBy: "",
    searchText: "",
    pageNumber: undefined,
    pageSize: undefined
  };
  filterObservable: any;
  @Input() set sortBy(value: string) {
    this.filters.sortBy = value;
  }
  @select(['articleState', 'articles']) articles$: Observable<any>;
  articlesSubscription: Subscription;

  constructor(private articleService: ArticlesService) { }
  
  ngOnInit() {
    //this.articles = this.articleService.articles;
    this.loadList();
  }
  ngOnChanges(): void {
    this.loadList();
  }
  loadList() {
    this.filterObservable = this.articleService.getList(this.filters)
      .subscribe(result => {
        this.articles=result;
        console.log(this.articles);
      }, err => {
        console.log("error log");
      },
        () => {
          console.log("finish log");
        }
      );
  }

}
