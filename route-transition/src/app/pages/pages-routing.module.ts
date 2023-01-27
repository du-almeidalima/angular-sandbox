import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NewsComponent} from "./news/news.component";
import {AboutComponent} from "./about/about.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {animation: 'isRight'}},
  {path: 'news', component: NewsComponent},
  {path: 'about', component: AboutComponent, data: {animation: 'isLeft'}},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
