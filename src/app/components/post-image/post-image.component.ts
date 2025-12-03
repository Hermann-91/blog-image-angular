import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-post-image',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-image.component.html',
  styleUrl: './post-image.component.scss'
})
export class PostImageComponent {
  @Output() imagePosted = new EventEmitter<Image>();

  showModal = false;
  formData = {
    title: '',
    imageUrl: '',
    category: 'Natureza'
  };

  categories = ['Natureza', 'Animais', 'Pessoas', 'Tecnologia', 'Alimentos', 'Viagens'];

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.resetForm();
  }

  resetForm(): void {
    this.formData = {
      title: '',
      imageUrl: '',
      category: 'Natureza'
    };
  }

  submitForm(): void {
    if (this.formData.title.trim() && this.formData.imageUrl.trim()) {
      const newImage: Image = {
        id: Date.now().toString(),
        title: this.formData.title,
        imageUrl: this.formData.imageUrl,
        category: this.formData.category,
        likes: 0,
        comments: [],
        postedBy: 'Você',
        postedAt: new Date()
      };
      this.imagePosted.emit(newImage);
      this.closeModal();
    }
  }

  // Fecha modal ao clicar fora do conteúdo
  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
