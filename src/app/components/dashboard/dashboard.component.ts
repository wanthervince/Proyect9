import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  getCiudad!: string;
  weather: any;
  constructor(private climaService: ClimaService) {}

  ngOnInit(): void {}
  getWeather() {
    this.climaService.getWeather(this.getCiudad).subscribe(
      (res) => {
        this.weather = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
