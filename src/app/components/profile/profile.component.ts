import {Component, OnInit} from '@angular/core';
import {ServiceUser} from '../../services/ServiceUser';
import {Profile} from '../../../models/profile';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {

  profile!: Profile;
  constructor(private serviceUser: ServiceUser){}


  ngOnInit() {
    this.serviceUser.viewProfile().subscribe(data=>{
      this.profile = data;
    })
  }
}
