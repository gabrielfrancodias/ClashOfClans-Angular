import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatExpansionModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
