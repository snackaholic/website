import { Component, OnInit } from '@angular/core';
import { IService } from 'src/app/core/types/service';
import { ISocial } from 'src/app/core/types/social';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  socials : ISocial[] = [
    {
      link : "https://github.com/snackaholic",
      imageSource : "assets/icons/github-brands.svg"
    },
    {
      link: "https://stackoverflow.com/users/4320835",
      imageSource : "assets/icons/stack-overflow-brands.svg"
    },
    {
      link : "https://www.xing.com/profile/Dennis_Lange55/cv",
      imageSource : "assets/icons/xing-brands.svg"
    },
    {
      link : "https://www.linkedin.com/in/dennis-lange-186003227/",
      imageSource : "assets/icons/linkedin-in-brands.svg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
