/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Article model
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-12-16 20:52:13 
 * Last modified  : 2021-12-16 20:52:13 
 */

import { FeedbackEnum } from "../enum/feedback.enum";
import { OperationEnum } from "../enum/operation.enum";
import { BaseModel } from "./base.model";
import { ContentModel } from "./content.model";

export interface ArticleModel extends BaseModel {
    articleId: string,
    articleTitle?: string,
    data?: ContentModel[],
    success?: boolean;
    next?: string,
    previous?: string,
    feedback?: FeedbackEnum,
    operationType?: OperationEnum;
}


