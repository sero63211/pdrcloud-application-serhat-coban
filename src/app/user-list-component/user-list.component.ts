import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { User, users } from '../mock-data/users';
import { UserDetailDialogComponent } from './user-detail-dialog-component/user-detail-dialog.component';

@Component({
  selector: 'app-user-list-component',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    TitleCasePipe,
  ],
})
export class UserListComponentComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'details'];
  dataSource = new MatTableDataSource<User>(users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialogRef: MatDialog) {}

  ngOnInit() {
    this.dataSource.filterPredicate = (data: User, filter: string) => {
      const name =
        data.firstName.toLowerCase() + ' ' + data.lastName.toLowerCase();
      return name.includes(filter);
    };
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = 10;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(user: User): void {
    this.dialogRef.open(UserDetailDialogComponent, {
      data: user,
    });
  }
}
