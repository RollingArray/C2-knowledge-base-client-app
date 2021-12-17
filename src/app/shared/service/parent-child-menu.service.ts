/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Parent child menu service
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:56:39 
 * Last modified  : 2021-12-16 20:56:54
 */

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiUrls } from "../constant/api-urls.constant";
import { ParentMenuModel } from "../model/parent-menu.model";
import { BaseService } from "./base.service";

@Injectable({
	providedIn: "root"
})
export class ParentChildMenuService extends BaseService<ParentMenuModel> {
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
	 crudMenu(parentChildMenuRelation: ParentMenuModel): Observable<ParentMenuModel>
	{
		return this.post(ApiUrls.MENU_CRUD, parentChildMenuRelation);
	}
}
