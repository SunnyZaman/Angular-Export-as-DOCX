import { Injectable } from '@angular/core';
import { Document } from "docx";
@Injectable({
    providedIn: "root"
  })
export class DocumentService {
    public create(data): Document {
        const document = new Document();

        return document;
    }
}