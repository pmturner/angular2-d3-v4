import { Component, OnInit } from '@angular/core';
import { IBar } from '../shared/barchart/barchart.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private chartData: IBar[];

  constructor() {}

  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      let totalAmount = Math.floor(Math.random() * 100);
      let allocatedAmount = Math.floor(Math.random() * 10);
      this.chartData.push({
        label: 'Index' + i,
        total: totalAmount,
        allocated: allocatedAmount,
        remaining: totalAmount - allocatedAmount
      });
    }
  }
}
