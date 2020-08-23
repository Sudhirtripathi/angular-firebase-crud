import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogserService } from 'src/app/_service/blogser.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {


  blogForm:FormGroup
  private fb:FormBuilder
   private blogser:BlogserService
  constructor( ) {

    this.blogForm=this.fb.group({
      'btitle':['', Validators.required],
      'bauthor':['', Validators.required],
      'bdesc':['', Validators.required],
      'bdate':['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  addBlog()
  {
    let data= this.blogForm.getRawValue()
    console.log(data)
    this.blogser.insertBlog(data)
  }

}
