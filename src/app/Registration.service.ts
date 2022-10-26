import { Injectable } from "@angular/core";
import { Register } from "./user/Register";
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class RegistrationService implements OnInit{

  emptyList = false

  register: Register[] = [];

  constructor() { }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl(null),
      house: new FormControl(null),
    });
  }

  onSubmit() {
    this.register.push(this.loginForm.value);
    console.log(this.register)
    this.loginForm.reset()
    this.emptyList = true
  }

}
