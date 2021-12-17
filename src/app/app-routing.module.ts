import { NgModule } from "@angular/core";
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "go",
		pathMatch: "full",
	},
	{
		path: "go",
		loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule),
	},
];

export const routingConfiguration: ExtraOptions = {
	paramsInheritanceStrategy: 'always',
	preloadingStrategy: PreloadAllModules
  };

@NgModule({
	imports: [
		RouterModule.forRoot(routes, routingConfiguration),
	],
	exports: [RouterModule],
})
export class AppRoutingModule { }
