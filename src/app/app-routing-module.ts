import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CubomarcaComponent} from './components/cubomarca/cubomarca.component';
import {LoginComponent} from './components/forms/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ComprasComponent} from './components/compras/compras.component';
import {CreateCompraComponent} from './components/forms/create-compra/create-compra.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'marca/:nombre',component:CubomarcaComponent},
  {path:'login', component: LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'compras',component:ComprasComponent},
  {path:'comprar',component:CreateCompraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
