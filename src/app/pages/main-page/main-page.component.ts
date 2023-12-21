import { Component } from '@angular/core';
import { SharedComponentsModule } from "../../shared-components/shared-components.module";

@Component({
    selector: 'app-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    imports: [SharedComponentsModule]
})
export class MainPageComponent {

}
