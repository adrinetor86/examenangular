import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {ServiceAuth} from './ServiceAuth';
import {Compra} from '../models/compra';


@Injectable()


export class ServiceCompra{

  constructor(private _http:HttpClient,
              private serviceAuth: ServiceAuth,) {

  }


  getCompras():Observable<Array<Compra>>{

    let url=environment.urlApi+"api/Compra/ComprasUsuario";

    let headers={"Authorization": "Bearer " + localStorage.getItem("authToken")};
    return this._http.get<Array<Compra>>(url,{headers:headers})
  }

  realizarCompra(idCubo:number):Observable<any>{
    let url=environment.urlApi+"api/Compra/InsertarPedido/"+idCubo;

    const headers={"Content-Type":"application/json",
      "Authorization":"Bearer " + localStorage.getItem("authToken")};

    return this._http.post(url,{headers:headers})
  }
}
