import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-copywrite',
  templateUrl: './copywrite.component.html',
  styleUrls: ['./copywrite.component.css']
})
export class CopywriteComponent implements OnInit {

  constructor() { }

   ngOnInit(): void {
	  (function ($) {
      /* setTimeout(function(){ */
        
        
      	jQuery('.styleswitcher').animate({
          'left': '-220px'
        });
        jQuery('.switcher-demo').animate({
          'left': '-300px'
        });
        jQuery('.switch-btn').addClass('closed');
        jQuery('.switch-demo-btn').addClass('closed');
        
        //=== Switcher panal slide function	=====================//
        jQuery('.switch-btn').on('click',function () {	
          if (jQuery(this).hasClass('open')) {
            jQuery(this).addClass('closed');
            jQuery(this).removeClass('open');
            jQuery('.styleswitcher').animate({
              'left': '-220px'
            });
          } else {
            if (jQuery(this).hasClass('closed')) {
            jQuery(this).addClass('open');
            jQuery(this).removeClass('closed');
            jQuery('.styleswitcher').animate({
              'left': '0'
            });
            }
          }	
        });
        
        //=== Switcher panal slide function	=====================//
        jQuery('.switch-demo-btn').on('click',function () {	
          if (jQuery(this).hasClass('open')) {
            jQuery(this).addClass('closed');
            jQuery(this).removeClass('open');
            jQuery('.switcher-demo').animate({
              'left': '-300px'
            });
          } else {
            if (jQuery(this).hasClass('closed')) {
            jQuery(this).addClass('open');
            jQuery(this).removeClass('closed');
            jQuery('.switcher-demo').animate({
              'left': '0'
            });
            }
          }	
        });
        
      //=== Color css change function	=====================//
      // Color changer
      jQuery(".skin-1").on('click',function(){
          /* jQuery(".skin").attr("href", "assets/css/skin/skin-1.css"); */
      jQuery(".site-header .logo-header img").attr("src", "assets/images/logo.png");
      jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black.png");
          return false;
      });
      jQuery(".skin-2").on('click',function(){
          /* jQuery(".skin").attr("href", "assets/css/skin/skin-2.css"); */
      jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-2.png");
      jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-2.png");
          return false;
      });
     
      jQuery(".skin-3").on('click',function(){
          /* jQuery(".skin").attr("href", "assets/css/skin/skin-3.css"); */
      jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-3.png");
      jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-3.png");
          return false;
      });
    
      jQuery(".skin-4").on('click',function(){
          /* jQuery(".skin").attr("href", "assets/css/skin/skin-4.css"); */
      jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-4.png");
      jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-4.png");
          return false;
      });
    
      jQuery(".skin-5").on('click',function(){
          /* jQuery(".skin").attr("href", "assets/css/skin/skin-5.css"); */
      jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-5.png");
      jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-5.png");
          return false;
      });	
    
      jQuery(".skin-6").on('click',function(){
          /* jQuery(".skin").attr("href", "assets/css/skin/skin-6.css"); */
      jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-6.png");
      jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-6.png");
          return false;
      });		
      
      jQuery(".skin-7").on('click',function(){
          /* jQuery(".skin").attr("href", "assets/css/skin/skin-7.css"); */
      jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-7.png");
      jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-7.png");
          return false;
      });
    
      jQuery(".skin-8").on('click',function(){
          /* jQuery(".skin").attr("href", "assets/css/skin/skin-8.css"); */
      jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-8.png");
      jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-8.png");
          return false;
      });	
    
    //=== Color css change function	=====================//	
    
      
        
        
      /* }, 500);   */
      
  })(jQuery);
  
  }

}
