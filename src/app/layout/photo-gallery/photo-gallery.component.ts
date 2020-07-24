import { Component, OnInit } from '@angular/core';
// import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];


  constructor() { }

  ngOnInit(): void {

  //   this.galleryOptions = [
  //     {
  //       width: '600px',
  //       height: '400px',
  //       thumbnailsColumns: 4,
  //       imageAnimation: NgxGalleryAnimation.Slide
  //     },
  //     // max-width 800
  //     {
  //       breakpoint: 800,
  //       width: '100%',
  //       height: '600px',
  //       imagePercent: 80,
  //       thumbnailsPercent: 20,
  //       thumbnailsMargin: 20,
  //       thumbnailMargin: 20
  //     },
  //     // max-width 400
  //     {
  //       breakpoint: 400,
  //       preview: false
  //     }
  //   ];

  //   this.galleryImages = [
  //     {
  //       small: '/assets/images/vendors/1.jpeg',
  //       medium: '/assets/images/vendors/1.jpeg',
  //       big: '/assets/images/vendors/1.jpeg'
  //     },
  //     {
  //       small: '/assets/images/vendors/2.jpeg',
  //       medium: '/assets/images/vendors/2.jpeg',
  //       big: '/assets/images/vendors/2.jpeg'
  //     },
  //     {
  //       small: '/assets/images/vendors/3.jpeg',
  //       medium: '/assets/images/vendors/3.jpeg',
  //       big: '/assets/images/vendors/3.jpeg'
  //     }
  //   ];
  // }
}

}
 

