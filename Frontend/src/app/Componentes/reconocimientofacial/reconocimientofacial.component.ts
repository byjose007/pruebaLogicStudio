import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import * as faceapi from 'face-api.js';

import { Router } from '@angular/router';
import { FirmaserviceService } from 'src/app/Servicios/firmaservice.service';
import { LoadspinnerService } from 'src/app/Servicios/loadspinner/loadspinner.service';





@Component({
  selector: 'app-reconocimientofacial',
  templateUrl: './reconocimientofacial.component.html',
  styleUrls: ['./reconocimientofacial.component.css']
})

export class ReconocimientofacialComponent implements OnInit {

  constructor(private router: Router
    , private servicio: FirmaserviceService
    , private loadingScreenService: LoadspinnerService) {


  }
  @ViewChild('video', { static: false }) videos;
  @ViewChild('overlayVid', { static: false }) overlayVids;
  Canvas: HTMLCanvasElement
  video: HTMLVideoElement
  webcamImage: string = ""
  public loading: boolean;
  public comenzo: boolean = false;
  public videocaptura: boolean = true;
  
  public showWebcam = false;
  tomofoto: boolean = false;
  ngAfterViewInit() {
    // set the initial state of the video
    this.video = this.videos.nativeElement;
    this.Canvas = this.overlayVids.nativeElement;

  }

  async ngOnInit(): Promise<void> {

    this.videocaptura=true
    console.log( this.videocaptura)
    await this.cargarDatos();

  }
  async cargarDatos() {
    const MODEL_URL = './assets/models/'
    Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
    ]).then();
  }
  startVideo() {
    navigator.getUserMedia(
      { video: {} },
      stream => (this.video.srcObject = stream),
      err => console.error(err)
    );
  }
  detectar() {
    this.loadingScreenService.startLoading()
    this.videocaptura=false
    this.comenzo = true
    this.startVideo();

    this.video.addEventListener("playing", () => {

      this.Canvas = faceapi.createCanvasFromMedia(this.video);



      const displaySize = { width: this.video.width, height: this.video.height };
      faceapi.matchDimensions(this.Canvas, displaySize);

      setInterval(async () => {
        if (this.tomofoto == false) {
          const detections = await faceapi
            .detectSingleFace(this.video, new faceapi.SsdMobilenetv1Options())
            //.withFaceLandmarks()
            .withFaceExpressions();

          if (detections != undefined) {
            if (detections.expressions.happy > 0.99) {
              console.log("FOTO")
              await this.CapturarFoto()
              this.tomofoto = true;
            }

            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            this.Canvas.width = this.video.videoWidth;
            this.Canvas.height = this.video.videoHeight;
            this.Canvas.getContext("2d").clearRect(0, 0, this.Canvas.width, this.Canvas.height);

            faceapi.draw.drawDetections(this.Canvas, resizedDetections);
            //faceapi.draw.drawFaceLandmarks(this.Canvas, resizedDetections);
            faceapi.draw.drawFaceExpressions(this.Canvas, resizedDetections);
          }
        }
      }, 500);
    });
    this.loadingScreenService.stopLoading()
  }
  nuevointento() {
    this.video.play();
    this.webcamImage=null
    this.videocaptura=false
    this.tomofoto=false
  }
  GuardafotoReconocimiento() {

    return new Promise((resolve, reject) => {

      this.servicio.guardarReconocimiento(sessionStorage.getItem("id"), this.webcamImage)
        .subscribe((its: any) => {
          var resu = true;
          console.log(its)
          resolve(resu);
        })

    })
  }
  async Siguiente() {
    //await this.GuardafotoReconocimiento()
    this.router.navigate(['/fin'])
  }
  CapturarFoto() {
    return new Promise((resolve, reject) => {
      var resu = true;

      //Pausar reproducción
      this.video.pause();

      //Obtener contexto del canvas y dibujar sobre él
      let contexto = this.Canvas.getContext("2d");
      this.Canvas.width = this.video.videoWidth;
      this.Canvas.height = this.video.videoHeight;
      contexto.drawImage(this.video, 0, 0, this.Canvas.width, this.Canvas.height);

      this.webcamImage = this.Canvas.toDataURL(); //Esta es la foto, en base 64

      //Reanudar reproducción
    
      resolve(resu);
    })
  }
}


