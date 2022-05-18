import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import Article from '../article/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articlesBDD: Article[] | undefined;
  articles: Article[] | undefined;

  constructor(private articleService: ArticleService, ) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe({next: (data) => {
      this.articlesBDD = data;
      this.articles = data;
    }});
  }

  /**
   * Delete specific article
   * 
   * @param article 
   */
  deleteArticle(article : Article) {

    const id = article.id;

    this.articleService.delete(id).subscribe({next: () => this.articleService.getArticles().subscribe({next: (data) => {
      this.articlesBDD = data;
      this.articles = data;
    }})});
  }

  /**
   * Get articles
   * 
   * @returns filtered articles
   */
  getArticles(): Article[] | undefined {
    return this.articles;
  }

  /**
   * Search article from title and content
   * 
   * @param event 
   */
  public searchArticles(event: any) {

    const value = event.target.value;

    this.articles = this.articlesBDD;

    this.articles = this.articles?.filter(article => {
      return article.title.includes(event.target.value) ||  article.content.includes(event.target.value)
    })
  }
}
