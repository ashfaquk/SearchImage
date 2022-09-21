import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchImgHistory } from '../Models/serachimage';
import { SearchImageService } from '../services/searchimage.service';

@Component({
  selector: 'app-display-history',
  templateUrl: './display-history.component.html',
  styleUrls: ['./display-history.component.css']
})
export class DisplayHistoryComponent implements OnInit {

  searchhis: SearchImgHistory[];
  constructor(private searchimageservice: SearchImageService,
    private router: Router  ) {
    this.searchhis = this.searchimageservice.getsearchhis();
    console.log(this.searchhis);
  }

  ngOnInit(): void {
  }

  showDetails(keyword : any) {
    console.log(keyword)
    this.router.navigate(['viewhis', keyword],)
  }

}
