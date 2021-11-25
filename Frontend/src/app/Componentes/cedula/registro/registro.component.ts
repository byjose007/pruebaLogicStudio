import { RegistroService } from './../../../Servicios/registro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;


    constructor(private formBuilder: FormBuilder, private registroService: RegistroService) { }
  public ngOnInit(){
    this.registerForm = this.formBuilder.group({   
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        fechaNacimiento: ['', [Validators.required]]       
    });
}

  Guardar(){

  if (this.registerForm.invalid) {
            return;
        }

        this.registroService.sendMail(this.registerForm.value).subscribe(() => {
          console.log( "Se ha registrado correctamente");
          });
    
  }



 
}
