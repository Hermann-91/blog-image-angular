import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Image, Comment } from '../../models/image.model';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent {
  @Input() image!: Image;
  @Output() likeClicked = new EventEmitter<string>();
  @Output() commentAdded = new EventEmitter<{ imageId: string; comment: Comment }>();

  newComment = '';
  showComments = false;

  toggleComments(): void {
    this.showComments = !this.showComments;
  }

  onLike(): void {
    this.likeClicked.emit(this.image.id);
  }

  addComment(): void {
    if (this.newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: 'Você',
        text: this.newComment,
        postedAt: new Date()
      };
      this.commentAdded.emit({ imageId: this.image.id, comment });
      this.newComment = '';
    }
  }
}
