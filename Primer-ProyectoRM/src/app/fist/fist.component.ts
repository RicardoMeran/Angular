import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fist',
  templateUrl: './fist.component.html',
  styleUrls: ['./fist.component.css']
})
export class FistComponent implements OnInit {
  public nombre: string = 'Ricardo Meran';
  public bio: string = 'Coming soon Front End Angular';
  
  constructor() { }

  ngOnInit() {
  }

}
