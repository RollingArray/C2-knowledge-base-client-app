/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Article element service
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:55:01 
 * Last modified  : 2021-12-16 20:55:19
 */

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiUrls } from "../constant/api-urls.constant";
import { ContentModel } from "../model/content.model";
import { BaseService } from "./base.service";

@Injectable({
	providedIn: "root"
})
export class ArticleElementService extends BaseService<ContentModel> {
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

	crudArticleElement(content: ContentModel): Observable<ContentModel>
	{
		return this.post(ApiUrls.CONTENT_CRUD, content);
	}

	
}
