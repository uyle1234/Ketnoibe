import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ListTouristComponent } from './component/list-tourist/list-tourist.component';
import { EditTouristComponent } from './component/edit-tourist/edit-tourist.component';
import { CreateComponent } from './component/create/create.component';
@NgModule({
  declarations: [
    AppComponent,
    ListTouristComponent,
    EditTouristComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
