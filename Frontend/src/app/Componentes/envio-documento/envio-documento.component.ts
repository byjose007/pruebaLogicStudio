import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listaCorreos } from 'src/app/Modelos/ListaCorreos';
import { MessageService } from 'primeng/api';
import { FirmaserviceService } from 'src/app/Servicios/firmaservice.service';

@Component({
  selector: 'app-envio-documento',
  templateUrl: './envio-documento.component.html',
  styleUrls: ['./envio-documento.component.css']
})
export class EnvioDocumentoComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
