import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/country.service';
import { Country } from '../model/country.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allCountry: Country[];
  constructor(public countryservice: CountryService) { }

  ngOnInit(): void {
    this.getAllCountry();
    console.log(this.allCountry);
  }

  // tslint:disable-next-line:typedef
  getAllCountry(){
    this.countryservice.getAllCountry().subscribe(
       (data: Country[]) => {
         this.allCountry = data;
  });
  }

}
