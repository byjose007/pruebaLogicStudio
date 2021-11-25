import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirmaserviceService {
  constructor(
    private http: HttpClient
  ) { }
  private ApiRest: string = "/APIRestFirmaElectronica/"

  consultaInfoDocumento(id: number) {
    return this.http.get(`${this.ApiRest}api/FirmaElectronica/consulta-doc-a-firmar?id=${id}`);
  }

  guardarCedula(id: any, frontal: string, posterior: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let requestBody = {
      "id": `${id}`,
      "imagen1": `${frontal}`,
      "imagen2": `${posterior}`,
    }

    return this.http.post<string>(`${this.ApiRest}api/FirmaElectronica/guarda-cedula`, requestBody, httpOptions).pipe()
  }
  guardarPruebaVida(id: any, video: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
        
      })
    }
    let requestBody = {
      "id": `${id}`,
      "video1": `${video}`,      
    }

    return this.http.post<string>(`${this.ApiRest}api/FirmaElectronica/guarda-prueba-vida`, requestBody, httpOptions).pipe()
  }
  guardarFirma(id: any, firma: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let requestBody = {
      "id": `${id}`,
      "imagen1": `${firma}`,
      
    }

    return this.http.post<string>(`${this.ApiRest}api/FirmaElectronica/guarda-firma`, requestBody, httpOptions).pipe()
  }
  guardarReconocimiento(id: any, firma: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let requestBody = {
      "id": `${id}`,
      "imagen1": `${firma}`,
      
    }

    return this.http.post<string>(`${this.ApiRest}api/FirmaElectronica/guarda-reconocimiento`, requestBody, httpOptions).pipe()
  }
  guardarGeoposicionamiento(id: any, longitud: string,latitud:string) {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let requestBody = {
      "id": `${id}`,
      "texto1": `${longitud}`,
      "texto2": `${latitud}`,
      
    }

    return this.http.post<string>(`${this.ApiRest}api/FirmaElectronica/guarda-geoposicionamiento`, requestBody, httpOptions).pipe()
  }
  generarDocuentoFirmado(correos: string, refBase: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
        
      })
    }
    let requestBody = {
      "correo": `${correos}`,
      "refbase": `${refBase}`,      
    }

    return this.http.post<string>(`${this.ApiRest}api/FirmaElectronica/generar-documento-firmado`, requestBody, httpOptions).pipe()
  }
  anularProceso(refBase:string, motivo: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"

      })
    }
    let requestBody = {

      "refbase": `${refBase}`,
      "motivo": `${motivo}`,

    }

    return this.http.post<string>(`${this.ApiRest}api/FirmaElectronica/anular-documento`, requestBody, httpOptions).pipe()
  }
  guardarAceptacion(id: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let requestBody = {
      "id": `${id}`          
    }

    return this.http.post<string>(`${this.ApiRest}api/FirmaElectronica/guarda-aceptacion-terminos`, requestBody, httpOptions).pipe()
  }
  
  SolicitarCertificado(documento:any) {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/pdf"
      })
    }
    let requestBody = {
      "documentoByte": `${documento}`          
    }
    return this.http.put(`${this.ApiRest}api/FirmaElectronica/EmisionUsuario_PN`, requestBody, httpOptions).pipe()    
  }

  
  generarDocuentoFirmadoElectronicamente( refBase: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
        
      })
    }
    let requestBody = {
  
      "refbase": `${refBase}`,      
    }

    return this.http.post<string>(`${this.ApiRest}api/FirmaElectronica/generar-documento-firmado-electronicamente`, requestBody, httpOptions).pipe()
  }
}