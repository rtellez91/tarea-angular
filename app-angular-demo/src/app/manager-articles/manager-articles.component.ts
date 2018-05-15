import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticleFilterParam } from '../_models/shared.model';

@Component({
  selector: 'app-manager-articles',
  templateUrl: './manager-articles.component.html',
  styleUrls: ['./manager-articles.component.scss']
})
export class ManagerArticlesComponent implements OnInit {
  filters: IArticleFilterParam = {
    sortBy: "",
    searchText: "",
    pageNumber: undefined,
    pageSize: undefined
  }
    
  constructor() { }

  ngOnInit() {
  }
}
