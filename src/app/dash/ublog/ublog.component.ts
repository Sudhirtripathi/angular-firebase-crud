import { Component, OnInit } from '@angular/core';
import { BlogserService } from 'src/app/_service/blogser.service';
import { Blog } from 'src/app/model/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ublog',
  templateUrl: './ublog.component.html',
  styleUrls: ['./ublog.component.css']
})
export class UblogComponent implements OnInit {

  blogData:Blog;
  private blogser:BlogserService;
   private router:Router
  constructor() {

    this.blogData=this.blogser.getter()
   }

  ngOnInit(): void {
  }

  update()
  {
    this.blogser.updateBlog(this.blogData);
   setTimeout(()=>{this.router.navigateByUrl('/admin/ablog')}, 500)
  }

}
