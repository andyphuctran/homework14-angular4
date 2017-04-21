import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup, FormsModule, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {MyHttpServiceService} from '../my-http-service.service';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  myForm: FormGroup;
  name: FormControl;
  email: FormControl;
  post: FormControl;

  userService:any;
  postService:any;
  constructor(private fb:FormBuilder, private myService:MyHttpServiceService ) { 
    // this.myForm=fb.group({
    //   'name':['',[Validators.required]],
    //   'email':['',[Validators.required]],
    //   'post':['',[Validators.minLength(10)]]
    // });
    this.name=new FormControl('',[Validators.required]);
    this.email=new FormControl('',[Validators.required]);
    this.post=new FormControl('',[Validators.required,Validators.minLength(10)]);
    this.myForm=fb.group({
      name:this.name,
      email:this.email,
      post:this.post
    });
    this.myForm.statusChanges.subscribe(
      (data:any) => console.log(data)
    );

    this.myService.getUsers().subscribe(
      response => this.userService=JSON.parse(response['_body']),
      error => console.log(error)
    );
    this.postService=this.myService.getPosts().subscribe(
      response => this.postService=(JSON.parse(response['_body'])).map(item => item.body).join("\n"),
      error => console.log(error)
    );
  }

  onSubmit(){
    console.log(this.myForm.value)
  }
  getData(){
    
    console.log(this.userService);
    console.log(this.postService);
    this.myForm.controls['name'].setValue(this.userService.name);
    this.myForm.controls['email'].setValue(this.userService.email);
    this.myForm.controls['post'].setValue(this.postService);
  }
  ngOnInit() {
  }

}
