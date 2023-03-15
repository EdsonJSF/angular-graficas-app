import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  constructor(private GraficasService: GraficasService) {}

  ngOnInit(): void {
    this.GraficasService.getGrafica().subscribe((grafica) => {
      return grafica;
    });
  }

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
