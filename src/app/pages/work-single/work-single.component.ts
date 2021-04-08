import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Works } from 'src/app/interfaces/works.interface';
import { WorkService } from 'src/app/services/work.service';


@Component({
  selector: 'app-work-single',
  templateUrl: './work-single.component.html',
  styleUrls: ['./work-single.component.scss']
})
export class WorkSingleComponent implements OnInit {

  listName: string = '';

  singleWork!: Works;

  constructor( private activatedRoute: ActivatedRoute,
               private workService: WorkService,
               private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( ({ listName }) => this.listName = listName );
    
    this.singleWork = this.workService.getSingleWork( this.listName );  
   }

   volver() {
    this.router.navigate(['/work']);
   }

}
