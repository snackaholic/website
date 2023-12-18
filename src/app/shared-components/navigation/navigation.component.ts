import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('toggleMenuButton')
  toggleMenuButton!: ElementRef;

  @ViewChild('toggleMenuButtonOpen')
  toggleMenuButtonOpen!: ElementRef;

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

  @HostListener('window:click', ['$event'])
  onClick(event: Event) {
    if (event.target == null) {
      return;
    }
    // if menu is not visible ignore clicks
    if (!this.isMenuVisible()) {
      return;
    }
    // if click target is menu close / open button ignore click
    if (event.target === this.toggleMenuButton.nativeElement ||
      event.target === this.toggleMenuButtonOpen.nativeElement) {
      return;
    }
    // if click is outside of menu -> close it
    if (!this.containsElement(this.menu.nativeElement, event.target as HTMLElement)) {
      this.hideMenu();
    }
  }

  private isMenuVisible() {
    return this.menu.nativeElement.classList.contains("visible");
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 768) {
      this.menu.nativeElement.classList.remove("visible");
      this.toggleMenuButton.nativeElement.style.display = "";
      this.toggleMenuButtonOpen.nativeElement.style.display = "none";
    }
  }

  hideMenu(): void {
    this.menu.nativeElement.classList.remove("visible");
    this.toggleMenuButton.nativeElement.style.display = "inline";
    this.toggleMenuButtonOpen.nativeElement.style.display = "none";
  }

  showMenu(): void {
    this.menu.nativeElement.classList.add("visible");
    this.toggleMenuButton.nativeElement.style.display = "none";
    this.toggleMenuButtonOpen.nativeElement.style.display = "inline";
  }

  toggleMenu(): void {
    if (this.isMenuVisible()) {
      this.hideMenu();
    } else {
      this.showMenu();
    }
  }

  containsElement(parent: HTMLElement, child: HTMLElement) {
    return parent !== child && parent.contains(child);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
