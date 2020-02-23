import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm

  constructor(public router: ActivatedRoute,private http:HttpClient) { 
    this.LoginForm=new FormGroup({
      Email : new FormControl('',[Validators.required,Validators.email]),
      Password : new FormControl('',Validators.required)
      });
  }

  ngOnInit() {
  }
  onSubmit() {        
    console.log(this.LoginForm.value);
    this.http.post("http://localhost:8000/login",this.LoginForm.value)
    .subscribe(
      (data:any)=>{
        console.log(data);
      }
    )

    // this.http.get("http://localhost:8000/content")
    // .subscribe(
    //   (data:any)=>{
    //     console.log(data);
    //   }
    // )
    
   }

}
