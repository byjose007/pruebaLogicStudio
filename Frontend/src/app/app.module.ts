import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
//CAMARA
import { MatVideoModule } from 'mat-video';
import {WebcamModule} from 'ngx-webcam';

//ANGULAR MATERIAL
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
//PRIMENG
import {ButtonModule} from 'primeng/button';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { CodigoComponent } from './componentes/codigo/codigo.component';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import {CheckboxModule} from 'primeng/checkbox';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';

//NGX

import { NgxSpinnerModule } from "ngx-spinner";
//NG2
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SignaturePadModule } from 'angular2-signaturepad';
//COMPONENTES
import { PruebavidaComponent } from './componentes/pruebavida/pruebavida.component';
import { CedulaComponent } from './componentes/cedula/cedula.component';
import { InstruccionescedulaComponent } from './componentes/cedula/instruccionescedula/instruccionescedula.component';
import { InstruccionespruebavidaComponent } from './componentes/pruebavida/instruccionespruebavida/instruccionespruebavida.component';
import { CapturafrontalComponent } from './componentes/cedula/capturafrontal/capturafrontal.component';
import { CapturaposteriorComponent } from './componentes/cedula/capturaposterior/capturaposterior.component';
import { ReconocimientofacialComponent } from './componentes/reconocimientofacial/reconocimientofacial.component';
import {MessageService} from 'primeng/api';
import { DocumentoAFirmarComponent } from './componentes/documento-afirmar/documento-afirmar.component';
import { RecomendacionComponent } from './componentes/documento-afirmar/recomendacion/recomendacion.component';
import { FirmaDigitalComponent } from './componentes/firma-digital/firma-digital.component';
import { VerificafirmaComponent } from './componentes/firma-digital/verificafirma/verificafirma.component';
import { EnvioDocumentoComponent } from './componentes/envio-documento/envio-documento.component';

import { FinComponent } from './componentes/fin/fin.component';
import { InstruccionesReconocimientoComponent } from './componentes/reconocimientofacial/instrucciones-reconocimiento/instrucciones-reconocimiento.component'
import { LoadingScreenInterceptor } from './Servicios/loadspinner/loading-screen-interceptor.service';
import { LoadspinnerService } from './Servicios/loadspinner/loadspinner.service';
import { AceptacionfirmaComponent } from './Componentes/aceptacionfirma/aceptacionfirma.component';
import { RegistroComponent } from './Componentes/cedula/registro/registro.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    CodigoComponent,    
    PruebavidaComponent,
    CedulaComponent,
    InstruccionescedulaComponent,
    InstruccionespruebavidaComponent,
    CapturafrontalComponent,
    CapturaposteriorComponent,
    ReconocimientofacialComponent,
    DocumentoAFirmarComponent,
    RecomendacionComponent,
    FirmaDigitalComponent,
    VerificafirmaComponent,
    EnvioDocumentoComponent,    
    FinComponent,
    InstruccionesReconocimientoComponent,
    AceptacionfirmaComponent,
    RegistroComponent


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    ButtonModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatVideoModule,
    WebcamModule,
    CarouselModule,
    MatInputModule,
    FormsModule,
    ToastModule,
    HttpClientModule,
    PdfViewerModule,
    CheckboxModule,
    SignaturePadModule,
    InputNumberModule,
    InputTextareaModule,
    NgxSpinnerModule,
    InputMaskModule,


  ],
  providers: [ MessageService,
    LoadspinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    }],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
