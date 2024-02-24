import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-dataservice',
  standalone: true,
  imports: [],
  templateUrl: './dataservice.component.html',
  styleUrl: './dataservice.component.css'
})

export class DataserviceComponent {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('assets/data.json');
  }
}
