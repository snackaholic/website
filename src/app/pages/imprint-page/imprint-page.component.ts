import { Component } from '@angular/core';
import { SharedComponentsModule } from "../../shared-components/shared-components.module";
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any;

@Component({
    selector: 'app-imprint-page',
    standalone: true,
    templateUrl: './imprint-page.component.html',
    styleUrl: './imprint-page.component.scss',
    imports: [SharedComponentsModule]
})
export class ImprintPageComponent {

  ngOnInit(): void {
    this.invokeParticles();
  }

  invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
}
