import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b1tl',
  templateUrl: './b1tl.component.html',
  styleUrls: ['./b1tl.component.css']
})
export class B1tlComponent implements OnInit {
public x =2;
public  n=2;
public c= 0;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i <= (this.n); i++) {
      this.c=this.c+Math.pow((this.x),i);
    }
    console.log(this.c);
  }

}
