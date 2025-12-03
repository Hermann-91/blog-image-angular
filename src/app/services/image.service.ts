import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Image, Category, Comment } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imagesSubject = new BehaviorSubject<Image[]>([
    {
      id: '1',
      title: 'Natureza',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      category: 'Natureza',
      likes: 45,
      comments: [
        { id: '1', author: 'João', text: 'Imagem incrível!', postedAt: new Date() }
      ],
      postedBy: 'Admin',
      postedAt: new Date()
    },
    {
      id: '2',
      title: 'Por do Sol',
      imageUrl: 'https://harus.ind.br/wp-content/uploads/2023/02/5-praias-brasileiras-1024x768.jpg',
      category: 'Natureza',
      likes: 78,
      comments: [
        { id: '2', author: 'Maria', text: 'Que linda!', postedAt: new Date() }
      ],
      postedBy: 'Admin',
      postedAt: new Date()
    },
    {
      id: '3',
      title: 'Outra Estrela',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/03/02/13/05/orange-parrots-8608540_1280.jpg',
      category: 'Animais',
      likes: 92,
      comments: [],
      postedBy: 'Admin',
      postedAt: new Date()
    }
  ]);

  private categoriesSubject = new BehaviorSubject<Category[]>([
    { id: '1', name: 'Natureza' },
    { id: '2', name: 'Animais' },
    { id: '3', name: 'Pessoas' },
    { id: '4', name: 'Tecnologia' },
    { id: '5', name: 'Alimentos' },
    { id: '6', name: 'Viagens' }
  ]);

  images$ = this.imagesSubject.asObservable();
  categories$ = this.categoriesSubject.asObservable();

  constructor() {}

  getImages(): Observable<Image[]> {
    return this.images$;
  }

  getCategories(): Observable<Category[]> {
    return this.categories$;
  }

  getImagesByCategory(category: string): Observable<Image[]> {
    return new Observable(observer => {
      const filtered = this.imagesSubject.value.filter(img => img.category === category);
      observer.next(filtered);
      observer.complete();
    });
  }

  searchImages(query: string): Observable<Image[]> {
    return new Observable(observer => {
      const filtered = this.imagesSubject.value.filter(img =>
        img.title.toLowerCase().includes(query.toLowerCase()) ||
        img.category.toLowerCase().includes(query.toLowerCase())
      );
      observer.next(filtered);
      observer.complete();
    });
  }

  addImage(image: Image): void {
    const current = this.imagesSubject.value;
    this.imagesSubject.next([image, ...current]);
  }

  addComment(imageId: string, comment: Comment): void {
    const current = this.imagesSubject.value;
    const updated = current.map(img =>
      img.id === imageId ? { ...img, comments: [...img.comments, comment] } : img
    );
    this.imagesSubject.next(updated);
  }

  likeImage(imageId: string): void {
    const current = this.imagesSubject.value;
    const updated = current.map(img =>
      img.id === imageId ? { ...img, likes: img.likes + 1 } : img
    );
    this.imagesSubject.next(updated);
  }
}
