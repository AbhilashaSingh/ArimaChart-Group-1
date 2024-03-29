import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  blnShow :boolean = true;
  constructor(public dialog: MatDialog, public uploadService: UploadService) { }

  public openUploadDialog() {
    this.blnShow = !this.blnShow;
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }
}
