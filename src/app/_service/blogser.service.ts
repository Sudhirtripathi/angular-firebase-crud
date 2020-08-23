import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Blog } from '../model/blog';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class BlogserService {

  blog:Blog;
  blogList:AngularFireList<any>
  private firebase:AngularFireDatabase
  private router:Router
  private afAuth:AngularFireAuth

  constructor( ) { 
    
    this.blogList=this.firebase.list('blogs');
  }

  insertBlog(blog)
  {
    this.blogList.push({

      title: blog.btitle,
      desc: blog.bdesc,
      author: blog.bauthor,
      date: blog.bdate,
    })
  }

  getBlog()
  {
    return this.blogList.snapshotChanges()
  }

  deleteBlog(id)
  {
    this.blogList.remove(id)
  }

  setter(data:Blog)
  {
   this.blog=data;
   console.log(this.blog)
    this.router.navigateByUrl('/admin/ublog')
  }

  getter()
  {
    return this.blog;
  }

  updateBlog(data)
  {
    this.blogList.update(data.$key,{
      title: data.title,
      desc: data.desc,
      author: data.author,
      date: data.date,
    })
  }


  async googleLogin()
  {
    await this.afAuth.signInWithEmailAndPassword('email', 'paas')
    this.router.navigateByUrl('/admin');
  }

  async facebookLogin()
  {
    await this.afAuth.signInWithPopup(new auth.FacebookAuthProvider())
    this.router.navigateByUrl('/admin');
  }
}
