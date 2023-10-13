import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  @Input() circuitCounts: number = 0;
  constructor(private stage:ElementRef) { }

  private EMPosition = [
    { x: 540, y: 200 },
    { x: 540, y: 400 },
    { x: 60, y: 400 },
    { x: 60, y: 200 },
    { x: 200, y: 60 },
    { x: 400, y: 60 },
    { x: 400, y: 540 },
    { x: 200, y: 540 },
  ];

  drawMainboard() {
    let canvas = <HTMLCanvasElement>this.stage.nativeElement.querySelector('#stage')
    let context = canvas.getContext('2d');
    if (context) {
      context.beginPath();
      context.fillStyle = "white";
      context.font = "40px serif";
      context.fillText("Panel", 310, 50);

      context.fillStyle = "black";
      context.fillRect(100, 100, 500, 500);
      context.fillStyle = "#00476d";
      context.fillRect(110, 110, 480, 480);
      context.fillStyle = "black";
      context.font = "50px serif";
      context.fillText("Gateway", 250, 370);
    }
  }

  drawChildboard() {
    let canvas = <HTMLCanvasElement>this.stage.nativeElement.querySelector('#stage')
    let context = canvas.getContext('2d');
    if (context && this.circuitCounts && this.circuitCounts > 0 && this.circuitCounts < 9) {
      context.beginPath();

      for (let i = 0; i < this.circuitCounts; i++) {
        context.fillStyle = "black";
        context.fillRect(this.EMPosition[i].x, this.EMPosition[i].y, 100, 100);
        context.fillStyle = "#372016";
        context.fillRect(this.EMPosition[i].x + 5, this.EMPosition[i].y + 5, 90, 90);
        context.fillStyle = "white";
        context.font = "20px serif";
        context.fillText("EM " + (i + 1), this.EMPosition[i].x + 30, this.EMPosition[i].y + 60);
      }

    }
  }

  ngOnInit() {
    this.drawMainboard();
  }

  ngOnChanges() {
    this.drawChildboard();
  }
}
