import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  allUsers: User[];
  id:any;
  
  constructor(private userservice: UserService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.id= (this.route.snapshot.params['id']);
    this.getUserByID()
 }

 getAllUsers() {
    this.userservice.getAllUsers().subscribe(
      (data: User[]) => {
        this.allUsers = data;
      });
 }
getUserByID(){

}
 deleteUser(id:number){
  console.log(id);
  this.userservice.deleteUser(id).subscribe(
    (data:User)=>{
      this.getAllUsers();
    }
  )
 }
 edit(user){
   this.userservice.currentUser = Object.assign({}, user)
 }
}