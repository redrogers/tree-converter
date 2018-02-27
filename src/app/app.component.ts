import { Component } from '@angular/core';
import { JsonToTreePipe } from './json-to-tree.pipe';
import { TreeNode, Tree, Sidebar} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tree = false;
  json: any = 
    {
      "Object": "value",
      "Array": ["array item 1", "array item 2", "array item 3"],
      "Nested Object": {
          "nested key 1": "nested value 1",
          "nested key 2": "nested key 2",
          "nested key 3": "nested key 3"
      },
      "Object Array":  [
        {"object array key 1": "object array value 1"},
        {"object array key 2": "object array value 2"},
        {"object array key 3": "object array value 3"},
        {"Nested Array in Object Array": ["nested array item 1", "nested array item 2", "nested array item 3"]}
      ]
    }
  
    
}

