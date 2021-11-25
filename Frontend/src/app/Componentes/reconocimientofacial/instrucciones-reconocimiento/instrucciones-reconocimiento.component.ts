import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrucciones-reconocimiento',
  templateUrl: './instrucciones-reconocimiento.component.html',
  styleUrls: ['./instrucciones-reconocimiento.component.css']
})
export class InstruccionesReconocimientoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Siguiente(){
    this.router.navigate(['/reconocimiento'])
  }


}
