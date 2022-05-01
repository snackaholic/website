import { Component, OnInit } from '@angular/core';
import { IService } from 'src/app/core/types/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services : IService[] = [
    {
      heading : "Webdesign",
      text : "Design und technische Betreuung Ihrer individuellen Webpräsenz"
    },
    {
      heading : "Webentwicklung",
      text : "Erstellung von Webapplikationen nach Analyse der fachlichen Anforderungen"
    },
    {
      heading : "Java Softwareentwicklung",
      text : "Konzeptionierung, Entwicklung sowie Optimierung von Softwarelösungen im Java Umfeld"
    },
    {
      heading : "Datenbanken",
      text : "Beratung und Unterstützung bei der Installation, Einrichtung und Nutzung von applikationsspezifischen Datenbanken"
    },
    {
      heading : "Testing",
      text : "Spezifikation, Durchführung und Protokollierung von Testfällen"
    },
    {
      heading : "Support und Beratung",
      text : "Unterstützung bei der Anforderungsanalyse sowie Entwicklung von Lösungskonzepten"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
