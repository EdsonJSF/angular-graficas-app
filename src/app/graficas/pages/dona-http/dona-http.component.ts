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

  proveedoresData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: this.colors,
        hoverBackgroundColor: this.colorsHover,
        hoverBorderColor: this.colorsHover,
      },
    ],
  };

  constructor(private GraficasService: GraficasService) {}

  ngOnInit(): void {
    // this.GraficasService.getGrafica().subscribe((grafica) => {
    //   this.show = true;
    //   this.proveedoresData.labels = Object.keys(grafica);
    //   this.proveedoresData.datasets[0].data = Object.values(grafica);
    // });

    /* Get Grafica with map RXJS */
    this.GraficasService.getGraficaRXJS().subscribe(({ labels, values }) => {
      this.show = true;
      this.proveedoresData.labels = labels;
      this.proveedoresData.datasets[0].data = values;
    });
  }
}
