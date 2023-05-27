import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './template/default/default.component';
import { UsersComponent } from './components/users/users.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [{
  path: '', 
	component: DefaultComponent,
	children: [
    {
      path:'',
      component:UsersComponent
    },
    {
      path:'users',
      component:UsersComponent
    },
    {
      path:'about-us',
      component:AboutUsComponent
    },
    {
      path:'contact',
      component:ContactComponent
    }
	]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
