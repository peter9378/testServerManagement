import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  servers: Array<any> = [
    {
      "server": "10.140.92.10",
      "owner": "Dat Phan",
      "tas": "10.140.92.211",
      "name": "TS10",
      "plat": "E50",
      "mem": "48",
      "os": "Ubuntu14",
      "version": "16.0.dphan",
      "state": "NOT_READY"
    },
    {
      "server": "10.140.92.134",
      "owner": "Dat Phan",
      "tas": "10.140.92.211",
      "name": "TS134",
      "plat": "7100",
      "mem": "48",
      "os": "Ubuntu14",
      "version": "16.0.dphan",
      "state": "READY"
    },
    {
      "server": "10.140.92.135",
      "owner": "Dat Phan",
      "tas": "10.140.92.211",
      "name": "TS135",
      "plat": "7100",
      "mem": "48",
      "os": "Ubuntu14",
      "version": "16.0.dphan",
      "state": "READY"
    },
    {
      "server": "10.140.92.136",
      "owner": "Dat Phan",
      "tas": "10.140.92.211",
      "name": "vTS136",
      "plat": "genVM",
      "mem": "8",
      "os": "Ubuntu14",
      "version": "16.0.dphan",
      "state": "RUNNING"
    }
  ];
}