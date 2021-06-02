import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banner = "/assets/images/banner.jpg";
  youtubefront = "/assets/images/youtube_1.png";
  vaccine1 = "/assets/images/v1.jpg";
  vaccine2 = "/assets/images/v2.jpg";
  vaccine3 = "/assets/images/v3.jpg";
  vaccine4 = "/assets/images/v4.jpg";
  vaccine5 = "/assets/images/v5.jpg";
  

  constructor() { }

  ngOnInit() {
  }

}
