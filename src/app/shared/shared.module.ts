import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';

const importExport = [MenuComponent];

@NgModule({
  declarations: [importExport],
  imports: [CommonModule],
  exports: [importExport],
})
export class SharedModule {}
