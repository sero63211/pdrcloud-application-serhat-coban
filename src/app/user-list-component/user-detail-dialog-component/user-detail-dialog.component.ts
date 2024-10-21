import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { User } from '../../mock-data/users';

@Component({
  selector: 'app-user-detail-dialog',
  standalone: true,
  templateUrl: './user-detail-dialog.component.html',
  styleUrls: ['./user-detail-dialog.component.css'],
  imports: [CommonModule],
})
export class UserDetailDialogComponent {
  // constructor
  constructor(
    public dialogRef: MatDialogRef<UserDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  // Method to iterate through the user properties (keyof User)
  objectKeys(): (keyof User)[] {
    return Object.keys(this.data) as (keyof User)[]; // Wir casten die Schlüssel zu keyof User
  }

  // Function to convert the keys into user-friendly labels
  keyToLabel(key: keyof User): string {
    const labels: Record<keyof User, string> = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      birthDate: 'Date of Birth',
      phoneNumber: 'Phone Number',
      id: 'ID',
    };
    return labels[key] || key;
  }

  // closes dialog
  closeDialog(): void {
    this.dialogRef.close();
  }
}
