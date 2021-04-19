import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { WorkService } from 'src/app/services/work.service';
import { Works } from '../../interfaces/works.interface';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})


export class WorkComponent implements OnInit {

  works: Works[] = [];

  constructor( private workService: WorkService, 
               private router: Router,
               private viewportScroller: ViewportScroller
                ) { 
    this.router.events.pipe( 
      filter( e => e instanceof Scroll))
        .subscribe((e: any) => {
          console.log('probando', e);

          // this is fix for dynamic generated(loaded..?) content
          setTimeout(() => {
            if (e.position) {
            this.viewportScroller.scrollToPosition
            (e.position);
          } else if ( e.anchor ) {
            this.viewportScroller.scrollToAnchor(e.anchor);
          } else {
            this.viewportScroller.scrollToPosition([0,0]);
          }
        });
      });
  }

  ngOnInit(): void {
    this.works = this.workService.getWorks(); 
  }


}
