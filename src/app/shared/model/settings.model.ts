/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Settings model
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:54:13 
 * Last modified  : 2021-12-16 20:54:13 
 */

import { BaseModel } from "./base.model";

export interface SettingsModel extends BaseModel
{
    appName: string;
    signUpUrl: string;
    supportEmail: string;
}


