import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('menu')
  menu!: ElementRef;

  @ViewChild('nav')
  nav! : ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.invokeParticles();
  }

  invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

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
}
