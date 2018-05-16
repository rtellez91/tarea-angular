import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditComponent } from './article-edit.component';
import { ArticlesService } from '../shared/articles.service';
import { Article } from '../_models/article.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

describe('ArticleEditComponent', () => {
  let component: ArticleEditComponent;
  let fixture: ComponentFixture<ArticleEditComponent>;
  let articleServiceMock = {
    get(){

    },
    edit(){}
  };
  let routerMock = <any> {
      navigate: (urls: String[]) => {},
      url:  {
              split:()=>{
                  return ""
              }
          
      },
      snapshot:{
        queryParams:
        {returnUrl:""}
      }
  }
  let activatedRouteMock={
			queryParams: Observable.of({})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleEditComponent ],
      providers:[
        { provide: ArticlesService, useValue: articleServiceMock },
        { provide: Router, useValue: routerMock },
        { provide:ActivatedRoute, useValue:activatedRouteMock}
      ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
