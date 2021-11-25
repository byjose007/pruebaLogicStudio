import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fin',
  templateUrl: './fin.component.html',
  styleUrls: ['./fin.component.css']
})
export class FinComponent implements OnInit {
  tipo: any = sessionStorage.getItem("tipoFin");
  constructor() { }
  extra:string =""
  exito:string ="¡El documento fue procesado con éxito!"
  verCancelado: boolean = true
  verEnvio: boolean = true
  ngOnInit(): void {
    this.tipo = sessionStorage.getItem("tipoFin");
    if( sessionStorage.getItem("tipoDoc")=="2")
      {
        this.exito="Procesado con éxito, recuerde enviar sus documentos y papeleta de pago por inscripción más primera cuota mensual a su Asesor(a) Comercial quien ya se encuentra notificado."
        this.extra=" y se notificó a su Asesor(a) Comercial"
      }
      if( sessionStorage.getItem("tipoDoc")!="1" && sessionStorage.getItem("tipoDoc")!="2")
      {
        this.extra=" y se notificó a su Asesor(a) Comercial/Supervisor(a) Comercial"
      }
    if (this.tipo == "cancelado") {
      this.verCancelado = false
    } else {
      this.verEnvio = false
    }
  }
  salir() {
    window.close()
  }
}
