import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { HouseComponent } from './user/House/House.component';
import { AuthModelComponent } from './user/auth-model/auth-model.component';
import { HeaderComponent } from './header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { SecretComponent } from './secret/secret.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './user/login/sign-up/sign-up.component';
import { SignInComponent } from './user/login/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HouseComponent,
    AuthModelComponent,
    HeaderComponent,
    SecretComponent,
    SignUpComponent,
    SignInComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
