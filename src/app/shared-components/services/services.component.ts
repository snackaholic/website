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
      text : "Design und technische Betreuung deiner individuellen Webpräsenz",
      imageSource : "assets/icons/html_black_24dp.svg"
    },
    {
      heading : "Webentwicklung",
      text : "Erstellung von Webapplikationen nach Analyse der fachlichen Anforderungen",
      imageSource : "assets/icons/javascript_black_24dp.svg"
    },
    {
      heading : "Java Softwareentwicklung",
      text : "Konzeptionierung, Entwicklung sowie Optimierung von Softwarelösungen im Java Umfeld",
      imageSource : "assets/icons/code_black_24dp.svg"
    },
    {
      heading : "Datenbanken",
      text : "Beratung und Unterstützung bei der Installation, Einrichtung und Nutzung von applikationsspezifischen Datenbanken",
      imageSource : "assets/icons/developer_board_black_24dp.svg"
    },
    {
      heading : "Testing",
      text : "Spezifikation, Durchführung und Protokollierung von Testfällen",
      imageSource : "assets/icons/bug_report_black_24dp.svg"
    },
    {
      heading : "Support und Beratung",
      text : "Unterstützung bei der Anforderungsanalyse sowie Entwicklung von Lösungskonzepten",
      imageSource : "assets/icons/contact_support_black_24dp.svg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
