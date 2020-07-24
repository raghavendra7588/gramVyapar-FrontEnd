import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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


}
