import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { ClanComponent } from './clan/clan.component';
import { ClanModule } from './clan/clan.module';



const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'clan', component: ClanComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserModule,
    ClanModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
