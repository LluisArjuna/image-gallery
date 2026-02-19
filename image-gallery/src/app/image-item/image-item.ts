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
  deleteImage = output <string >(); // Emetrà l'id de la imatge a eliminar
}
