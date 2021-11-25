import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamInitError, WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-capturaposterior',
  templateUrl: './capturaposterior.component.html',
  styleUrls: ['./capturaposterior.component.css']
})
export class CapturaposteriorComponent implements OnInit {

  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  snapshotPreviewFace:any;
  constructor(private router: Router) { }
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  public ngOnInit(): void {
    sessionStorage.setItem("cedulaPosterior", null)
    this.showWebcam=true;
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
         this.rectangle();
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
    this.showWebcam=false;
    this.rectangle();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }
  volverTomar(){
    this.showWebcam=true;
    this.webcamImage=null;
    console.clear();
  }
  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("El acceso a la cámara no fue permitido por la usuario!");
    }
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);  
    this.webcamImage = webcamImage;
    sessionStorage.setItem("cedulaPosterior",this.webcamImage.imageAsDataUrl)
    this.snapshotPreviewFace= this.webcamImage.imageAsDataUrl;
    this.snapshotPreviewFace=sessionStorage.getItem("cedulaFrontal")
    this.showWebcam=false;
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
  Siguiente() {
    this.router.navigate(['/capturacedula'])
  }
 rectangle(){
  this.DrawImge() ;
  setTimeout(()=> this.rectangle(),10);
 }
   _pX:number=0;
   _pY:number=0;
   _faceAreaW:number=0;
   _faceAreaH:number=0;
 'use strict';
  DrawImge() {
    
    let video:HTMLVideoElement   = document.querySelector("video");
    let canvas: HTMLCanvasElement = document.querySelector("#videoCanvas");
    if (video==null)return;
    if (canvas==null)return;
    let ctx = canvas.getContext('2d');
    canvas.width = 320;//video.clientWidth
    canvas.height = 240;//video.clientHeight;
    ctx.drawImage(video, 0, 0, canvas.clientWidth,canvas.clientHeight);
    ctx.drawImage(video, 0, 0, canvas.clientWidth,canvas.clientHeight,);
    var faceArea = 220;
    var pX = (canvas.width / 2 - faceArea/ 2);
    var pY = (canvas.height / 2 - faceArea / 2);
    this._pX=pX-25;
    this._pY=pY+20;
    this._faceAreaW=faceArea+50;
    this._faceAreaH=faceArea-50;
    ctx.rect(this._pX, this._pY, this._faceAreaW, this._faceAreaH);      
    ctx.strokeStyle = "yellow";
    ctx.stroke();
    ctx.fillStyle="yellow";
  }
}
