import { Pipe, PipeTransform } from '@angular/core';
import { TreeNode } from 'primeng/primeng';

/* Takes any json object and transforms it to
 * json formatted for use in PrimeNg Tree.
 * Expanded and collapsed icons can be customized with FontAwesome 4 icons.
 * 
 * JSON after formatting looks like this:
 * {"label": "value",
 *  "children": [{"label": "value"}, {"label": "value"}]
 * }
 */

@Pipe({name: 'jsonToTree'})
export class JsonToTreePipe implements PipeTransform {
    transform(json: any): TreeNode[] {

        const isPlainObject = ((obj) => {
          if (!Array.isArray(obj) && obj !== null && typeof (obj) === 'object') {
            return true;
          }
          return false;
        });
    
        const isNil = ((val) => {
          return (val === undefined || val === null || val.length <= 0) ? true : false;
        });
    
        const handleChild = ((array, label) => {
          return array.map((element, index) => {
            return { 'label': label + ' #' + (index + 1), 'children': createTreeNodes(element) };
          });
        });
    
        const handleStringArray = ((stringArray) => {
          return stringArray.map(string => {
            return { 'label': string };
          });
        });
       
    
        const createTreeNodes = ((obj) => {
          const objArray = [];
          if (isPlainObject(obj)) {
            const objectEntries = Object.entries(obj);
            objectEntries.forEach((objectEntry) => {
              if (Array.isArray(objectEntry[1]) && isPlainObject(objectEntry[1][0])) {
                objArray.push({
                  'label': objectEntry[0], 
                  'children': handleChild(objectEntry[1], objectEntry[0])
                });
              } else if (Array.isArray(objectEntry[1]) && Array.isArray(objectEntry[1][0])) {
                objArray.push({ 'label': objectEntry[0], 'children': handleChild(objectEntry[1][0], objectEntry[0]) });
              } else if (Array.isArray(objectEntry[1]) && typeof objectEntry[1][0] !== 'object') {
                objArray.push({ 'label': objectEntry[0], 'children': handleStringArray(objectEntry[1]) });
              } else if (isPlainObject(objectEntry[1])) {
                objArray.push({
                  'label': objectEntry[0],
                  'children': createTreeNodes(objectEntry[1])
                });
              } else {
                objArray.push({ 'label': objectEntry[0] + ' : ' + objectEntry[1]});
              }
            });
          } else if (Array.isArray(obj)) {
            return obj.map((arrayItem) => {
              handleChild(arrayItem, '');
            });
          } else {
            return obj;
          }
          return objArray;
        });
    
    if (isNil(json)) {
        return undefined;
    }
    return createTreeNodes(json);

    }
}

