import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-typescript-exercise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typescript-exercise.component.html',
  styleUrls: ['./typescript-exercise.component.css'],
})
export class TypescriptExerciseComponent implements OnInit {
  // Task 1 - Functions & Typing
  width: number = 5;
  height: number = 10;
  area: number = 0;
  showTaskCode: string | null = null;

  codeForTask1: string = '';
  codeForTask2: string = '';
  codeForTask3: string = '';

  constructor(public dialogRef: MatDialog) {}

  ngOnInit(): void {
    this.area = this.calculateArea(this.width, this.height);

    // Code for Task 1
    this.codeForTask1 = `
function calculateArea(width: number, height: number): number {
  return width * height;
}
    `;

    // Code for Task 2
    this.codeForTask2 = `
interface User {
  name: string;
  age: number;
  email?: string;
}

const userArray: User[] = [
  { name: 'Max Mustermann', age: 30, email: 'max.mustermann@gmail.com' },
  { name: 'Jane Smith', age: 39, email: 'jane.smith@example.com' },
  { name: 'James Johnson', age: 36, email: 'james.johnson@example.com' }
];
    `;

    // Code for Task 3
    this.codeForTask3 = `
function reverseArray<T>(arr: T[]): T[] {
  return arr.slice().reverse();
}
    `;
  }
  ngAfterViewChecked(): void {
    Prism.highlightAll();
  }

  // Task 2 - Interfaces and Objects
  userArray = [
    { name: 'Max Mustermann', age: 30, email: 'max.mustermann@gmail.com' },
    { name: 'Jane Smith', age: 39, email: 'jane.smith@example.com' },
    { name: 'James Johnson', age: 36, email: 'james.johnson@example.com' },
  ];

  toggleCodeDisplay(task: string): void {
    this.showTaskCode = this.showTaskCode === task ? null : task;
  }

  // Task 3 - Generics
  numberArray: number[] = [1, 2, 3, 4, 5];
  reversedNumberArray: number[] = this.reverseArray(this.numberArray);

  stringArray: string[] = ['a', 'b', 'c', 'd'];
  reversedStringArray: string[] = this.reverseArray(this.stringArray);

  // Task 1 - Function to calculate area
  calculateArea(width: number, height: number): number {
    return width * height;
  }

  // Task 3 - Generic function to reverse an array
  reverseArray<T>(arr: T[]): T[] {
    return arr.slice().reverse();
  }
  //closes dialog
  closeDialog(): void {
    this.dialogRef.closeAll();
  }
}
