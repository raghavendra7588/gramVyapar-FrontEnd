import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToLogin(){
    this.router.navigate(['http://203.112.144.38/Admin/login']);
  }
}


