
/* This assignment intializes two variables in ngOnInit and shown in HTML using string interpolation */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  name: string;

  ngOnInit() {
    this.title = 'My OnInit Demo';
    this.name = 'Sudesh';
  }
}

