/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Content model
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:52:56 
 * Last modified  : 2021-12-16 20:52:56 
 */


import { ElementTypeEnum } from "../enum/element-type.enum";
import { OperationEnum } from "../enum/operation.enum";

export interface ContentModel
{
    articleId?: string,
    articleTitle?: string,
    articleComponentOrder?: number;
    articleComponentId?: string;
    articleComponentType?: ElementTypeEnum;
    articleComponentContent?: string;
    articleComponentList?: string[];
    operationType?: OperationEnum;
}
