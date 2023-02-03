import { Component, OnInit } from '@angular/core';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {



  constructor(
    ) { }

  ngOnInit(): void {
    let val = localStorage.getItem('validation');

    if(val === '1'){
      localStorage.setItem('validation','2')
      location.reload();
    }
  }

}
