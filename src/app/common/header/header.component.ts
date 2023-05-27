import { Component } from '@angular/core';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
headerActionArray =[
  {'name':'User Information','routerPath':'/users','icon':'','isActive':true},
  {'name':'About Us','routerPath':'/about-us','icon':'','isActive':false},
  {'name':'Contact','routerPath':'/contact','icon':'','isActive':false},
]
  todayDateTime ={'Date':new Date().getDate(),'Month': months[new Date().getMonth()], 'Year':new Date().getFullYear()}
}
