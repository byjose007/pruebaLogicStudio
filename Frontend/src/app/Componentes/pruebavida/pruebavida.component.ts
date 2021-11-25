import { Component, OnInit, ViewChild } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { Router } from '@angular/router';
import { FirmaserviceService } from 'src/app/Servicios/firmaservice.service';

'use strict';
import { WebcamInitError, WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
@Component({
  selector: 'app-pruebavida',
  templateUrl: './pruebavida.component.html',
  styleUrls: ['./pruebavida.component.css']
})
export class PruebavidaComponent implements OnInit {


  private stream: MediaStream;
  private recordRTC: any;
   iconogr: string =""
   videopreview: string =""
   verPreview: boolean =true
   vergraba: boolean =false
   botonplay: boolean =false
   botonstop: boolean =true
   verbotn: boolean =true
   cedula:string=""
   nombre: string=""

   numSnapshot =0
   snapShotPerSecond=this.getRandomArbitrary(0, 15)
   timer=null
   counter = 0
   snapShotArray = []
   buttonDisabled:boolean=false
   snapShotCamera1:any
   snapShotCamera2:any
   snapShotCamera3:any
   maxSnapshot=3
  @ViewChild('video', { static: false }) video;
      
  constructor(private router: Router,
    private servicio: FirmaserviceService) {
    // Do stuff
  }
  textovida:string =null
  ngOnInit(): void {
    this.verPreview =true
    this.vergraba=false
    this.verbotn=true
    this.botonplay =false
    this.botonstop =true
    this.cedula= sessionStorage.getItem("cedula")
    this.nombre=sessionStorage.getItem("nombre")
    this.snapShotArray = [];
    if(sessionStorage.getItem("tipoDoc")!="1" )
    {
      this.textovida=sessionStorage.getItem("textoVideo")
    }
  }

  ngAfterViewInit() {
    // set the initial state of the video
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  successCallback(stream: MediaStream) {
    this.snapShotArray = [];
    var options = {
      mimeType: 'video/webm\;codecs=vp9', // Replace here and run
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLMediaElement  = this.video.nativeElement;
    video.srcObject  = this.stream;
    this.toggleControls();
    console.log("snapShotPerSecond:"+this.snapShotPerSecond+"seconds");
    if (this.timer === null) {
        this.takeSnapShot();
    }
  }

 errorCallback() {
    //handle error here
  }
 
  processVideo(audioVideoWebMURL) {

    let video: HTMLVideoElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    console.log(audioVideoWebMURL)
    //video.srcObject = audioVideoWebMURL;
    this.toggleControls();
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL) {

      sessionStorage.setItem("PruebaVida",dataURL.replace(/codecs=vp9,opus;/g, ""));
     });
    this.videopreview =sessionStorage.getItem("PruebaVida")
  }
  grabando: boolean=false
  undo(){
    location.reload();
  }
  async grabar(){
    if(this.grabando==false)
    {
      this.verbotn=true
      this.verPreview =true
      this.vergraba=false
      this.startRecording();
      this.grabando=true;
      this.botonplay =true
      this.botonstop =false
    }else{
      this.stopRecording();
      this.grabando=false;
      this.verbotn=false;      
       this.botonplay =false
    this.botonstop =true
      this.vergraba=true      
    }
  }
  startRecording() {
    let mediaConstraints = {
      audio: true,
      video: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  stopRecording() {
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
  }

  download() {
    return new Promise((resolve, reject) => {
      var resu = true;
      this.verPreview =false
      this.verbotn=true
      this.videopreview =sessionStorage.getItem("PruebaVida")
      //this.recordRTC.save('video.webm');
      resolve(resu);
    })
  }
  async Siguiente(){
    //await this.GuardarPruebaVida();
    
      this.router.navigate(['/instruccionesreconocimiento'])

    
  }

  GuardarPruebaVida(){
    return new Promise((resolve, reject) => {
      this.servicio.guardarPruebaVida(sessionStorage.getItem("id"),sessionStorage.getItem("PruebaVida"))
        .subscribe((its: any) => {
          var resu = true;
          console.log(its)
          if(its.Data!=null){   
            }
            resolve(resu);
          })  
      })
  }
  //----------------------------------------------------------------------------------------------------------------------------
// toggle webcam on/off
public showWebcam = true;
public allowCameraSwitch = true;
public multipleWebcamsAvailable = false;
public deviceId: string;
public videoOptions: MediaTrackConstraints = {
  // width: {ideal: 1024},
  // height: {ideal: 576}
};
public errors: WebcamInitError[] = [];
// latest snapshot
public webcamImage: WebcamImage = null;
// webcam snapshot trigger
private trigger: Subject<void> = new Subject<void>();
// switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
public triggerSnapshot(): void {
  this.trigger.next();
  this.showWebcam = true;
  this.webcamImage = null;
}
public toggleWebcam(): void {
  this.showWebcam = !this.showWebcam;
}
volverTomar() {
  this.showWebcam = true;
  this.webcamImage = null;
}
public handleInitError(error: WebcamInitError): void {
  if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
    console.warn("El acceso a la cámara no fue permitido por la usuario!");
  }
  this.errors.push(error);
}
public showNextWebcam(directionOrDeviceId: boolean | string): void {
  this.nextWebcam.next(directionOrDeviceId);
}
public handleImage(webcamImage: WebcamImage): void {
  this.webcamImage = webcamImage;
  sessionStorage.setItem("snapShotCamera"+this.numSnapshot, this.webcamImage.imageAsDataUrl)
}
public cameraWasSwitched(deviceId: string): void {
  this.deviceId = deviceId;
}
public get triggerObservable(): Observable<void> {
  return this.trigger.asObservable();
}
public get nextWebcamObservable(): Observable<boolean | string> {
  return this.nextWebcam.asObservable();
}
getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
 takeSnapShot(){
  this.buttonDisabled=true;
    this.numSnapshot++;
  this.timer = setTimeout(()=> this.takeSnapShot(),this.snapShotPerSecond*1000);
  this.triggerSnapshot();
  if(this.numSnapshot>=3)
  {
    clearTimeout(this.timer);
    this.timer= null;
    this.numSnapshot=0;
    this.getSnapShot();
    this.buttonDisabled=false;
  }
 }
 getSnapShot(){
  this.snapShotCamera1= sessionStorage.getItem("snapShotCamera1");
  this.snapShotCamera2= sessionStorage.getItem("snapShotCamera2");
  this.snapShotCamera3= sessionStorage.getItem("snapShotCamera3");
  this.snapShotArray.push(this.snapShotCamera1);
  this.snapShotArray.push(this.snapShotCamera2);
  this.snapShotArray.push(this.snapShotCamera3);
  console.log(this.snapShotArray);
 }
}


