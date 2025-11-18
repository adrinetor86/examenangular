import {Component, OnInit} from '@angular/core';
import {ServicesCubo} from '../../../services/ServicesCubo';
import {Subscription} from 'rxjs';
import {ServiceAuth} from '../../../services/ServiceAuth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  public arrMarcas!:Array<string>
  userSub!: Subscription;
  isLogged:boolean= false;

  constructor(private serviceCubo: ServicesCubo,
              private serviceAuth:ServiceAuth,
              private _router: Router) {
    this.isLogged = false;
  }

  ngOnInit() {

    this.serviceCubo.getMarcas().subscribe(response=>{
      console.log("marcas"+response);
      this.arrMarcas = response;
    })

    this.userSub = this.serviceAuth.isLogged.subscribe((value) => {
      this.isLogged = value; // Actualiza automáticamente


      this.userSub = this.serviceAuth.isLogged.subscribe({
        next: (value): any => {
          this.isLogged = value;
        }
      });
    })
    this.isLogged = this.serviceAuth.UserIsLogged();
  }

  cerrarSesion(){
    this.serviceAuth.deleteToken()
    this._router.navigate(['/'])
  }
}
