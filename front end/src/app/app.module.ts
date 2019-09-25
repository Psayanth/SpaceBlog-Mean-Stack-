import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CustomValidatorDirective } from './Customvalidator.directive';
import { AboutComponent } from './about/about.component';
import { TrendingComponent } from './trending/trending.component';
import { HttpClientModule } from '@angular/common/http';
import { NasaApiService } from './nasa-api.service';
import { RecentComponent } from './recent/recent.component';
import { CreateComponent } from './create/create.component';
import { AuthguardService } from './authguard.service';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { BloggersComponent } from './bloggers/bloggers.component';
import { AccessDComponent } from './access-d/access-d.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    CustomValidatorDirective,
    AboutComponent,
    TrendingComponent,
    RecentComponent,
    CreateComponent,
    ContactComponent,
    PostsComponent,
    BloggersComponent,
    AccessDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [NasaApiService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
