/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary Menu page module
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-11-01 20:47:46 
 * Last modified  : 2021-11-23 20:12:29
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { MenuPage } from "./menu.page";
import { MenuSelectPipe } from "src/app/shared/pipe/menu-select.pipe";

const routes: Routes = [
	{
		path: "",
		redirectTo: "articles",
		pathMatch: "full",
	},
	{
		path: "",
		component: MenuPage,
		children: [
			{
				path: 'articles/:articleId',
				loadChildren: () => import('../articles/articles.module').then(m => m.ArticlesPageModule)
			},
		]
	},
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [MenuPage, MenuSelectPipe]
})
export class MenuPageModule { }
