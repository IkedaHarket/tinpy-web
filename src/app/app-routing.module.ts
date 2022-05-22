import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarVipGuard } from './auth/guards/vip/validar-vip.guard';
import { ValidarAuthGuard } from './auth/guards/auth/validar-auth.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('./tinpy-public/tinpy-public.module').then(m => m.TinpyPublicModule)
  },
  {
    path:'auth',
    loadChildren: ()=>import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [ValidarAuthGuard],
    canLoad: [ValidarAuthGuard]
  },
  {
    path:'vip',
    loadChildren: ()=> import('./tinpy-private/tinpy-private.module').then(m => m.TinpyPrivateModule),
    canActivate: [ValidarVipGuard],
    canLoad: [ValidarVipGuard]
  },
  { path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
