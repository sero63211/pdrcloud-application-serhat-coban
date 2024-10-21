import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-smiley',
  templateUrl: './smiley.component.html',
  styleUrls: ['./smiley.component.css'],
})
export class SmileyComponent {
  hoveredClassName: string | null = null;
  hoveredStyle: string | null = null;
  hoverX: number = 0;
  hoverY: number = 0;

  constructor(public dialogRef: MatDialog) {}

  // each class for display
  styles: { [key: string]: string } = {
    'left-eye':
      'Position: absolute, Width: 12%, Height: 25%, Background-color: brown',
    'right-eye':
      'Position: absolute, Width: 12%, Height: 25%, Background-color: brown',
    mouth:
      'Position: absolute, Width: 40%, Height: 15%, Background-color: brown, Border-radius: 50%',
  };

  //displays styling infos of css class
  showClassInfo(className: string, event: MouseEvent): void {
    this.hoveredClassName = className;
    this.hoveredStyle = this.styles[className];

    const elementRect = (event.target as HTMLElement).getBoundingClientRect();
    this.hoverX = elementRect.right + 10;
    this.hoverY = elementRect.top;
  }
  //class info nulled
  hideClassInfo(): void {
    this.hoveredClassName = null;
    this.hoveredStyle = null;
  }
  //closes dialog
  closeDialog(): void {
    this.dialogRef.closeAll();
  }
}
