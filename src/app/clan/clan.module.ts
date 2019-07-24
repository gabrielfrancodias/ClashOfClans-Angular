import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanComponent } from './clan.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatExpansionModule } from '@angular/material';



@NgModule({
  declarations: [ClanComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class ClanModule { }
