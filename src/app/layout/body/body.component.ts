import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  someFun() {
    this.router.navigate(['/legal']);
  }

  slides =   [
    {image:'/assets/images/vendors/1.jpeg'},
    {image:'/assets/images/vendors/2.jpeg'},
    {image: '/assets/images/vendors/3.jpeg'},
    {image:'/assets/images/vendors/4.jpg'},
    {image:'/assets/images/vendors/5.jpg'},
    {image:'/assets/images/vendors/6.jpeg'},
    // {image:'/assets/images/vendors/7.jpg'},
    {image:'/assets/images/vendors/8.jpeg'},
    {image:'/assets/images/vendors/9.jpeg'},
    {image:'/assets/images/vendors/10.jpeg'},
    {image:'/assets/images/vendors/11.jpeg'},
    {image:'/assets/images/vendors/12.jpeg'},
    {image:'/assets/images/vendors/13.jpeg'},
    {image:'/assets/images/vendors/14.jpg'},
  ];
}
