import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
  // install Swiper modules
  SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'app-sobrenosotros',
  templateUrl: './sobrenosotros.component.html',
  styleUrls: ['./sobrenosotros.component.css']
})
export class SobrenosotrosComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
