import {Injectable} from '@angular/core';
import {ServicesCubo} from './ServicesCubo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Profile} from '../../models/profile';


@Injectable()


export class ServiceUser {

  constructor(private _http: HttpClient) { }

     login(email:string,password:string):Observable<any>{

      let url=environment.urlApi+"api/Manage/Login";
      const body={
        "email":email,
        "password":password
      }
      const headers={"Content-Type":"application/json"}
      return this._http.post(url,body,{headers:headers})
     }

     viewProfile():Observable<Profile>{

      let url=environment.urlApi+"api/Manage/PerfilUsuario";
      const headers={"Authorization":"Bearer " + localStorage.getItem("authToken")};
      return this._http.get<Profile>(url,{headers:headers});

     }
}
