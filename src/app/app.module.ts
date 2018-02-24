import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Tree, TreeNode, TreeModule, ButtonModule } from 'primeng/primeng';
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
    TreeModule,
    ButtonModule,
    PrettyJsonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
