import { Component, OnInit } from '@angular/core';
import { HitsEntity, SearchImgHistory } from '../Models/serachimage';
import { SearchImageService } from '../services/searchimage.service';

@Component({
  selector: 'app-searchimage',
  templateUrl: './searchimage.component.html',
  styleUrls: ['./searchimage.component.css']
})
export class SearchimageComponent implements OnInit {

  serachimages: HitsEntity[];
  keywordsrc: string;
  SearchHis: SearchImgHistory;
  constructor(private searchimageservice: SearchImageService) {
    //this.searchimageservice.getImages().subscribe((imageData) => {
    //  console.log(imageData);
    //  this.serachimages = imageData['hits'] as HitsEntity[];
    //})
    this.SearchHis = new SearchImgHistory();
  }

  ngOnInit(): void {
  }

  SearchImg() {
    this.searchimageservice.getImages(this.keywordsrc).subscribe(data => {
      this.serachimages = data['hits'] as HitsEntity[]
      this.searchimageservice.addhistory(this.keywordsrc);
      console.log(this.searchimageservice);
    })
  }

  //addToHistory(name: any) {
  //  this.SearchHis.Search = name;
  //  this.searchimageservice.addhistory(this.SearchHis);
  //}


}
