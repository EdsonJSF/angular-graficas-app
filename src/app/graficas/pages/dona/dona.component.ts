import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  colorsHover: string[] = [
    '#0C8DF6',
    '#0BAED4',
    '#00EBD8',
    '#0BD48A',
    '#0CF65E',
  ];
  colors: string[] = this.colorsHover.map((color) => color + 'BB');

  proveedoresData: ChartData<'bar'> = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: this.colors,
        hoverBackgroundColor: this.colorsHover,
        hoverBorderColor: this.colorsHover,
      },
    ],
  };
}
