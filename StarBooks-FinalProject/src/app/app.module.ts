import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggingComponent } from './logging/logging.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LobbyComponent } from './lobby/lobby.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggingComponent,
    LobbyComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component: LobbyComponent},
      {path:'logging', component: LoggingComponent},
      {path:'books', component: BooksComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
