/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Article settings model
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:51:52 
 * Last modified  : 2021-12-16 20:52:27
 */

import { ArticleModel } from "./article.model";
import { BaseModel } from "./base.model";
import { SettingsModel } from "./settings.model";

export interface ArticleSettingsModel extends BaseModel {
    article?: ArticleModel;
    settings?: SettingsModel;
}


