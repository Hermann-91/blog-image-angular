import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/image.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() categories: Category[] = [];
  @Input() isExpanded = false;
  @Output() categorySelected = new EventEmitter<string>();
  @Output() toggleMenu = new EventEmitter<void>();
  @Output() showAllImages = new EventEmitter<void>();

  selectCategory(categoryName: string): void {
    this.categorySelected.emit(categoryName);
  }

  handleToggleMenu(): void {
    this.toggleMenu.emit();
  }

  handleShowAll(): void {
    this.showAllImages.emit();
  }
}
