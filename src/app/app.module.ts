import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Tree, TreeNode, TreeModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { JsonToTreePipe } from './json-to-tree.pipe';


@NgModule({
  declarations: [
    AppComponent,
    JsonToTreePipe
  ],
  imports: [
    BrowserModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
