import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/core/types/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences : IExperience[] = [
    {
      company : "Jobware GmbH",
      period : "Oktober 2020 - laufend",
      title : "Fullstack Softwareentwicklung",
      points : ["Relaunch des Webauftritts der Jobware GmbH", "Konzeptionierung und Entwicklung diverser Microservices für die Webseite"]
    },
    {
      company : "Jobware GmbH",
      period : "Mai 2018 - Oktober 2020",
      title : "Backend Softwareentwicklung",
      points : ["Implementierung, Konfiguration und Wartung von Schnittstellenlösungen zu Bewerber-Management-Systemen und Karriere-Portalen", "Portierung von Altsystemen in neue Technologien"]
    },
    {
      company : "Jobware GmbH",
      period : "Juni 2017 - Mai 2018",
      title : "Frontend Softwareentwicklung",
      points : ["Entwurf und Umsetzung des Projekts https://www.jobs-für-meine-region.de", "Realisierung und Betreuung der regionalen Portale unter JFMS"]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
