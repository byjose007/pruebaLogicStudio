import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { CodigoComponent } from './componentes/codigo/codigo.component';
import { PruebavidaComponent } from './componentes/pruebavida/pruebavida.component';
import { InstruccionescedulaComponent } from './componentes/cedula/instruccionescedula/instruccionescedula.component';
import { CedulaComponent } from './componentes/cedula/cedula.component';
import { InstruccionespruebavidaComponent } from './componentes/pruebavida/instruccionespruebavida/instruccionespruebavida.component';
import { CapturafrontalComponent } from './componentes/cedula/capturafrontal/capturafrontal.component';
import { CapturaposteriorComponent } from './componentes/cedula/capturaposterior/capturaposterior.component';
import { ReconocimientofacialComponent } from './componentes/reconocimientofacial/reconocimientofacial.component';
import { RecomendacionComponent } from './componentes/documento-afirmar/recomendacion/recomendacion.component';
import { DocumentoAFirmarComponent } from './componentes/documento-afirmar/documento-afirmar.component';
import { FirmaDigitalComponent } from './componentes/firma-digital/firma-digital.component';
import { VerificafirmaComponent } from './componentes/firma-digital/verificafirma/verificafirma.component';
import { EnvioDocumentoComponent } from './componentes/envio-documento/envio-documento.component';
import { FinComponent } from './componentes/fin/fin.component';
import { InstruccionesReconocimientoComponent } from './componentes/reconocimientofacial/instrucciones-reconocimiento/instrucciones-reconocimiento.component';
import { AceptacionfirmaComponent } from './Componentes/aceptacionfirma/aceptacionfirma.component';
import { RegistroComponent } from './Componentes/cedula/registro/registro.component';


const routes: Routes = [
  { path: 'Documento', component: BienvenidoComponent },
  { path: 'codigo', component: CodigoComponent },
  { path: 'instruccionesvida', component: InstruccionespruebavidaComponent },
  { path: 'instruccionescedula', component: InstruccionescedulaComponent },
  { path: 'pruebavida', component: PruebavidaComponent },
  { path: 'capturacedula', component: CedulaComponent },
  { path: 'capturafrontal', component: CapturafrontalComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'capturaposterior', component: CapturaposteriorComponent },
  { path: 'reconocimiento', component: ReconocimientofacialComponent },
  { path: 'recomendacion', component: RecomendacionComponent },
  { path: 'verdocumento', component: DocumentoAFirmarComponent },
  { path: 'firmadigital', component: FirmaDigitalComponent },
  { path: 'verificarfirma', component: VerificafirmaComponent },
  { path: 'envio', component: EnvioDocumentoComponent },
  { path: 'fin', component: FinComponent },
  { path: 'instruccionesreconocimiento', component: InstruccionesReconocimientoComponent },
  { path: 'aceptacion', component: AceptacionfirmaComponent },
  { path: '',
    redirectTo: '/Documento',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

