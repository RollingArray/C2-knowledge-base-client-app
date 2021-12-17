/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Article service
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:55:55 
 * Last modified  : 2021-12-16 20:55:55 
 */

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiUrls } from "../constant/api-urls.constant";
import { SearchModel } from "../model/search.model";
import { BaseService } from "./base.service";

@Injectable({
	providedIn: "root"
})
export class SearchService extends BaseService<SearchModel> {
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
	 * Gets data
	 * @param article 
	 * @returns data 
	 */
	getSearchArticle(search: SearchModel): Observable<SearchModel>
	{
		return this.post(ApiUrls.SEARCH_ARTICLE, search);
	}
}
