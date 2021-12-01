import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { SearchComponent } from './components/search/search.component';
import { GifsComponent } from './components/gifs/gifs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    SearchComponent,
    GifsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
