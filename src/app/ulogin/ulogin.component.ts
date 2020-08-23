import { Component, OnInit } from '@angular/core';
import { BlogserService } from '../_service/blogser.service';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {

  private ser:BlogserService
  constructor( ) { }

  ngOnInit(): void {
  }

  googleLogin()
  {
    this.ser.googleLogin()
  }

  facebookLogin()
  {
    this.ser.facebookLogin()
  }


}
