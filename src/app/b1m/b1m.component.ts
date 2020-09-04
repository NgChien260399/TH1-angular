import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b1m',
  templateUrl: './b1m.component.html',
  styleUrls: ['./b1m.component.css']
})
export class B1mComponent implements OnInit {
  s:any;
  constructor() { }

  ngOnInit(): void {
    const n = 10;

    let s = 0;

    for (let i = 1; i <= n; ++i){

    s += 1.0 / i;

    }

    console.log(s);
  }

}
