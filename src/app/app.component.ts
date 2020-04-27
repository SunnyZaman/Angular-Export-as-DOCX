import { Component } from '@angular/core';
import * as jsonData from "src/assets/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'export-as-docx';
  data = [];
  constructor(){
  this.data = jsonData.default.Data;
  }
  export(){
    console.log("Exporting...");
    console.log("data: ", this.data);
    
  }
}
