import {Component, OnInit} from '@angular/core';
import {ServiceCompra} from '../../services/ServiceCompra';
import {Compra} from '../../../models/compra';
import {ServiceAuth} from '../../services/ServiceAuth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compras',
  standalone: false,
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css',
})
export class ComprasComponent implements OnInit {

    public arrCompras!: Array<Compra>;
  constructor(private serviceCompras:ServiceCompra,
              private serviceAuth:ServiceAuth,
              private _router: Router) {}


  ngOnInit() {

    if(this.serviceAuth.UserIsLogged()){

      this.serviceCompras.getCompras().subscribe(data=>{
        console.log(data)
        this.arrCompras = data;
      })
    }else{
      this._router.navigate(['login']);
    }
  }
}
