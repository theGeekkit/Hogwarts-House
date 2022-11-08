import { Injectable, Component, OnInit } from "@angular/core";
import { Register } from "./user/Register";
import { FormGroup, FormControl, NgForm } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService implements OnInit{



  public register: Register[] = [];


  constructor() {
    this.loginForm = new FormGroup({
    name: new FormControl(null),
    house: new FormControl(null),
  }); }

  loginForm!: FormGroup;

  ngOnInit(): void {

  }

  onSubmit() {
    this.register.push(this.loginForm.value);
    console.log(this.register)
    this.loginForm.reset()

  }
  }


