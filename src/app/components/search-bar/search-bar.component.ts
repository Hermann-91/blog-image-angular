import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() searchSubmitted = new EventEmitter<string>();

  searchQuery = '';

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.searchSubmitted.emit(this.searchQuery);
    }
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.searchSubmitted.emit('');
  }
}
