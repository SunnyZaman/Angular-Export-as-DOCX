import { Component } from '@angular/core';
import * as jsonData from "src/assets/data";
import { Packer } from "docx";
import { DocumentService } from './services/document.service';
import { saveAs } from "file-saver";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'export-as-docx';
  data = [];
  constructor(
    private documentService: DocumentService
  ){
  this.data = jsonData.default.Data;
  }
  export(){
    console.log("Exporting...");
    console.log("data: ", this.data);
    const doc = this.documentService.create(this.data);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }
}
