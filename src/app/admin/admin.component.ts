import { Component, OnInit } from '@angular/core';
import { AppDataServices } from '../services/app-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users$;

  constructor(private appDataService: AppDataServices) { }

  ngOnInit() {
    this.users$ = this.appDataService.getUsers();
  }

}
