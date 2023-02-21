import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-icon-box',
  templateUrl: './icon-box.component.html',
  styleUrls: ['./icon-box.component.css']
})
export class IconBoxComponent implements OnInit {


  icon_box : any = [
                  {
                    title:"Address",
                    description:"8901 Marmora Road Chi Minh City, Vietnam",
                    icon_class:"la-map-marker",
                  },
                  {
                    title:"Email",
                    description:'<a href="javascript:void(0);">info@example.com</a><br/><a href="javascript:void(0);">info@example.com</a>',
                    icon_class:"la-envelope-open",
                  },
                  {
                    title:"Phone",
                    description:"(+1) 123 456 7890<br/>(+91) 423 547 8909",
                    icon_class:"la-phone-volume",
                  },
            ];

  constructor() { }


  ngOnInit(): void {
  }

}
