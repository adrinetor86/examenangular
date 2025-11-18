import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/forms/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {provideHttpClient} from '@angular/common/http';
import {ServiceAuth} from '../services/ServiceAuth';
import {ServicesCubo} from '../services/ServicesCubo';
import { CubomarcaComponent } from './components/cubomarca/cubomarca.component';
import {ServiceUser} from '../services/ServiceUser';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import {ServiceCompra} from '../services/ServiceCompra';
import { ComprasComponent } from './components/compras/compras.component';
import { CreateCompraComponent } from './components/forms/create-compra/create-compra.component';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    CubomarcaComponent,
    ProfileComponent,
    ComprasComponent,
    CreateCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServiceAuth,
    ServicesCubo,
    ServiceUser,
    ServiceCompra
  ],
  bootstrap: [App]
})
export class AppModule { }
