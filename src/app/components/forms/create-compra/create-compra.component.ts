import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Cubo} from '../../../../models/cubo';
import {ServicesCubo} from '../../../services/ServicesCubo';
import {ServiceCompra} from '../../../services/ServiceCompra';
import {ServiceAuth} from '../../../services/ServiceAuth';

@Component({
  selector: 'app-create-compra',
  standalone: false,
  templateUrl: './create-compra.component.html',
  styleUrl: './create-compra.component.css',
})
export class CreateCompraComponent implements OnInit {

  @ViewChild('cajaSelect') cajaSel!: ElementRef;
  public cuboEscogido!:number;

  public arrCubos!:Array<Cubo>;
  constructor(private serviceCubo:ServicesCubo,
              private serviceCompra:ServiceCompra,
              private serviceAuth: ServiceAuth,) {}

  ngOnInit() {
    this.serviceCubo.getCubos().subscribe(data=>{
      this.arrCubos = data;
    })
  }

  comprar(){

    this.cuboEscogido=this.cajaSel.nativeElement.value
    if(this.serviceAuth.UserIsLogged()){
      this.serviceCompra.realizarCompra(this.cuboEscogido).subscribe(data=>{
        console.log(data);
      })
    }else{
      alert("Erro ao criar compra");
    }


  }
}
