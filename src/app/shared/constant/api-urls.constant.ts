/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary Api urls
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-11-15 21:34:14 
 * Last modified  : 2021-11-19 20:04:04
 */

import { environment } from "../../../environments/environment";

export class ApiUrls {
	public static readonly API_ENDPOINT: string = environment.apiEndpoint;
	public static readonly API_VERSION: string = "v1";
	public static readonly API_BASE_PATH: string = ApiUrls.API_ENDPOINT + ApiUrls.API_VERSION;

	// urls
	public static readonly MENU: string = ApiUrls.API_BASE_PATH + "/menus";
	public static readonly ARTICLE_DETAILS: string = ApiUrls.API_BASE_PATH + "/article/details";
	public static readonly ARTICLE_CRUD: string = ApiUrls.API_BASE_PATH + "/article/crud";
	public static readonly MENU_CRUD: string = ApiUrls.API_BASE_PATH + "/menu/crud";
	public static readonly CONTENT_CRUD: string = ApiUrls.API_BASE_PATH + "/content/crud";
	public static readonly SETTINGS: string = ApiUrls.API_BASE_PATH + "/settings";
	public static readonly ARTICLE_FEEDBACK: string = ApiUrls.API_BASE_PATH + "/article/feedback";
	public static readonly SEARCH_ARTICLE: string = ApiUrls.API_BASE_PATH + "/article/search";

	
}
