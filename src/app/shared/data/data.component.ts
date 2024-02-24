import { Component, OnInit } from '@angular/core';
import { DataserviceComponent } from '../../service/dataservice/dataservice.component';


@Component({
  selector: 'app-data',
  standalone: true,
  imports: [DataserviceComponent],
  template: `
  <p>
  Name: {{ data.name }}
  Age: {{ data.age }}
  Email: {{ data.email }}
</p>
  `,
  styleUrl: './data.component.css'
})

export class DataComponent implements OnInit {
  data: any;

  constructor(private dataService: DataserviceComponent) { }

  ngOnInit() {
    this.dataService.getData().subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });

  }
}
