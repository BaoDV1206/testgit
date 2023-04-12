import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./Pages/signup/signup.component";
import { LoginComponent } from "./Pages/login/login.component";
import { AdminDashBoardComponent } from "./Admin/Pages/admin-dash-board/admin-dash-board.component";
import { UserHomePageComponent } from "./User/user-home-page/user-home-page.component";
import { AdminGuard } from "./services/admin.guard";
import { UserGuard } from "./services/user.guard";
import { ProfileComponent } from "./Admin/Pages/profile/profile.component";
import { FooterComponent } from "./Admin/Components/footer/footer.component";
import { WellcomedasboardComponent } from "./Admin/Pages/wellcomedasboard/wellcomedasboard.component";

const routes: Routes = [
  {
    path: 'admin',
    component:AdminDashBoardComponent,
    canActivate: [AdminGuard],
    children: [
      {path: '',component: WellcomedasboardComponent},
      { path: 'profile', component: ProfileComponent },
      { path: 'footer',component:FooterComponent}
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', component: AdminDashBoardComponent },
  {
    path: 'signup',
    component:SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'user-home',
    component:UserHomePageComponent,
    pathMatch: 'full',
    canActivate: [UserGuard]
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {}
