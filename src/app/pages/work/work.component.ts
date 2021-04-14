import { Component, OnInit, HostBinding } from '@angular/core';
import { WorkService } from 'src/app/services/work.service';
import { Works } from '../../interfaces/works.interface';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {


  works: Works[] = [];

  constructor( private workService: WorkService ) { }

  ngOnInit(): void {
    this.works = this.workService.getWorks(); 
  }



}
