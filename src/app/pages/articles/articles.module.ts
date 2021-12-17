/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary Articles page module
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-11-15 21:34:14 
 * Last modified  : 2021-12-16 21:06:31
 */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule, NavParams } from "@ionic/angular";
import { ImageHolderModule } from "src/app/component/image-holder/image-holder.module";
import { SharedModule } from "src/app/shared/module/shared.module";
import { ArticlesPage } from "./articles.page";

const routes: Routes = [
  {
    path: '',
    component: ArticlesPage
  },
];

@NgModule({
  imports: [
    SharedModule,
    ImageHolderModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    NavParams
  ],
  declarations: [ArticlesPage]
})
export class ArticlesPageModule {}
