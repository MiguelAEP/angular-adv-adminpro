import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

public  labels: string[] = [ 'gaseosa', 'pan', 'papas' ];

public data1 = [
    { data: [ 10, 15, 10 ] },
    
  ]
}
