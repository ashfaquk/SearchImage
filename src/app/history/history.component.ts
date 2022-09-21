import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HitsEntity } from '../Models/serachimage';
import { SearchImageService } from '../services/searchimage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  keyword: string;
    serachimages: HitsEntity[];
  constructor(private searchimageservice: SearchImageService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(data => {
      this.keyword = data["keyword"];
    });
    this.SearchImg()
  }

  ngOnInit(): void {
   
  }

  SearchImg() {
    console.log(this.keyword)
    this.searchimageservice.getImages(this.keyword).subscribe(data => {
      this.serachimages = data['hits'] as HitsEntity[] 
    })
  }

}
