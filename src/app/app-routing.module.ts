import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './auth/guards/validar-token.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('./tinpy-public/tinpy-public.module').then(m => m.TinpyPublicModule)
  },
  {
    path:'auth',
    loadChildren: ()=>import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'vip',
    loadChildren: ()=> import('./tinpy-private/tinpy-private.module').then(m => m.TinpyPrivateModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  { path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
