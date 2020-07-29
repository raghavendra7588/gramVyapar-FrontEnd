import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToLegalPage(){

    // this.dialog.open(ContentLegalComponent, {
    //   height: '600px',
    //   width: '800px',
    // });
    this.router.navigate(['/legal']);
   
  }

}
