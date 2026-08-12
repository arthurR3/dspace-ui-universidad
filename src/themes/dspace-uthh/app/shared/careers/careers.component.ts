import { Component } from '@angular/core';
import { CareersCardComponent } from './careers-card/careers-card.component';

interface CareersResponse {
  id: number;
  name_career: string;
  image: string;
}

@Component({
  selector: 'ds-themed-careers',
  imports: [CareersCardComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
})
export class CareersComponent {

 careers: CareersResponse[] = [
    {
      id: 1,
      name_career: 'Gastronomía',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQohZVY98nFtvTvJu1_qugHdEof2jgoEpgmHi-j3hrFQ&s=10'
    },
    {
      id: 2,
      name_career: 'Mercadotecnia',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQohZVY98nFtvTvJu1_qugHdEof2jgoEpgmHi-j3hrFQ&s=10'
    },
    {
      id: 3,
      name_career: 'Civil',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptiJUFdvO4s5tPTGJy4-ebsWRXe7Dq5cjH0Ah42qVjm4PtsS2ZrRbvvKi&s=10'
    },
    {
      id: 4,
      name_career: 'Agrobiotecnología',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQohZVY98nFtvTvJu1_qugHdEof2jgoEpgmHi-j3hrFQ&s=10'
    },
    {
      id: 5,
      name_career: 'Tecnologias de la Información',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQohZVY98nFtvTvJu1_qugHdEof2jgoEpgmHi-j3hrFQ&s=10'
    },
    {
      id: 6,
      name_career: 'Mecanica',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQohZVY98nFtvTvJu1_qugHdEof2jgoEpgmHi-j3hrFQ&s=10'
    },
    {
      id: 7,
      name_career: 'Mecatronica',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQohZVY98nFtvTvJu1_qugHdEof2jgoEpgmHi-j3hrFQ&s=10'
    },
    {
      id: 8,
      name_career: 'Gestion de Negocios',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQohZVY98nFtvTvJu1_qugHdEof2jgoEpgmHi-j3hrFQ&s=10'
    },
    {
      id: 9,
      name_career: 'Contaduría',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjemoYu0JJK4FU7F0KEkeDpwTximJazcEnTHajfD7GhNDpxYKQyTm8i4cE&s=10'
    },
  ];
}
