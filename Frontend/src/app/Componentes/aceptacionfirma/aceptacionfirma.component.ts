import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FirmaserviceService } from 'src/app/Servicios/firmaservice.service';

@Component({
  selector: 'app-aceptacionfirma',
  templateUrl: './aceptacionfirma.component.html',
  styleUrls: ['./aceptacionfirma.component.css']
})
export class AceptacionfirmaComponent implements OnInit {

  boton:boolean=false;
  botonNombre: string="Firmar Documento";
  terminos:boolean=true;
  siguiente:boolean=true;
  nsiguiente:boolean=false
  verpdf:boolean=false
  tipo64:boolean=true
  tipoURL:boolean=true
  motivo: string=""
  pdfSrc :string=""
  documento= sessionStorage.getItem("nombre_documento")
  constructor(private router: Router,private _sanitizer: DomSanitizer,
    private messageService: MessageService,
    private servicio: FirmaserviceService) { }
  Docurl:any
  
  ngOnInit(): void {
    if(sessionStorage.getItem("tipoDoc")=="2")
    {
      this.botonNombre="Confirmar" 
    }
    
    this.terminos=false;
    this.boton=true;
    this.verpdf=true;
      /** }else{ //vista base64
      this.tipo64=false;
      this.tipoURL=true;
    }*/
    
  }
  async Siguiente(){
    await this.Acepto()
    if(sessionStorage.getItem("tipoDoc")=="1")
    {
      this.router.navigate(['/recomendacion'])
    }else
    {
      
        await this.enviaraFirmar();
      
        sessionStorage.setItem("tipoFin","Completo")
      this.router.navigate(['/fin'])
    }
    
  }
  enviaraFirmar() {
    return new Promise((resolve, reject) => {
      var resu = true;
      let ref = sessionStorage.getItem("refBase").trim();
      
      this.servicio.generarDocuentoFirmadoElectronicamente(ref)
        .subscribe((its: any) => {
          console.log(its)
          resolve(resu);
        })

    })
  }

  firmar(){
    if (sessionStorage.getItem("BanderaPruebaVida") == "1") {
      this.router.navigate(['/instruccionesvida'])
      }else{
        this.terminos=false;
        this.boton=true;
        this.verpdf=true;
      }
   
  }
  change(){
  if(this.nsiguiente==true)
  {
    this.siguiente=false
  }else{
    this.siguiente=true
  }
  }
  CancelarProceso(){
    this.messageService.add({ severity: 'warn', summary: 'Firma Electrónica', detail: `¿Esta seguro que desea rechazar el proceso de firma electrónica?`, sticky: true,key:"c2" });
  }
  onReject() {
    this.messageService.clear('c2')
  }
  async onEnendido() {
    //cierra proceso
    sessionStorage.setItem("tipoFin","cancelado");
    await this.anularDocumento()
  }

  anularDocumento() {
    return new Promise((resolve, reject) => {
      var resu = true;      
      this.servicio.anularProceso(sessionStorage.getItem("refBase"),this.motivo)
        .subscribe((its: any) => {
          console.log(its)
          
          this.router.navigate(['/fin']);
          this.onReject()
          resolve(resu);
        })

    })
  }
  Acepto() {
    return new Promise((resolve, reject) => {
      var resu = true;      
      this.servicio.guardarAceptacion(sessionStorage.getItem("id") )
        .subscribe((its: any) => {
          console.log(its)            
          resolve(resu);
        })

    })
  }
  SolicitarCertificado(){
    return new Promise((resolve, reject) => {
      var resu = true;      
      this.servicio.SolicitarCertificado(sessionStorage.getItem("id") )
        .subscribe((its: any) => {
          console.log(its)            
          resolve(resu);
        })

    })
  }
}