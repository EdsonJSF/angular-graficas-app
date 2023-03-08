import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';

const importExport = [MenuComponent];

@NgModule({
  declarations: [importExport],
  imports: [CommonModule, RouterModule],
  exports: [importExport],
})
export class SharedModule {}
