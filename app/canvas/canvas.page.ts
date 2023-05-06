import { AfterViewInit, Component, Renderer2, ViewChild } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.page.html',
  styleUrls: ['./canvas.page.scss'],
})
export class CanvasPage implements AfterViewInit{

  @ViewChild('myCanvas') canvas: any;
  canvasElement: any;

  lastX!: number;
  lastY!: number;

  currentColor: string = '#1abc9c';
  availableColors: any;

  brushSize: number = 200;

  drawing = false;
  lineWidth = 40;


  constructor(public platform: Platform, public renderer: Renderer2) {
      
        

      this.availableColors = [
        '#1abc9c',
        '#3498db',
        '#9b59b6',
        '#e67e22',
        '#e74c3c',
        '#ffffff',
        '#000000'
    ];

  }

  // Size of the Canvas //
  ngAfterViewInit(){
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.platform.width() + '';
    this.canvasElement.height = 623;
  }

 // current color of the brush //
  changeColor(color: any){
        this.currentColor = color;
  }
 // option to change brush size //
  changeSize(size: any){
    this.brushSize = size;
  }

  // when you click //
  handleStart(ev: any){
      this.lastX = ev.touches[0].pageX;
      this.lastY = ev.touches[0].pageY;
  }

  // when you hold click while moving //
  handleMove(ev: any){
      let ctx = this.canvasElement.getContext('2d');

      let currentX = ev.touches[0].pageX;
      let currentY = ev.touches[0].pageY;

      ctx.beginPath();
      ctx.lineJoin = "round";
      ctx.moveTo(this.lastX, this.lastY);
      ctx.lineTo(currentX, currentY);
      ctx.closePath();

      ctx.strokeStyle = this.currentColor;
      ctx.lineWidth = this.brushSize;
      ctx.stroke();

      this.lastX = currentX;
      this.lastY = currentY;
  }


  // Reset the Canvas //
  clearCanvas(){
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

}
