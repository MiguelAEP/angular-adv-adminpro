//routing hijas
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRouting } from './auth/auth.routing';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent }
]

@NgModule({
 
  imports: [
    //rutas principales
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRouting
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
