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
  city: any;
  icon!: string;
  descripcion!: string;
  ok!: string;
  constructor(private climaService: ClimaService) {}

  ngOnInit(): void {
    this.getCiudadIp();
  }

  getWeather(city: string) {
    this.weather = '';
    this.climaService.getWeather(city).subscribe(
      (res) => {
        console.log(res);
        this.weather = res;
        this.icon = this.weather.weather[0].icon.substring(2, -1);
        this.descripcion = this.weather.weather[0].description.toUpperCase();
        this.getCiudad = '';
      },
      (err) => {
        alert(err.error.message);
        this.ok = err.ok;
        this.getCiudad = '';
        this.getCiudadIp();
      }
    );
  }

  getCiudadIp() {
    this.climaService.getWeatherInit().subscribe((res) => {
      this.city = res;
      this.city = this.city.city;
      setTimeout(() => {
        this.getWeather(this.city);
      }, 1000);
    });
  }
}
