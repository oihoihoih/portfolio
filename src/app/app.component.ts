import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{


  constructor( ) { }
  

  ngOnInit(){ }

  // prepareRoute( outlet: RouterOutlet ) {
  //   console.log('outlet', outlet);
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  // }

}

// ScrollTrigger:
// https://www.youtube.com/watch?v=BU8ddY7c6xw
