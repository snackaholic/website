import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ServicesComponent } from './services/services.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ServiceComponent } from './service/service.component';
import { SocialsComponent } from './socials/socials.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AboutmeComponent,
    ServicesComponent,
    ExperienceComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    NavigationComponent,
    ServiceComponent,
    SocialsComponent],
  exports: [
    HeaderComponent,
    AboutmeComponent,
    ServicesComponent,
    ExperienceComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    NavigationComponent,
    SocialsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
