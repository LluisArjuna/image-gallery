import { Component, signal } from '@angular/core';
import { ImageItem } from '../image-item/image-item';
import { Image } from '../interfaces/image-interface';

import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDropList, CdkDropListGroup, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-gallery',
  imports: [CommonModule, ImageItem, CdkDrag, CdkDropList, CdkDropListGroup],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  imageGallery = signal<Image[]>([
    {
      id: '1',
      src: 'https://picsum.photos/id/237/200/300',
      alt: "Image of a black dog's face."
    },
    {
      id: '2',
      src: 'https://picsum.photos/id/238/200/300',
      alt: 'Image of the skyline of New York.'
    },
    {
      id: '3',
      src: 'https://picsum.photos/id/239/200/300',
      alt: 'Image of a hand holding a Dandelion.'
    },{
      id: '4',
      src: 'https://picsum.photos/id/237/200/300',
      alt: "Image of a black dog's face."
    },
    {
      id: '5',
      src: 'https://picsum.photos/id/238/200/300',
      alt: 'Image of the skyline of New York.'
    },
    {
      id: '6',
      src: 'https://picsum.photos/id/239/200/300',
      alt: 'Image of a hand holding a Dandelion.'
    },{
      id: '7',
      src: 'https://picsum.photos/id/237/200/300',
      alt: "Image of a black dog's face."
    },
    {
      id: '8',
      src: 'https://picsum.photos/id/238/200/300',
      alt: 'Image of the skyline of New York.'
    },
    {
      id: '9',
      src: 'https://picsum.photos/id/239/200/300',
      alt: 'Image of a hand holding a Dandelion.'}
    ]);
    featuredImageId = signal<string>(this.imageGallery()[0]?.id || '');

    removeImage(id: string){
      window.confirm("Estàs segur que vols eliminar aquesta imatge?");
      this.imageGallery.update(images => images.filter(image => image.id !== id));
    }
}
