import { Component, OnInit } from '@angular/core';
import { IService } from 'src/app/core/types/service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  location : IService = {
    heading : "Standort",
    text : "Dennis Lange\nDahler Heide 69\n33100 Paderborn"
  };

  email : IService = {
    heading : "E-Mail",
    text : "mailto.dennis.lange@gmail.com"
  };

  phone : IService = {
    heading : "Telefon",
    text : "016093507143"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
