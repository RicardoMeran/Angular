import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  public emailControl: FormControl = new FormControl('',Validators.email);
  public passwordControl: FormControl = new FormControl('',[Validators.minLength(3),Validators.maxLength(7)]);
  public form: FormGroup = new FormGroup({
    'emailControl':this.emailControl,
    'passwordControl':this.passwordControl
   });

  constructor() { 
    
  }

  ngOnInit() {
  }

  public save() {
    console.log (this.form);
  }

}
