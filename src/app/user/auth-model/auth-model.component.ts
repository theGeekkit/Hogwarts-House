import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/Registration.service';

@Component({
  selector: 'app-auth-model',
  templateUrl: './auth-model.component.html',
  styleUrls: ['./auth-model.component.css']
})
export class AuthModelComponent implements OnInit {

  constructor(public RegistrationService: RegistrationService) { }

  ngOnInit(): void {
  }

}
