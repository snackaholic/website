import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('menu')
  menu!: ElementRef;

  @ViewChild('nav')
  nav! : ElementRef;

  @HostListener('window:scroll', ['$event']) 
  onScroll(event : Event) {
    let distanceScrolled = document.documentElement.scrollTop;
    let nav : HTMLElement | null = this.nav.nativeElement;
    if (nav != null) {
      if (distanceScrolled > 10) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }
  }

  toggleMenu() : void {
    if(this.menu.nativeElement != null) {
      if(this.menu.nativeElement.classList.contains("visible")) {
        this.menu.nativeElement.classList.remove("visible");
      } else {
        this.menu.nativeElement.classList.add("visible");
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
