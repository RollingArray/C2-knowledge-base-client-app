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
import { ArticleModel } from "../model/article.model";
import { MenusModel } from "../model/menu.model";
import { BaseService } from "./base.service";

@Injectable({
	providedIn: "root"
})
export class ArticleService extends BaseService<ArticleModel> {
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
	getData(article: ArticleModel): Observable<ArticleModel>
	{
		return this.post(ApiUrls.ARTICLE_DETAILS, article);
	}

	/**
	 * Cruds article menu
	 * @param article 
	 * @returns article menu 
	 */
	crudArticleMenu(article: ArticleModel): Observable<ArticleModel>
	{
		return this.post(ApiUrls.ARTICLE_CRUD, article);
	}

	/**
	 * Articles feedback
	 * @param article 
	 * @returns feedback 
	 */
	articleFeedback(article: ArticleModel): Observable<ArticleModel>
	{
		return this.post(ApiUrls.ARTICLE_FEEDBACK, article);
	}

	

	
}
