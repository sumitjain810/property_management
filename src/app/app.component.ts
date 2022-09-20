import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from './services/api-service.service';

import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'description', 'size', 'action'];
  propertiesList: any[] = [];

  constructor(public dialog: MatDialog, private api: ApiServiceService) {}

  ngOnInit() {
    this.initialization();
  }

  initialization = async () => {
    this.api.getProperties().subscribe((response: any) => {
      console.log('Response: ', response);
      this.propertiesList = response['message']['records'];
    });
  };

  delete = (element: any) => {
    console.log('element: ', element);

    const index = this.propertiesList.indexOf(element);
    console.log('Index: ', index);

    if (index !== -1) {
      this.api.deleteProperty({id: element.id}).subscribe((response: any) => {
        console.log('Response: ', response);
        this.propertiesList.splice(index, 1);
        this.propertiesList = [...this.propertiesList];
        console.log('updated propertiesList: ', this.propertiesList);
      });
    }
  };

  add = () => {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result:', result);
      if(result.name && result.description && result.size){
        this.api.saveProperty({ fields: result }).subscribe((response: any) => {
          console.log('Response: ', response);
          this.propertiesList.push(response.message.fields);
          this.propertiesList = [...this.propertiesList];
        });  
      }
      else{
        alert("Please fillup all the details...")
      }
    });
  };
}
