/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Child menu model
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:52:39 
 * Last modified  : 2021-12-16 20:52:39 
 */

import { SubChildMenuModel } from "./sub-child-menu.model";


export interface ChildMenuModel
{
    articleId: string;
    articleTitle: string;
    childMenuOrder: number;
    subChildMenu?: {
        success?: boolean;
        data?: SubChildMenuModel[];
    };
}
