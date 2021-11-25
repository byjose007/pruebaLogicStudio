import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirmaserviceService } from 'src/app/Servicios/firmaservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  nombreDocumento: string = "funcionalidades";
  tipo: string = "prueba";
  estado: number = 4;
  verProceso: boolean = true;
  documentofirmado: boolean = true;
  documentoexpiro: boolean = true;
  documentoNoEncontrado: boolean = true;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private servicio: FirmaserviceService) { }

  async ngOnInit(): Promise<void> {
    sessionStorage.clear()
   /* await this.cargaInfoDocumento()
    if (this.estado == 0) {
      this.verProceso = false
    }
    if (this.estado == 4) {
      this.documentoNoEncontrado = false
    }
    if (this.estado == 1) {
      this.documentofirmado = false
    }
    if (this.estado == 2 || this.estado == 3) {
      this.documentoexpiro = false
    }*/
    this.verProceso=false;
  
    await this.Coordenadas();
  }
  async Siguiente() {
   /* await this.GuardaGeoposicionamiento();
    if (sessionStorage.getItem("BanderaCodigo") == "1") {
      this.router.navigate(['/codigo'])
    } else if (sessionStorage.getItem("BanderaCedula") == "1") {
      this.router.navigate(['/instruccionescedula'])     
    } else if (sessionStorage.getItem("BanderaReconocimiento") == "1") {
      this.router.navigate(['/instruccionesreconocimiento'])
    } else {
      this.router.navigate(['/verdocumento'])
    }*/
    this.router.navigate(['/instruccionescedula'])
  }
  cargaInfoDocumento() {

    return new Promise((resolve, reject) => {

      this.servicio.consultaInfoDocumento(this.route.snapshot.params.id)
        .subscribe((its: any) => {
          var resu = true;
          console.log(its)
          if (its.Data != null) {
            sessionStorage.setItem("id", its.Data.sol_id)
            sessionStorage.setItem("cedula", its.Data.sol_cedula)
            sessionStorage.setItem("codigoverificacion", its.Data.sol_cod_vali)
            sessionStorage.setItem("nombre", its.Data.sol_nombre)
            sessionStorage.setItem("nombre_documento", its.Data.sol_nombre_documento)
            this.nombreDocumento = its.Data.sol_nombre_documento
            sessionStorage.setItem("documento", its.Data.sol_doc_a_firmar64)
            sessionStorage.setItem("documento_firmado", its.Data.sol_doc_firmado)
            sessionStorage.setItem("solicitud", its.Data.sol_doc_firmado)
            sessionStorage.setItem("correo", its.Data.sol_correo)
            sessionStorage.setItem("BanderaCodigo", its.Data.sol_vali_codigo)
            sessionStorage.setItem("BanderaCedula", its.Data.sol_vali_cedu)
            sessionStorage.setItem("BanderaPruebaVida", its.Data.sol_vali_prueba_vida)
            sessionStorage.setItem("BanderaReconocimiento", its.Data.sol_vali_reconocimiento)
            sessionStorage.setItem("tipoDoc", its.Data.sol_tipo_doc)
            if( sessionStorage.getItem("tipoDoc")=="2")
            {
              this.tipo="aceptación"
            }else{
              this.tipo="firma"
            }
            
            sessionStorage.setItem("refBase", its.Data.sol_ref_base)
            if (its.Data.sol_doc_ref == 'undefined ' || its.Data.sol_doc_ref == null) {
              sessionStorage.setItem("DocumentoRef", "")
            } else {
              sessionStorage.setItem("DocumentoRef", its.Data.sol_doc_ref)
            }
            if (its.Data.sol_correo_respaldo == 'undefined ' || its.Data.sol_correo_respaldo == null) {
              sessionStorage.setItem("correoRespaldo", "")
            } else {
              sessionStorage.setItem("correoRespaldo", its.Data.sol_correo_respaldo)
            }
            if (its.Data.sol_correo_respaldo_dos == 'undefined ' || its.Data.sol_correo_respaldo_dos == null) {
              sessionStorage.setItem("correoRespaldodos", "")
            } else {
              sessionStorage.setItem("correoRespaldodos", its.Data.sol_correo_respaldo_dos)
            }
            if (its.Data.sol_texto_video == 'undefined ' || its.Data.sol_texto_video == null) {
              sessionStorage.setItem("textoVideo", "")
            } else {
              sessionStorage.setItem("textoVideo", its.Data.sol_texto_video)
            }
            console.log(its)
            this.estado = its.Data.sol_estado
          } else {
            this.estado = 4;
          }
          resolve(resu);
        })

    })
  }
  VerDocumento() {
    window.open(sessionStorage.getItem("documento_firmado"), "_blank");
  }
  Coordenadas() {
    //navigator.geolocation.getCurrentPosition(this.alExito(),alerror);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(alExito, alerror);
      function alExito(info) {
        sessionStorage.setItem("latitud", info.coords.latitude);
        sessionStorage.setItem("longitud", info.coords.longitude);

      }
      function alerror(error) {
        alert("No se pudo obtener información de su ubicación.")
      }

    } else {
      alert("Dispositivo no soporta geolocalización.")
    }
  }
  GuardaGeoposicionamiento() {

    return new Promise((resolve, reject) => {
      console.log(sessionStorage.getItem("longitud"))
      this.servicio.guardarGeoposicionamiento(sessionStorage.getItem("id"), sessionStorage.getItem("longitud"), sessionStorage.getItem("latitud"))
        .subscribe((its: any) => {
          var resu = true;
          console.log(its)
          resolve(resu);
        })

    })
  }
}