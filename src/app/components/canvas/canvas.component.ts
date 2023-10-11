import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor(private stage:ElementRef) { }

  drawMainboard() {
    let canvas = <HTMLCanvasElement>this.stage.nativeElement.querySelector('#stage')
    let context = canvas.getContext('2d');
    if (context) {
      context.beginPath();
      context.fillRect(100, 100, 500, 500);
      context.clearRect(110, 110, 480, 480);
      context.font = "50px serif";
      context.fillText("Gateway", 250, 370);
    }
  }

  drawChildboard() {
    let canvas = <HTMLCanvasElement>this.stage.nativeElement.querySelector('#stage')
    let context = canvas.getContext('2d');
    if (context) {
      context.beginPath();
      context.fillRect(540, 200, 100, 100);
      context.clearRect(545, 205, 90, 90);
      context.font = "20px serif";
      context.fillText("EM 1", 570, 260);

      context.fillRect(540, 400, 100, 100);
      context.clearRect(545, 405, 90, 90);
      context.font = "20px serif";
      context.fillText("EM 2", 570, 460);
    }
  }

  ngOnInit() {
    this.drawMainboard();
    this.drawChildboard();
  }
}
