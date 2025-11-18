import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Cubo} from '../models/cubo';

@Injectable()


export class ServicesCubo {

  constructor(private _http: HttpClient) {
  }

  getCubos():Observable<Array<Cubo>>{
      let url=environment.urlApi+"api/Cubos"
      return this._http.get<Array<Cubo>>(url)
  }

  getCubosByMarca(marca:string):Observable<Array<Cubo>>{
    let url=environment.urlApi+"api/Cubos/CubosMarca/"+marca

    return this._http.get<Array<Cubo>>(url)

  }
  getMarcas():Observable<any>{
    let url=environment.urlApi+"api/Cubos/Marcas"

    return this._http.get(url)
  }
}
