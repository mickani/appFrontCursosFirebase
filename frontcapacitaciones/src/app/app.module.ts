import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CursoComponent } from './components/curso/curso.component';
import { AddCursoComponent } from './components/add-curso.component';
import { FormsModule } from '@angular/forms';
import { EditCursoComponent } from './components/edit-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    AddCursoComponent,
    EditCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
