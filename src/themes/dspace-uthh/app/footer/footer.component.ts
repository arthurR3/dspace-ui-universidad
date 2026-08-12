import {
  AsyncPipe,
  DatePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownViewerComponent } from 'src/app/shared/markdown-viewer/markdown-viewer.component';

import { FooterComponent as BaseComponent } from '../../../../app/footer/footer.component';

@Component({
  selector: 'ds-themed-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
  imports: [
    AsyncPipe,
    DatePipe,
    MarkdownViewerComponent,
    RouterLink,
    TranslateModule,
  ],
})
export class FooterComponent extends BaseComponent {

  footerData = {
    organization: {
      name: 'Universidad Tecnológica de la Huasteca Hidalguense',
      acronym: 'UTHH',
      logoUrl: 'assets/dspace-uthh/images/logo-uthh.png',
      departament: 'Departamento de Servicios Bibliotecarios',
      library: 'Biblioteca Mtro. Sergio Saúl Figueroa Balderas',
    },
    contact: {
      address: 'Carretera Huejutla - Chalahuiyapa S/N, C.P. 43000, Huejutla de Reyes, Hidalgo, México.',
      phone: 'Tel. (01) 789 893 31 30 Ext. 128',
      email: 'bliblioteca@uthh.edu.mx',
      website: 'http://www.biblioteca.uthh.edu.mx'
    },
    interestLinks: [
      { label: 'Sitio Web Oficial de la UTHH', url: 'http://uthh.edu.mx' },
      { label: 'Aviso de Privacidad', url: 'http://uthh.edu.mx' },
      { label: 'Política de Cookies', url: 'http://uthh.edu.mx' }
    ]
  }
}
