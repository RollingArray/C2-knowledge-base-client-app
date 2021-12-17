/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Menu service
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:56:21 
 * Last modified  : 2021-12-16 20:56:21 
 */



import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiUrls } from "../constant/api-urls.constant";
import { MenuSettingsModel } from "../model/menu-settings.model";
import { BaseService } from "./base.service";

@Injectable({
	providedIn: "root"
})
export class MenuService extends BaseService<MenuSettingsModel> {
	/**
	 * @param  {HttpClient} httpClient
	 */
	constructor(
		httpClient: HttpClient,
	)
	{
		super(
			httpClient,
		);
	}

	/**
	 * Gets menu
	 * @returns menu 
	 */
	getData(): Observable<MenuSettingsModel>
	{
		return this.post(ApiUrls.MENU, {});
	}
}
