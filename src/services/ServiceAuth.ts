import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class ServiceAuth {


  logged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.UserIsLogged());

  constructor() {
    this.logged.next(this.UserIsLogged());
  }

  get isLogged(): Observable<boolean> {
    return this.logged.asObservable();
  }

  //ALMACENA EL TOKEN
  storeToken(authToken: string): void {
    localStorage.setItem('authToken', authToken);
    this.logged.next(true); // Publica que el usuario está logueado
  }

  //VERIFICA SI HAY TOKEN
  UserIsLogged():boolean{
    return !!localStorage.getItem('authToken');
  }

  //ELIMINA EL TOKEN
  deleteToken(){
    localStorage.removeItem('authToken');
    this.logged.next(false);
  }



}
