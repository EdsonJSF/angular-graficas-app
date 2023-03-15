import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  show: boolean = false;
  colorsHover: string[] = [
    '#0C8DF6',
    '#0BAED4',
    '#00EBD8',
    '#0BD48A',
    '#0CF65E',
  ];
  colors: string[] = this.colorsHover.map((color) => color + 'BB');

  proveedoresData: ChartData<'bar'> = { datasets: [{ data: [] }] };

  constructor(private GraficasService: GraficasService) {}

  ngOnInit(): void {
    this.GraficasService.getGrafica().subscribe((grafica) => {
      this.show = true;

      this.proveedoresData = {
        labels: Object.keys(grafica),
        datasets: [
          {
            data: Object.values(grafica),
            backgroundColor: this.colors,
            hoverBackgroundColor: this.colorsHover,
            hoverBorderColor: this.colorsHover,
          },
        ],
      };
    });
  }
}
