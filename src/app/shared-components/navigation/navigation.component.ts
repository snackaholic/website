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
  nav!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    let distanceScrolled = document.documentElement.scrollTop;
    let nav: HTMLElement | null = this.nav.nativeElement;
    if (nav != null) {
      if (distanceScrolled > 10) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 960) {
      const menuOpen = document.getElementById("toggle-menu-button-open");
      if (menuOpen != null) {
        menuOpen.style.display = "none";
      }
      const menu = document.getElementById("toggle-menu-button");
      if (menu != null) {
        menu.style.display = "";
      }
      if (this.menu.nativeElement != null) {
        if (this.menu.nativeElement.classList.contains("visible")) {
          this.menu.nativeElement.classList.remove("visible");
        }
      }
    }
  }

  toggleMenu(): void {
    const menuOpen = document.getElementById("toggle-menu-button-open");
    const menu = document.getElementById("toggle-menu-button");
    if (this.menu.nativeElement != null) {
      if (this.menu.nativeElement.classList.contains("visible")) {
        this.menu.nativeElement.classList.remove("visible");
        if (menu != null) {
          menu.style.display = "inline";
        }
        if (menuOpen != null) {
          menuOpen.style.display = "none";
        }
      } else {
        this.menu.nativeElement.classList.add("visible");
        if (menu != null) {
          menu.style.display = "none";
        }
        if (menuOpen != null) {
          menuOpen.style.display = "inline";
        }
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
