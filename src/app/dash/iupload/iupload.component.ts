import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize  } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-iupload',
  templateUrl: './iupload.component.html',
  styleUrls: ['./iupload.component.css']
})
export class IuploadComponent implements OnInit {

  fb
  downloadURL:Observable<string>
  private storage:AngularFireStorage
  constructor( ) { }

  ngOnInit(): void {
  }

  uploadImage(event)
  {
    var n=Date.now();
    const file= event.target.files[0];
    const filePath= `RandomImage/${n}`;
    const fileRef= this.storage.ref(filePath)

    const task= this.storage.upload(`RandomImage/${n}`, file);
    task.snapshotChanges()
    .pipe(
        finalize(()=>{
          this.downloadURL= fileRef.getDownloadURL();
          this.downloadURL.subscribe(url=>{
            if(url)
            {
              this.fb=url
            }
            console.log(this.fb)
          });
        })
    )
    .subscribe(url=>{
      if(url){
        console.log(url)
      }
    })
  }

}
