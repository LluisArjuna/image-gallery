import { Component, signal } from '@angular/core';
import { ImageItem } from '../image-item/image-item';
import { Image } from '../interfaces/image-interface';

@Component({
  selector: 'app-gallery',
  imports: [ImageItem],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  imageGallery: Image[] = [{
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
    }];
}
