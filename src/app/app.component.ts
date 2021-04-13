import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit() {
  }

  onClick(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth'});
}
}

// ScrollTrigger:
// https://www.youtube.com/watch?v=BU8ddY7c6xw