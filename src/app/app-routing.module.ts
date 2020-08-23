import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './index/home/home.component';
import { DefaultComponent } from './dash/default/default.component';
import { AddblogComponent } from './dash/addblog/addblog.component';
import { AblogComponent } from './dash/ablog/ablog.component';
import { UblogComponent } from './dash/ublog/ublog.component';
import { UregComponent } from './ureg/ureg.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { IuploadComponent } from './dash/iupload/iupload.component';


const routes: Routes = [
  { path:'', component:IndexComponent,
  children:[
    { path:'', redirectTo:'home', pathMatch:'full'},
    { path:'home', component:HomeComponent},
    { path:'ureg', component:UregComponent},
    { path:'ulogin', component:UloginComponent}
  ]
},
  { path:'login', component:LoginComponent},
  { path:'admin', component:DashComponent,
  children:[
    { path:'', redirectTo:'default', pathMatch:'full'},
    { path:'default', component:DefaultComponent},
    { path:'addblog', component:AddblogComponent},
    { path:'ablog', component:AblogComponent},
    { path:'ublog', component:UblogComponent},
    { path:'upload', component:IuploadComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
