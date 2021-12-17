/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Search model
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:52:13 
 * Last modified  : 2021-12-16 20:52:13 
 */

import { BaseModel } from "./base.model";
import { ContentModel } from "./content.model";

export interface SearchModel extends BaseModel
{
	searchKey?: string,
	data?: ContentModel[],
	success?: boolean;
}