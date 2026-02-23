import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Image } from '../interfaces/image-interface';

@Component({
  selector: 'app-image-item',
  imports: [],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageItem {
  image = input.required<Image>()
  isFeatured = input<boolean>(false);

  deleteImage = output <string>();
  onDeleteClick = (event: Event) => {
    event.stopPropagation()
    this.deleteImage.emit(this.image().id);
  }
}
