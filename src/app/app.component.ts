import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  cityName: string;
  unit: string | undefined;
  weatherData: WeatherData;
  ngOnInit(): void {
    this.getWeatherData("Cleveland");
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
  }

  onChange(value:string) {
    this.unit = value;
    console.log(this.unit);
  }

  private getWeatherData(cityName: string, stateCode?: string, countryCode?: string) {
    this.weatherService.getWeatherData(cityName, stateCode, countryCode)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    })
  };
}

// https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
