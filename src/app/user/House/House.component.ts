import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/Registration.service';
import { Register } from '../Register';

@Component({
  selector: 'app-House',
  templateUrl: './House.component.html',
  styleUrls: ['./House.component.css']
})
export class HouseComponent implements OnInit {

  constructor(public registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  onDeleteRegister(index: Register) {
    this.registrationService.register = this.registrationService.register.filter(register => register !== index)
    console.log(this.registrationService.register)
  }


}
