import { Injectable } from '@angular/core';
import { Document, Paragraph, TextRun, AlignmentType, HeadingLevel, Table, TableRow, TableCell, WidthType } from "docx";
@Injectable({
    providedIn: "root"
})
export class DocumentService {
    public create(jsonData): Document {
        const document = new Document({
            description: "Showing the basketball players who scored the most in the NBA",
            title: "NBA Top Scorers"
        });
        const title = new Paragraph({
            text: "NBA Players: Leading Scorers",
            alignment: AlignmentType.CENTER,
            heading: HeadingLevel.TITLE
        });
        const keys = Object.keys(jsonData[0]); //grab an object keys
        const rows = this.getTableRows(jsonData,keys);
        const table = new Table({
            rows: rows,
            width: {
                size: 100,
                type: WidthType.PERCENTAGE,
            },
        });
        document.addSection({
            children: [title, table]
        });
        return document;
    }
    getTableRows(jsonData,keys){
        let cells = [];
        let rows = [];
        jsonData.forEach(data=>{            
            keys.forEach(key=>{
                cells.push(
                    new TableCell({
                        children: [new Paragraph(data[key]+"")]
                    })
                )
            })            
            rows.push(
                new TableRow({
                    children: cells
                }))
                cells = []; //reset cell array
        })
        return rows;
    }
}