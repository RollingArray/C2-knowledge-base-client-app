/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Parent menu model
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:53:54 
 * Last modified  : 2021-12-16 20:54:09
 */

import { OperationEnum } from "../enum/operation.enum";
import { BaseModel } from "./base.model";
import { ChildMenuModel } from "./child-menu.model";

export interface ParentMenuModel extends BaseModel
{
    articleParentId: string;
    parentMenuOrder?: number;
    articleChildId?: string;
    childMenuOrder?: number;
    articleSubChildId?: string;
    subChildMenuOrder?: number;
    articleTitle?: string;
    operationType?: OperationEnum;
    childMenu?: {
        success?: boolean;
        data?: ChildMenuModel[];
    };
}