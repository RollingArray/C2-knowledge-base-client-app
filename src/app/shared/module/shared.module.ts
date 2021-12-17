/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Shared module
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:54:33 
 * Last modified  : 2021-12-16 20:54:33 
 */


import { ScrollTrackerDirective } from './../directive/parallax/scroll-tracker.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations:[
    //
  ],
  exports: [
    IonicModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    //
  ]
})
export class SharedModule {}
