import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  CreateAccountForm;

  constructor(private http:HttpClient) { 
    this.CreateAccountForm=new FormGroup({
      UserName :new FormControl(),
      Email:new FormControl(),
      Password : new FormControl(),
      ConfirmPassword : new FormControl(),
      MobileNo :new FormControl()
      })
  }

  ngOnInit() {
}
userData(){
  console.log(this.CreateAccountForm);
  this.http.post("http://localhost:8000/register",this.CreateAccountForm.value)
  .subscribe(
    (data:any)=>{
      console.log(data);
    }
  )

}
}
