import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TreeModule, ButtonModule, SidebarModule } from 'primeng/primeng';
import { PrettyJsonModule } from 'angular2-prettyjson';

import { AppComponent } from './app.component';
import { JsonToTreePipe } from './json-to-tree.pipe';



@NgModule({
  declarations: [
    AppComponent,
    JsonToTreePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeModule,
    ButtonModule,
    SidebarModule,
    PrettyJsonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
