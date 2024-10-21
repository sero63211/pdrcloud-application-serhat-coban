import { UserDetailDialogComponent } from './user-list-component/user-detail-dialog-component/user-detail-dialog.component';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserListComponentComponent } from './user-list-component/user-list.component';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomepageComponent,
    UserListComponentComponent,
    UserDetailDialogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
