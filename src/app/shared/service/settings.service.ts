/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Settings service
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:57:08 
 * Last modified  : 2021-12-16 20:57:08 
 */

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiUrls } from "../constant/api-urls.constant";
import { SettingsModel } from "../model/settings.model";
import { BaseService } from "./base.service";

@Injectable({
	providedIn: "root"
})
export class SettingsService extends BaseService<SettingsModel> {
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
	crudSettings(settings: SettingsModel): Observable<SettingsModel>
	{
		return this.post(ApiUrls.SETTINGS, settings);
	}
}
