import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { FirmaserviceService } from 'src/app/Servicios/firmaservice.service';

@Component({
  selector: 'app-documento-afirmar',
  templateUrl: './documento-afirmar.component.html',
  styleUrls: ['./documento-afirmar.component.css']
})
export class DocumentoAFirmarComponent implements OnInit {
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
  tipo :string=""
  documento= sessionStorage.getItem("nombre_documento")
  constructor(private router: Router,private _sanitizer: DomSanitizer,
    private messageService: MessageService,
    private servicio: FirmaserviceService) { }
  Docurl:any
  docreferencia:string=sessionStorage.getItem("DocumentoRef")
  ngOnInit(): void {
    
    if(sessionStorage.getItem("tipoDoc")=="1")
    {
      this.botonNombre="Confirmar" 
    }
    if(sessionStorage.getItem("tipoDoc")=="2")
    {
      this.tipo="de la"
      this.botonNombre="Confirmar" 
    }else{
      this.tipo="del"
    }
    this.pdfSrc = sessionStorage.getItem("documento");
   
      this.tipo64=true;
      this.tipoURL=false;
      this.Docurl = this._sanitizer.bypassSecurityTrustHtml('<html><center> <iframe width="100%" height="500px" frameBorder="0" src="'+this.pdfSrc+'"></iframe></center> </html>');
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
      if(sessionStorage.getItem("tipoDoc")!="2")
      {
        await this.enviaraFirmar();
      }
      
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

  async firmar(){
    if (sessionStorage.getItem("BanderaPruebaVida") == "1") {
      this.router.navigate(['/instruccionesvida'])
      }else{
        if(sessionStorage.getItem("tipoDoc")=="2")
        {
          sessionStorage.setItem("tipoFin","Completo")
          await this.enviaraFirmar();
          this.router.navigate(['/fin'])
        }else{

          this.router.navigate(['/aceptacion'])
        
        }

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
    if(sessionStorage.getItem("tipoDoc")!="2")
      {
        this.messageService.add({ severity: 'warn', summary: 'Firma Electrónica', detail: '¿Está seguro que desea rechazar el proceso de firma electrónica del presente '+this.documento+'?', sticky: true,key:"c2" });
      }else{
        this.messageService.add({ severity: 'warn', summary: 'Aceptación Electrónica', detail: '¿Está seguro que desea rechazar el proceso de aceptación electrónica de la presente '+this.documento+'?', sticky: true,key:"c2" });
      }
   
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