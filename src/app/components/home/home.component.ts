import {Component, OnInit} from '@angular/core';
import {ServicesCubo} from '../../services/ServicesCubo';
import {Cubo} from '../../../models/cubo';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  public arrCubos!:Array<Cubo>
  constructor(private serviceCubo:ServicesCubo) {
  }

  ngOnInit() {

    this.serviceCubo.getCubos().subscribe(response=>{
      console.log(response);
      this.arrCubos = response;
    })
  }

}
