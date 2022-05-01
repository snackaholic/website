import { Component, Input, OnInit } from '@angular/core';
import { IService } from 'src/app/core/types/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input()
  service!: IService;

  constructor() { }

  ngOnInit(): void {
  }

}
