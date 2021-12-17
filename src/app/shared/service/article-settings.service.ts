/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Article settings service
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:55:26 
 * Last modified  : 2021-12-16 20:55:49
 */

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ApiUrls } from "../constant/api-urls.constant";
import { ArticleSettingsModel } from "../model/article-settings.model";
import { ArticleModel } from "../model/article.model";
import { BaseModel } from "../model/base.model";
import { MenusModel } from "../model/menu.model";
import { BaseService } from "./base.service";

@Injectable({
	providedIn: "root"
})
export class ArticleSettingsService extends BaseService<BaseModel> {
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
	getData(article: ArticleModel): Observable<ArticleSettingsModel>
	{
		return this.post(ApiUrls.ARTICLE_DETAILS, article);
	}
}
