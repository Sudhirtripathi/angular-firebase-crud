import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { AheaderComponent } from './dash/aheader/aheader.component';
import { AfooterComponent } from './dash/afooter/afooter.component';
import { SidebarComponent } from './dash/sidebar/sidebar.component';
import { DefaultComponent } from './dash/default/default.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './index/footer/footer.component';
import { HomeComponent } from './index/home/home.component';
import { AddblogComponent } from './dash/addblog/addblog.component';
import { AblogComponent } from './dash/ablog/ablog.component';
import { UblogComponent } from './dash/ublog/ublog.component';
import { environment } from 'src/environments/environment';
import { BlogserService } from './_service/blogser.service';
import { UregComponent } from './ureg/ureg.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { IuploadComponent } from './dash/iupload/iupload.component';
import { AngularFireStorageModule, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    DashComponent,
    AheaderComponent,
    AfooterComponent,
    SidebarComponent,
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddblogComponent,
    AblogComponent,
    UblogComponent,
    UregComponent,
    UloginComponent,
    IuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseconfig,),
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [BlogserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
