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
    text : "Dennis Lange\nDahler Heide 69\n33100 Paderborn",
    imageSource : "assets/icons/place_black_24dp.svg"
  };

  email : IService = {
    heading : "E-Mail",
    text : "mailto.dennis.lange@gmail.com",
    imageSource : "assets/icons/email_black_24dp.svg"
  };

  phone : IService = {
    heading : "Telefon",
    text : "016093507143",
    imageSource : "assets/icons/call_black_24dp.svg"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
