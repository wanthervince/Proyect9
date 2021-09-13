import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  apiKeyWeather = '06df395db00417edeca4841ef8a83f19';

  URI: string = '';
  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=sp&appid=${this.apiKeyWeather}&q=`;
  }
  getWeather(cityName: string) {
    return this.httpClient.get(`${this.URI}${cityName}`);
  }
  getWeatherInit() {
    return this.httpClient.get('https://freegeoip.app/json/');
  }
}
