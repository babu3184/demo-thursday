import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'http://localhost:3000/Country';

country: Country = {
   id: null,
   country: '',
   states: ''
};

constructor(private http: HttpClient) { }

  getAllCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }
}
