import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  
  users : user;
  formRegister:FormGroup;

  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private router:Router,
  ) {
    this.buildForm();
   }

  ngOnInit() {}

  onSave(){
    console.log(this.formRegister.value)

    if(this.formRegister.valid){
      console.log('valido')
      const userData = {
        nombre: this.formRegister.value.nombre,
        apellido : this.formRegister.value.apellido,
        direccion: this.formRegister.value.direccion,
        password:this.formRegister.value.password,
        repeat:this.formRegister.value.repeat,
        tipo: this.formRegister.value.tipo,
        email: this.formRegister.value.email,
      } 
      this.authService.createUser(userData).subscribe( response => {
        console.log('response registro',response)
        if(response){
          this.formRegister.reset();
          this.router.navigateByUrl('/home');
        }else{
          alert('Error, ingrese los datos denuevo')
        }
      })
    }else{

      console.log('in-valido')
    }
  }

  private buildForm(){
    this.formRegister = this.formBuilder.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      password:['',[Validators.required]],
      repeat:['',[Validators.required]],
      direccion:['',[Validators.required]],
      tipo:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
    });
  }


}
