import { Component, inject } from '@angular/core';
import { PrizmInputTextModule } from '@prizm-ui/components';
import { PrizmButtonComponent } from '@prizm-ui/components';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsFilter, prizmIconsUser } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrizmInputTextModule, PrizmButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  iconsRegistry = inject(PrizmIconsFullRegistry);
  showSortingField = false;

  ngOnInit(): void {
    this.iconsRegistry.registerIcons(prizmIconsFilter, prizmIconsUser);
  }

  toggleSortingField() {
    console.log('toggleSortingField');
    console.log(this.showSortingField);
    this.showSortingField = !this.showSortingField;
    console.log(this.showSortingField);
  }
}
