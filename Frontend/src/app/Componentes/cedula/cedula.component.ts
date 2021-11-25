import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FirmaserviceService } from 'src/app/Servicios/firmaservice.service';

@Component({
  selector: 'app-cedula',
  templateUrl: './cedula.component.html',
  styleUrls: ['./cedula.component.css']
})
export class CedulaComponent implements OnInit {

  ceduFrontal: string = null
  ceduPosterior: string = null
  constructor(private router: Router,
    private servicio: FirmaserviceService) { }

  public ngOnInit(): void {

    this.ceduFrontal = sessionStorage.getItem('cedulaFrontal')

    this.ceduPosterior = sessionStorage.getItem('cedulaPosterior')
    console.log(sessionStorage.getItem("id"));

  }
  
  async Siguiente() {
    /*await this.GuardarFotos()
    if (sessionStorage.getItem("BanderaReconocimiento") == "1") {
      this.router.navigate(['/instruccionesreconocimiento'])    
    } else {
      this.router.navigate(['/verdocumento'])
    }*/
    this.router.navigate(['/instruccionesvida'])   
  }

  volverTomar() {
    this.router.navigate(['/capturafrontal'])
  }

  GuardarFotos() {
    return new Promise((resolve, reject) => {
      this.servicio.guardarCedula(sessionStorage.getItem("id"), this.ceduFrontal, this.ceduPosterior)
        .subscribe((its: any) => {
          var resu = true;
          console.log(its)
          if (its.Data != null) {
          }
          resolve(resu);
        })
    })
  }
}
