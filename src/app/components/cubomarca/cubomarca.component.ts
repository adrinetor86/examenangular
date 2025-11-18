import {Component, OnInit} from '@angular/core';
import {ServicesCubo} from '../../services/ServicesCubo';
import {Cubo} from '../../../models/cubo';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cubomarca',
  standalone: false,
  templateUrl: './cubomarca.component.html',
  styleUrl: './cubomarca.component.css',
})
export class CubomarcaComponent implements OnInit {

    public arrCubos!:Array<Cubo>;

  constructor(private serviceCubo: ServicesCubo,
              private _activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      let marca=params['nombre'];
      this.serviceCubo.getCubosByMarca(marca).subscribe(response=> {
        this.arrCubos = response;
      })
    })
  }
}
