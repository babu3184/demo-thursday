import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from '../shared/country.service';
import { UserService } from '../shared/user.service';
import { Country } from '../model/country.model';
import { User } from '../model/user.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  formdata: any;
  countryList: Array<any>;
  state: Array<any>;
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  constructor(public userservice: UserService,
              public countryservice: CountryService) { }

 url = 'https://www.pngitem.com/pimgs/m/294-2947257_interface-icons-user-avatar-profile-user-avatar-png.png';


  ngOnInit(): void {
    this.getAllCountry();
  }
  
  onChange(event) {
    this.userservice.currentUser.address = event.target.value;
  }

 fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 310;
        const max_width = 325;

        if (fileInput.target.files[0].size > max_size) {
            this.imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return false;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                console.log(img_height, img_width);


                if (img_height > max_height && img_width > max_width) {
                    this.imageError =
                        'Maximum dimentions ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return false;
                } else {
                    const imgBase64Path = e.target.result;
                    this.cardImageBase64 = imgBase64Path;
                    this.isImageSaved = true;
                    // this.previewImagePath = imgBase64Path;
                }
            };
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
}

  getAllCountry(){
    this.countryservice.getAllCountry().subscribe(
       (data: Country[]) => {
         this.countryList = data;
    });
  }

  changeCountry(count) {
    this.state = this.countryList.find(con => con.country == count).states;
  }

  CreateAndUpdate(currentUser: User){
    console.log(currentUser);
    if(currentUser.id!= null){
      console.log('update');
      this.UpdateUser(currentUser);
    }else{
      console.log('Create');
      this.createUser(currentUser);
    }
  }

  createUser(user: User){
    this.userservice.createUser(user).subscribe();
  }
  UpdateUser(user: User){
  this.userservice.UpdateUser(user).subscribe();
}

}
