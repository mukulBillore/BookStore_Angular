import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Injecting the router's dependency to constructor 
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  // route to login
  gotohome(){
    this.route.navigate(["login"])
  }

}
