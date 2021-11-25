import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-firma-digital',
  templateUrl: './firma-digital.component.html',
  styleUrls: ['./firma-digital.component.css']
})
export class FirmaDigitalComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
 
  }
  Siguiente(){
    sessionStorage.setItem("firma",this.signaturePad.toDataURL())
    this.router.navigate(['/verificarfirma'])
  }
    
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
   
   signaturePadOptions: Object = { 
    'maxWidth': 2,
    'minWidth': 1,
    'penColor': '#082C60'
  };

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log('end drawing s');
  
  }
 
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
  Limpiar(){
    this.signaturePad.clear();
  }
  

}
