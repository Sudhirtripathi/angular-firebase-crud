import { Component, OnInit } from '@angular/core';
import { BlogserService } from 'src/app/_service/blogser.service';

@Component({
  selector: 'app-ablog',
  templateUrl: './ablog.component.html',
  styleUrls: ['./ablog.component.css']
})
export class AblogComponent implements OnInit {

  dataArray;
  private blogser:BlogserService
  constructor( ) { }

  ngOnInit(): void {

    this.blogser.getBlog()
    .subscribe(res=>{
     this.dataArray=res.map(list=>{
        return{
          $key:list.key,
          ...list.payload.val()
        }
      })
      console.log(this.dataArray)
    })

  }

  delete(id)
  {
    this.blogser.deleteBlog(id)
  }

  edit(data)
  {
    console.log(data)
    this.blogser.setter(data);
  }

}
