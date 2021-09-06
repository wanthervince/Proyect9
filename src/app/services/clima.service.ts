import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  apiKey = '06df395db00417edeca4841ef8a83f19';
  URI: string = '';
  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;
  }
  getWeather(cityName: string) {
    return this.httpClient.get(`${this.URI}${cityName}`);
  }
}
