import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getLocation(cityName: string): Observable<{ lat: number, lon: number }> {
    const url = `${environment.weatherApiBaseUrl}${encodeURIComponent(cityName)}&limit=1&appid=${environment.APIKey}`;
    
    return this.http.get<any[]>(url).pipe(
      switchMap(response => {
        if (response.length > 0) {
          const { lat, lon } = response[0];
          return of({ lat, lon });
        } else {
          return of(null);
        }
      }),
      catchError(() => {
        return of(null);
      })
    );
  }

  getWeatherDataFromLocation(lat: number, lon: number): Observable<WeatherData> {
    const weatherUrl = `http://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${environment.APIKey}`;

    return this.http.get<WeatherData>(weatherUrl).pipe(
      catchError(() => {
        return of(null);
      })
    );
  }

  getWeatherData(cityName: string, stateCode?: string, countryCode?: string): Observable<WeatherData> {
    return this.getLocation(cityName).pipe(
      switchMap(location => {
        if (location) {
          return this.getWeatherDataFromLocation(location.lat, location.lon);
        } else {
          return of(null);
        }
      })
    );
  }
}