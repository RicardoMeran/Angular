import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  public nombre: string = ' ';
  public bio: string = ' ';

  constructor() { }

  ngOnInit() {
  }

}
