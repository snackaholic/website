import { Component, OnDestroy, OnInit } from '@angular/core';
import { TyperConfig } from 'src/app/core/types/typerconfig';

@Component({
  selector: 'app-typer',
  templateUrl: './typer.component.html',
  styleUrls: ['./typer.component.scss']
})
export class TyperComponent implements OnInit, OnDestroy {

  config: TyperConfig =
    {
      timeoutCounter: 20,
      typeSpeed: 80,
      heading: "Dein Ansprechspartner für",
      texts: ["Realisierung und Betreuung deines Webauftritts", "Implementierung, Konfiguration und Wartung von Softwarelösungen", "Portierung von Altsystemen in neue Technologien"]
    };

  intervalReference: any;
  currentlyPrintedTextIndex: number = 0;
  currentlyPrintedTextLetterIndex: number = 0;
  wordTimeoutCounter = 0;
  leftToRight: boolean = true;

  viewText: string = "";
  viewHeading: string = "";

  constructor() { }

  ngOnDestroy(): void {
    clearInterval(this.intervalReference);
  }

  ngOnInit(): void {
    this.viewHeading = this.config.heading;
    this.intervalReference = setInterval(() => {
      var word = this.config.texts[this.currentlyPrintedTextIndex];
      var ln = word.length;

      if (this.leftToRight) {
        this.viewText = word.slice(0, this.currentlyPrintedTextLetterIndex);
        this.currentlyPrintedTextLetterIndex++;
      };
      if (this.currentlyPrintedTextLetterIndex === ln + 1) { this.leftToRight = false };

      if (!this.leftToRight) {
        if (this.wordTimeoutCounter < this.config.timeoutCounter) {
          this.wordTimeoutCounter++;
          return;
        }
        this.viewText = word.slice(0, this.currentlyPrintedTextLetterIndex);
        this.currentlyPrintedTextLetterIndex--;
      }
      if (this.currentlyPrintedTextLetterIndex === 0) {
        this.leftToRight = true;
        this.currentlyPrintedTextIndex++;
        this.wordTimeoutCounter = 0;
      }
      if (this.currentlyPrintedTextIndex === this.config.texts.length) { this.currentlyPrintedTextIndex = 0 }
    }, this.config.typeSpeed);
  }

}


