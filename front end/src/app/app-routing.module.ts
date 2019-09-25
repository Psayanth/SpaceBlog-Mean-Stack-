import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { TrendingComponent } from './trending/trending.component';
import { RecentComponent } from './recent/recent.component';
import { CreateComponent } from './create/create.component';
import { AuthguardService } from './authguard.service';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { AdminAuthGuardService } from './AdminauthGuard.service';
import { BloggersComponent } from './bloggers/bloggers.component';
import { AccessDComponent } from './access-d/access-d.component';


const routes: Routes = [{path:'',component:ContentComponent},
  {path:'signup', component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'trending',component:TrendingComponent,canActivate:[AuthguardService]},
  {path:'myposts/recent', component:RecentComponent, canActivate:[AuthguardService]},
  {path:'myposts/create',component:CreateComponent,canActivate:[AuthguardService]},
  {path:'logout',component:ContentComponent},
  {path:'update',component:CreateComponent},
  {path:'contact',component:ContactComponent},
  {path:'posts',component:PostsComponent,canActivate:[AdminAuthGuardService]},
  {path:'users',component:BloggersComponent, canActivate:[AdminAuthGuardService]},
  {path:'**', component:AccessDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
