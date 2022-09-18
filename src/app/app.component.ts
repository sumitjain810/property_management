import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'description', 'size', 'action'];

  title = 'frontend';
  propertiesList: Array<any> = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.initialization();
  }

  initialization = () => {
    this.propertiesList = [
      {
        name: 'VTP',
        description: 'Located in Baner',
        size: '900 sqft',
      },
      {
        name: 'panchsheel',
        description: 'Located in Kharadi',
        size: '1200 sqft',
      },
      {
        name: 'Godrej',
        description: 'Located in Kothrud',
        size: '750 sqft',
      },
    ];
  };

  delete = (element: any) => {
    console.log('element: ', element);

    const index = this.propertiesList.indexOf(element);
    console.log('Index: ', index);

    if (index !== -1) {
      this.propertiesList.splice(index, 1);
      this.propertiesList = [...this.propertiesList];
      console.log('updated propertiesList: ', this.propertiesList);
    }
  };

  add = () => {
    // show modal
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result:', result);

      this.propertiesList.push(result)
      this.propertiesList = [...this.propertiesList];

    });
  };
}
