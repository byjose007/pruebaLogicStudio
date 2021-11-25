import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruccionescedula',
  templateUrl: './instruccionescedula.component.html',
  styleUrls: ['./instruccionescedula.component.css']
})
export class InstruccionescedulaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Siguiente(){
    this.router.navigate(['/capturafrontal'])
  }

  Regresar(){
    this.router.navigate(['/Documento'])
  }

}
