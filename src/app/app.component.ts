import { Component } from '@angular/core';
// import { JsonPipe } from '@angular/common';
import { JsonToTreePipe } from './json-to-tree.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tree = false;
  json: any = 
    {
      "key": "value",
      "array": ["array item 1", "array item 2", "array item 3"],
      "object": {
          "nested key 1": "nested value 1",
          "nested key 2": "nested key 2",
          "nested key 3": "nested key 3"
      },
      "object array":  [
        {"object array key 1": "object array value 1"},
        {"object array key 2": "object array value 2"},
        {"object array key 3": "object array value 3"},
        {"nested array in object array": ["nested array item 1", "nested array item 2", "nested array item 3"]}
      ]
    }
}

