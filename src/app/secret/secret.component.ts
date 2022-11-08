import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../Registration.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  constructor(public registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

}
