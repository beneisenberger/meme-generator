import { Component, OnInit } from '@angular/core';
import { TemplatesService } from '../templates.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  images: string[] = [
    "assets/template-images/spongebob.jpg",
    "assets/template-images/spongebob2.png",
    "assets/template-images/spongebob3.jpg",
    "assets/template-images/spongebob4.jpg",
  ];
  top: string = "";
  bottom: string = "";
  selected: string = "";

  constructor(public templatesService: TemplatesService) { }

  select(image) {
    this.selected = image;
  }

  getImages() {
  }

  ngOnInit() {}

}
