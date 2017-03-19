import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleService} from './article.service';
import {ArticlesComponent} from './articles.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'articles', component: ArticlesComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ArticlesComponent],
  providers: [ArticleService]
})
export class ArticleModule {
}