import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  yearsOnEarth!: number;

  constructor() { }

  ngOnInit(): void {
    this.yearsOnEarth = this.calculateCurrentAge(new Date('1995-07-16T01:12:00'));
  }

  calculateCurrentAge(birthday : Date) {
    var millisecondsPassedSinceBirthday = Date.now() - birthday.getTime();
    return Math.abs(new Date(millisecondsPassedSinceBirthday).getUTCFullYear() - 1970);
  }

}
