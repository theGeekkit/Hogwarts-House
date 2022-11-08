import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecretComponent } from './secret/secret.component';
import { HouseComponent } from './user/House/House.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {
    path: 'secret',
    component: SecretComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'House',
    component: HouseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


