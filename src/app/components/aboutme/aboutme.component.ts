import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  public title:string;
  public subtitle:string;
  public email:string;

  constructor() {
    this.title = "Alejandro Suárez";
    this.subtitle = "Desarrollador en proceso";
    this.email = "ftvalex@hotmail.com";

   }

  ngOnInit(): void {
  }

}
