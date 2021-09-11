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
  icon!: string;
  descripcion!: string;
  ok!: string;
  constructor(private climaService: ClimaService) {}

  ngOnInit(): void {}
  getWeather() {
    this.climaService.getWeather(this.getCiudad).subscribe(
      (res) => {
        this.weather = res;
        console.log(res);
        this.icon = this.weather.weather[0].icon.substring(2, -1);
        this.descripcion = this.weather.weather[0].description.toUpperCase()
      this.getCiudad = '';
      },
      (err) => {
        console.log(err)
        alert(err.error.message)
        this.ok = err.ok;
        this.getCiudad = '';
      }
    );
  }
}
