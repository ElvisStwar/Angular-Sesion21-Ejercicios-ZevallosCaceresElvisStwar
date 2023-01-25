import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email!:string;
  password!:string;
  mensajeCorrecto=false;
  mensajeIncorrecto=false

  public formLogin!: FormGroup;
  static mensajeCorrecto: any;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
      
    this.formLogin = this.formBuilder.group({
      email: ['',
    [
      Validators.required,
    ]],

      password: ['',
      Validators.required
    ]
    })
    console.log(this.formLogin.valid)
  }
  CamposCorrectos = false;
  send():any{
    this.CamposCorrectos = this.formLogin.valid;
    if(this.email=="AD" && this.password=="123456"){
      this.mensajeCorrecto=true;
      this.mensajeIncorrecto=false;
      
    }else{
      this.mensajeIncorrecto=true;
      this.mensajeCorrecto=false;
    }

    localStorage.setItem('email', this.email);
    localStorage.setItem('password', this.password);
    
  }


}
