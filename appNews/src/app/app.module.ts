
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './Admin/Components/navbar/navbar.component';
import { FooterComponent } from './Admin/Components/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './Admin/Components/sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProvider } from './services/auth.interceptor';
import { AdminDashBoardComponent } from './Admin/Pages/admin-dash-board/admin-dash-board.component';
import { UserHomePageComponent } from './User/user-home-page/user-home-page.component';
import { ProfileComponent } from './Admin/Pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { WellcomedasboardComponent } from './Admin/Pages/wellcomedasboard/wellcomedasboard.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    AdminDashBoardComponent,
    UserHomePageComponent,
    ProfileComponent,
    WellcomedasboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
