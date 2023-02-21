import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
  
  import { WebDeveloperAboutUsComponent } from './web-developer/web-developer-about-us/web-developer-about-us.component';
  import { WebDeveloperContactUsComponent } from './web-developer/web-developer-contact-us/web-developer-contact-us.component';
  import { WebDeveloperIndexComponent } from './web-developer/web-developer-index/web-developer-index.component';
  import { WebDeveloperPortfolioComponent } from './web-developer/web-developer-portfolio/web-developer-portfolio.component';
  import { WebDeveloperResumeComponent } from './web-developer/web-developer-resume/web-developer-resume.component';
  
  import { BlogComponent } from './pages/blog/blog.component';
  import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
  import { Page404Component } from './page404/page404.component';

const routes: Routes = [
          
          
          {path: 'about-us-web-developer', component: WebDeveloperAboutUsComponent},
          {path: 'contact-us-web-developer', component: WebDeveloperContactUsComponent},
          {path: 'index-web-developer', component: WebDeveloperIndexComponent},
          {path: 'portfolio-web-developer', component: WebDeveloperPortfolioComponent},
          {path: 'resume-web-developer', component: WebDeveloperResumeComponent},
          
          
          {path: 'about-us-web-developer', component: WebDeveloperAboutUsComponent},
          {path: 'contact-us-web-developer', component: WebDeveloperContactUsComponent},
          {path: 'index-web-developer', component: WebDeveloperIndexComponent},
          {path: 'portfolio-web-developer', component: WebDeveloperPortfolioComponent},
          {path: 'resume-web-developer', component: WebDeveloperResumeComponent},
          
                    
          {path: 'blog', component: BlogComponent},
          {path: 'blog-single', component: BlogSingleComponent},
		  
          {path: '**', component: Page404Component},
          
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
