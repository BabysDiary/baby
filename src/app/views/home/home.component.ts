import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    toggleSize = 0;
    toggleState = true;

  constructor() {}

  ngOnInit() {}

  toggleMenu(){
      this.toggleState = !this.toggleState;
  }
}
