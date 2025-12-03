import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { PostImageComponent } from './components/post-image/post-image.component';
import { ImageService } from './services/image.service';
import { Image, Category, Comment } from './models/image.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
    SearchBarComponent,
    ImageCardComponent,
    PostImageComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  images: Image[] = [];
  filteredImages: Image[] = [];
  categories: Category[] = [];
  menuExpanded = false;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe(images => {
      this.images = images;
      this.filteredImages = images;
    });

    this.imageService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  toggleMenu(): void {
    this.menuExpanded = !this.menuExpanded;
  }

  onCategorySelected(category: string): void {
    this.imageService.getImagesByCategory(category).subscribe(images => {
      this.filteredImages = images;
      this.menuExpanded = false;
    });
  }

  onSearch(query: string): void {
    if (!query) {
      this.filteredImages = this.images;
      return;
    }
    this.imageService.searchImages(query).subscribe(images => {
      this.filteredImages = images;
    });
  }

  onShowAllImages(): void {
    this.filteredImages = this.images;
    this.menuExpanded = false;
  }

  onImagePosted(image: Image): void {
    this.imageService.addImage(image);
    this.filteredImages = this.images;
  }

  onLike(imageId: string): void {
    this.imageService.likeImage(imageId);
  }

  onCommentAdded(event: { imageId: string; comment: Comment }): void {
    this.imageService.addComment(event.imageId, event.comment);
  }
}
