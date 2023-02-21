import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-web-developer-portfolio',
  templateUrl: './web-developer-portfolio.component.html',
  styleUrls: ['./web-developer-portfolio.component.css']
})
export class WebDeveloperPortfolioComponent implements OnInit {
  
  profile : any = {
                  logo:"logo-black-5.png",
                  profile:"web-developer"
            };

  page_banner : any = {
        title:"Portfolio",
        profile:"web-developer",
  };
  
  categories : any = [
                  {
                    title:"Design",
                    filter_title:"design",
                  },
                  {
                    title:"Photography",
                    filter_title:"photography",
                  },
                  {
                    title:"development",
                    filter_title:"Development",
                  },
              ];

  portfolios : any = [
                  {
                    title:"MOCKUP COLLECTION",
                    category:"DESIGN",
                    image:"pic1.jpg",
                    src_image:"main-pic1.jpg",
                    link:"javascript:vois(0)",
                    filter_class:"development",
                  },
                  {
                    title:"MOCKUP COLLECTION",
                    category:"DESIGN",
                    image:"pic2.jpg",
                    src_image:"main-pic2.jpg",
                    link:"javascript:vois(0)",
                    filter_class:"design",
                  },
                  {
                    title:"MOCKUP COLLECTION",
                    category:"DESIGN",
                    image:"pic3.jpg",
                    src_image:"main-pic3.jpg",
                    link:"javascript:vois(0)",
                    filter_class:"photography",
                  },
                  {
                    title:"MOCKUP COLLECTION",
                    category:"DESIGN",
                    image:"pic4.jpg",
                    src_image:"main-pic4.jpg",
                    link:"javascript:vois(0)",
                    filter_class:"design",
                  },
                  {
                    title:"MOCKUP COLLECTION",
                    category:"DESIGN",
                    image:"pic5.jpg",
                    src_image:"main-pic5.jpg",
                    link:"javascript:vois(0)",
                    filter_class:"photography",
                  },
                  {
                    title:"MOCKUP COLLECTION",
                    category:"DESIGN",
                    image:"pic6.jpg",
                    src_image:"main-pic6.jpg",
                    link:"javascript:vois(0)",
                    filter_class:"design",
                  },
                  {
                    title:"MOCKUP COLLECTION",
                    category:"DESIGN",
                    image:"pic7.jpg",
                    src_image:"main-pic7.jpg",
                    link:"javascript:vois(0)",
                    filter_class:"development",
                  },
                  {
                    title:"MOCKUP COLLECTION",
                    category:"DESIGN",
                    image:"pic8.jpg",
                    src_image:"main-pic8.jpg",
                    link:"javascript:vois(0)",
                    filter_class:"design",
                  },
                  {
                    title:"MOCKUP COLLECTION",
                    category:"DESIGN",
                    image:"pic9.jpg",
                    src_image:"main-pic9.jpg",
                    link:"javascript:vois(0)",
                    filter_class:"photography",
                  },
  
              ]
  
  constructor() { }

  ngOnInit(): void {
	  (function ($) {
      
      setTimeout(function(){
        var self = jQuery("#masonry, .masonry");
        if(jQuery('.card-container').length)
          {
          self.imagesLoaded(function () {
            self.masonry({
              gutterWidth: 15,
              isAnimated: true,
              itemSelector: ".card-container"
            });
          });
        }
			
        jQuery(".filters").on('click','li',function(e) {

          var filter = jQuery(this).attr("data-filter");
          self.masonryFilter({
            filter: function () {
              if (!filter) return true;
              return jQuery(this).hasClass(filter);
            }
          });
        });
      }, 500);  
        
        
    })(jQuery);
  
  }

}
