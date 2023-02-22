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
                    description:"2210 Apache Road,<br/>Huntsville, Alabama 35810",
                    icon_class:"la-map-marker",
                  },
                  {
                    title:"Email",
                    description:'<a href="javascript:void(0);">jt.aws.cloud@protonmail.com</a><br/><a href="javascript:void(0);">jt.aws.cloud@protonmail.com</a>',
                    icon_class:"la-envelope-open",
                  },
                  {
                    title:"Phone",
                    description:"(256) 746 7370",
                    icon_class:"la-phone-volume",
                  },
            ];

  constructor() { }


  ngOnInit(): void {
  }

}
