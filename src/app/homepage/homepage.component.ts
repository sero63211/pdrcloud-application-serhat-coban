import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { UserListComponentComponent } from '../user-list-component/user-list.component';
import { SmileyComponent } from '../smiley/smiley.component';
import { TypescriptExerciseComponent } from '../typescript-exercise/typescript-exercise.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatDialogModule, MatTabsModule, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(public dialog: MatDialog) {}

  //opens smileydialog - task 1
  openSmileyDialog(): void {
    this.dialog.open(SmileyComponent, {
      width: '90vw',
      height: '90vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'custom-dialog-container',
    });
  }
  //opens typescriptexercise dialog - task 2
  openTypeScriptExerciseDialog(): void {
    this.dialog.open(TypescriptExerciseComponent, {
      width: '90vw',
      height: '90vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'custom-dialog-container',
    });
  }
  //opens userlistdialog - task 3
  openUserListDialog(): void {
    this.dialog.open(UserListComponentComponent, {
      width: '90vw',
      height: '90vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'custom-dialog-container',
    });
  }
}
