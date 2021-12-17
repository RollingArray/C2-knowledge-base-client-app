/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Menu settings model
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:53:11 
 * Last modified  : 2021-12-16 20:53:26
 */

import { BaseModel } from "./base.model";
import { MenusModel } from "./menu.model";
import { SettingsModel } from "./settings.model";


export interface MenuSettingsModel extends BaseModel
{
    menu?: MenusModel;
    settings?: SettingsModel;
}



