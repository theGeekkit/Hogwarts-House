import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/Registration.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

}
