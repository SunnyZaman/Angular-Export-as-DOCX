import { Injectable } from '@angular/core';
import { Document, Paragraph, TextRun, AlignmentType, HeadingLevel } from "docx";
@Injectable({
    providedIn: "root"
})
export class DocumentService {
    public create(data): Document {
        const document = new Document({
            description: "Showing the basketball players who scored the most in the NBA",
            title: "NBA Top Scorers"
        });
        document.addSection({
            children: [
                new Paragraph({
                    text: "NBA Players: Leading Scorers",
                    alignment: AlignmentType.CENTER,
                    heading: HeadingLevel.TITLE
                }),
            ],
        });
        return document;
    }
}