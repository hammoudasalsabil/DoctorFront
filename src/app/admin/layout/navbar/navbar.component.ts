import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  nbrAlert:number=1;
  Notification:boolean = false;

  constructor() { }

  ngOnInit(): void {
    
    this.clickEventNotification();
  }
  clickEventNotification(){
    this.Notification = !this.Notification;
    

  }
}
