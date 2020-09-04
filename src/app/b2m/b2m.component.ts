import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b2m',
  templateUrl: './b2m.component.html',
  styleUrls: ['./b2m.component.css']
})
export class B2mComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var list:number[];

    list = [4,11,45,3,13,50,7,60,77];

    var checkNT = (n:number) => {

    let ok = true;

    for(let i=2;i<n;++i)

    if(n%i==0){

    ok=false;

    break;

    }

    return ok;

    }

    let listNT = list.filter(x=>checkNT(x));

    console.log("Các số nguyên tố là : " + listNT );
}
}
