/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Update checker service
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:58:46 
 * Last modified  : 2021-12-16 20:59:02
 */


import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

@Injectable({
  providedIn: "root"
})
export class UpdateCheckerService {
	constructor(
		private swUpdate: SwUpdate,
	) { }

	/**
	 * Checks if app update available
	 */
	 async checkIfAppUpdateAvailable()
	 {
 
		 if (this.swUpdate.isEnabled)
		 {
			 this.swUpdate.available.subscribe(() =>
			 {
				 let versionUpdateMessage = `New version of is available. Load New Version ?`;
 
				 if (confirm(versionUpdateMessage))
				 {
					 window.location.reload();
				 }
			 });
		 }
	 }
}
