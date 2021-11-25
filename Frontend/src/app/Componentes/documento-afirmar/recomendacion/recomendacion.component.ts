import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recomendacion',
  templateUrl: './recomendacion.component.html',
  styleUrls: ['./recomendacion.component.css']
})
export class RecomendacionComponent implements OnInit {

  
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  Siguiente(){
    this.router.navigate(['/firmadigital'])
  }
}