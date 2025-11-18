import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Cubo} from '../../../../models/cubo';
import {ServicesCubo} from '../../../../services/ServicesCubo';
import {ServiceCompra} from '../../../../services/ServiceCompra';
import {ServiceAuth} from '../../../../services/ServiceAuth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-compra',
  standalone: false,
  templateUrl: './create-compra.component.html',
  styleUrl: './create-compra.component.css',
})
export class CreateCompraComponent implements OnInit {

  @ViewChild('cajaSelect') cajaSel!: ElementRef;
  public cuboEscogido!:number;
  public cubo!:Cubo;
  public arrCubos!:Array<Cubo>;
  constructor(private serviceCubo:ServicesCubo,
              private serviceCompra:ServiceCompra,
              private serviceAuth: ServiceAuth,
              private _router: Router,) {}

  ngOnInit() {
    this.serviceCubo.getCubos().subscribe(data=>{
      this.arrCubos = data;
    })
  }

  comprar(){


    this.serviceCubo.getCuboById(this.cajaSel.nativeElement.value).subscribe(data=>{
      console.log(data);
      this.cubo=data
      this.cuboEscogido=parseInt(this.cajaSel.nativeElement.value)

      this.serviceCompra.realizarCompra(this.cubo,this.cuboEscogido).subscribe(data=>{
        console.log(data);

        this._router.navigate(['/compras']);
      })
    })



    if(this.serviceAuth.UserIsLogged()){

    }else{
      alert("Erro ao criar compra");
    }


  }
}
