import { Component } from '@angular/core';
import { PrizmInputTextModule } from '@prizm-ui/components';
import { PrizmButtonComponent } from '@prizm-ui/components';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrizmInputTextModule, PrizmButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
