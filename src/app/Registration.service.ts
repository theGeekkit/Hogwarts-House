import { Injectable, Component, OnInit } from "@angular/core";
import { Register } from "./user/Register";
import { FormGroup, FormControl, NgForm } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService implements OnInit{

  emptyList = false

  public register: Register[] = [];

  constructor() { }

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl(null),
      house: new FormControl(null),
    });
  }

  onSubmit(form: NgForm) {
    this.register.push(this.loginForm.value);
    console.log(this.register)
    this.loginForm.reset()
    this.register.push(form.value)
  }
  }


