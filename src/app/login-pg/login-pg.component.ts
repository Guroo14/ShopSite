import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-pg',
  templateUrl: './login-pg.component.html',
  styleUrls: ['./login-pg.component.scss']
})
export class LoginPgComponent implements OnInit{


  
    constructor(private formBuilder : FormBuilder){}

    public loginForm!: FormGroup

    public signupUsers:any = [];

    public signupObj: any = {
      userName:"",
      email:"",
      password:""
    }
    public loginObj : any = {
      userName:"",
      password:""
    }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers')
    if(localData != null){
      this.signupUsers = JSON.parse(localData)
    }
    this.loginForm = this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
  

  onSignUp(){
    this.signupUsers.push(this.signupObj)
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName:"",
      email:"",
      password:""
    }
  }

  onLogin(){
    const isUserExist = this.signupUsers.find((m: any) => m.userName === this.loginObj.userName &&
    m.password === this.loginObj.password);
    if(isUserExist != undefined){
      alert('User Login Successfully');
    }
    else{
      alert('wrong condetials')
    }
  }

  

  

 

  



   // public saveData() {
  //   this.isShow = true;
  //   localStorage.setItem('key',this.email);
  // }
  // public getData() {
  //   this.text = localStorage.getItem('key'); 
  // }
}
