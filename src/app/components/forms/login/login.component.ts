import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceAuth} from '../../../services/ServiceAuth';
import {ServiceUser} from '../../../services/ServiceUser';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  public userName!: string;
  public password!: string;

  @ViewChild('cajaUser') cajaUsername !: ElementRef;
  @ViewChild('cajaPass') cajaPassword !: ElementRef;


  constructor(private _serviceAuth:ServiceAuth,
              private _serviceUser:ServiceUser,
              private _router:Router) {}

  ngOnInit() {
    if(localStorage.getItem('authToken')){
      alert("Ya estas logueado")
      this._router.navigate(['/']);
    }
  }

  login(){

    this.userName=this.cajaUsername.nativeElement.value;
    this.password=this.cajaPassword.nativeElement.value;

    this._serviceUser.login(this.userName,this.password).subscribe(data=>{
      console.log(data);
      this._serviceAuth.storeToken(data.response);
      this._router.navigate(['/']);
    })
    //? METER EL METODO QUE LLAMA A LA API CON EL HEADER AUTH BEARER



  }
}
