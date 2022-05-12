import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url: UrlSegment[])=>{


    });
  }
}
