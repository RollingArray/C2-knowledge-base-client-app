/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Base api service
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-11-01 10:15:11 
 * Last modified  : 2021-12-16 20:56:15
 */

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subscription, Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { StringKey } from "../constant/string.constant";
import { BaseModel } from "../model/base.model";

@Injectable({
	providedIn: "root",
})
export abstract class BaseService<T extends BaseModel> {
	/**
	 * String key of base service
	 */
	readonly stringKey = StringKey;

	/**
	 * Subscription  of base service
	 */
	private subscription: Subscription = new Subscription();

	/**
	 * Creates an instance of base service.
	 * @param httpClient 
	 * @param localStorageService 
	 * @param alertController 
	 * @param dataCommunicationService 
	 */
	constructor(
		private httpClient: HttpClient,

	) { }

	/**
	 * Determines whether init on
	 */
	onInit() { }

	/**
	 * Determines whether destroy on
	 */
	onDestroy()
	{
		this.subscription.unsubscribe();
	}

	/**
	 * Gets base service
	 * @param url 
	 * @returns get 
	 */
	public get(url: string): Observable<T>
	{
		const apiData = this.httpClient.get(url).pipe(
			map((response: any) => response as T),
			catchError((error) => of(null))
		);
		return apiData;
	}

	/**
	 * Posts base service
	 * @param url 
	 * @param data 
	 * @returns post 
	 */
	public post(url: string, data: T): Observable<T>
	{
		const apiData = this.httpClient.post<T>(url, data).pipe(
			map((response: any) => response as T),
			catchError((error) => of(null))
		);
		return apiData;
	}
}
