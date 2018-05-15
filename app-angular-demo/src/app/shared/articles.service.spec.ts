import { TestBed, inject } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('ArticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesService],
      imports:[HttpClientTestingModule]
    });
  });

  it('should be created', inject([ArticlesService], (service: ArticlesService) => {
    expect(service).toBeTruthy();
  }));

  it('getList should return the data list',()=>{
    //Arrange
    let expectedList=[];

    let service = TestBed.get(ArticlesService);
    let http= TestBed.get(HttpTestingController);
    //Act
    service.getAll().subscribe((datalist)=>{
      expect(datalist).toEqual(expectedList);
    });
    //Assert
    const req= http.expectOne('http://localhost:3000/articles?_sort=votes&_order=desc');
    expect(req.request.method).toBe("GET");
    req.flush(expectedList);
  });

  it('editArticle should update',async()=>{
    //Arrange
    this.service = TestBed.get(ArticlesService);
    this.httpMock= TestBed.get(HttpTestingController);
  
    // //Act
    this.service.editArticleRemote(1 , 'articleUpdated', 'https://article.com/updated').subscribe((res: any) => {
      expect(res.title).toContain('testtestUpdated');
      expect(res.link).toContain('https://testtest.com/updated');
    });
    //Assert
     const req= this.httpMock.expectOne('http://localhost:3000/articles/1');
     expect(req.request.method).toBe('PATCH');
     this.httpMock.verify();
  });

});
