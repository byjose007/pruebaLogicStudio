import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruccionespruebavida',
  templateUrl: './instruccionespruebavida.component.html',
  styleUrls: ['./instruccionespruebavida.component.css']
})
export class InstruccionespruebavidaComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Siguiente(){
    this.router.navigate(['/pruebavida'])
  }


}
