import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  public emailControl: FormControl = new FormControl();
  public passwordControl: FormControl = new FormControl();
  public form: FormGroup = new FormGroup({
    'emailControl':this.emailControl,
    'passwordControl':this.passwordControl });

  constructor() { 

  }

  ngOnInit() {
  }

}
