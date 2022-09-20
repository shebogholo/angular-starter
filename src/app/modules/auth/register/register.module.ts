import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '', component: RegisterComponent
  }];

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class RegisterModule { }
