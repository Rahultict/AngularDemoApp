import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/HttpService/http.service';
import { UsersInterface } from 'src/app/Interfaces/user.interface';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public Users:Array<UsersInterface> = []
  constructor(private readonly httpService:HttpService){}

  ngOnInit(): void {
      this.getUsersData()
  }
  getUsersData(){
    this.httpService.getUsers().subscribe((response)=>{
      if(response){
        this.Users =  response
      }
    })
  }

}
