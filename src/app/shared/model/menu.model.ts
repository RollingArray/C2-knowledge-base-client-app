/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Menus model
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:53:35 
 * Last modified  : 2021-12-16 20:53:35 
 */

import { BaseModel } from "../model/base.model";
import { ParentMenuModel } from "./parent-menu.model";

export interface MenusModel extends BaseModel
{
    success?: boolean;
    data?: ParentMenuModel[];
}



