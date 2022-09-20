import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadChildren: ()=> import('./modules/home/home.module').then(m=> m.HomeModule)},
  { path: 'login', loadChildren: () => import('./modules/auth/login/login.module').then(m => m.LoginModule)},
  { path: 'register', loadChildren: () => import('./modules/auth/register/register.module').then(m => m.RegisterModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    paramsInheritanceStrategy: 'always',
    urlUpdateStrategy: 'eager',
    useHash: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
