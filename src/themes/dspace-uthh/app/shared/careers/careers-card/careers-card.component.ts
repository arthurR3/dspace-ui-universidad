import { Component, input } from '@angular/core';
import { HoverClassDirective } from '../../../../../../app/shared/hover-class.directive';

interface CareersResponse {
  id: number;
  name_career: string;
  image: string;
}


@Component({
  selector: 'ds-themed-careers-card',
  imports: [
    HoverClassDirective
  ],
  templateUrl: './careers-card.component.html',
  styleUrl: './careers-card.component.scss',
})



export class CareersCardComponent {

  careers = input.required<CareersResponse>();
}
