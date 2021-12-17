/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary Articles page
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-11-15 21:34:14 
 * Last modified  : 2021-12-17 20:39:15
 */


import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StringKey } from 'src/app/shared/constant/string.constant';
import { ElementTypeEnum } from 'src/app/shared/enum/element-type.enum';
import { FeedbackEnum } from 'src/app/shared/enum/feedback.enum';
import { OperationEnum } from 'src/app/shared/enum/operation.enum';
import { ArticleModel } from 'src/app/shared/model/article.model';
import { ContentModel } from "src/app/shared/model/content.model";
import { SettingsModel } from 'src/app/shared/model/settings.model';
import { ArticleElementService } from 'src/app/shared/service/article-element.service';
import { ArticleSettingsService } from 'src/app/shared/service/article-settings.service';
import { ArticleService } from 'src/app/shared/service/article.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: "articles",
	templateUrl: "./articles.page.html",
	styleUrls: ["./articles.page.scss"]
})
export class ArticlesPage implements OnInit, OnDestroy
{
	/**
	 * Article id of articles page
	 */
	private _articleId: string = '';

	/**
	 * Article model of articles page
	 */
	private _articleModel: ArticleModel;

	/**
	 * Preview  of articles page
	 */
	private _preview: boolean = false;

	/**
	 * Settings model of menu page
	 */
	private _settingsModel: SettingsModel;
	
	/**
	 * Determines whether data has
	 */
	private _hasData = false;
	
	/**
	 * Feedback submitted of articles page
	 */
	private _feedbackSubmitted = false;
 
	 /**
	  * Gets settings model
	  */
	 get settingsModel()
	 {
		 return this._settingsModel;
	 }
	
	/**
	 * Element type enum of articles page
	 */
	readonly elementTypeEnum = ElementTypeEnum;

	/**
	 * String key of articles page
	 */
	readonly stringKey = StringKey;

	/**
	 * Allow preview of menu page
	 */
	readonly allowPreview = environment.allowPreview;
	
	/**
	 * Feedback enum of articles page
	 */
	readonly feedbackEnum = FeedbackEnum;

	/**
	 * Gets article model
	 */
	get articleModel()
	{
		return this._articleModel;
	}

	/**
	 * Gets preview
	 */
	get preview()
	{
		return this._preview;
	}

	/**
	 * Gets whether has data
	 */
	 get hasData()
	 {
		 return this._hasData;
	 }
	
	/**
	 * Gets feedback submitted
	 */
	get feedbackSubmitted()
	{
		return this._feedbackSubmitted;
	}

	/**
	 * Creates an instance of articles page.
	 * @param articleService 
	 * @param activatedRoute 
	 * @param alertController 
	 * @param articleElementService 
	 * @param articleSettingsService 
	 * @param sanitizer 
	 */
	constructor(
		private articleService: ArticleService,
		public activatedRoute: ActivatedRoute,
		private alertController: AlertController,
		private articleElementService: ArticleElementService,
		private articleSettingsService: ArticleSettingsService,
		private sanitizer: DomSanitizer
	)
	{
		this._articleId = this.activatedRoute.snapshot.paramMap.get("articleId");

		this.loadData();
	}

	/**
	 * on init
	 */
	async ngOnInit()
	{
		//
	}

	/**
	 * Ions view did enter
	 */
	async ionViewDidEnter()
	{

		//
	}

	/**
	 * on destroy
	 */
	ngOnDestroy()
	{
		//
	}

	// load data
	async loadData()
	{
		let orderedContents: ContentModel[] = [];

		const article: ArticleModel = {
			articleId: this._articleId
		}
		this.articleSettingsService.getData(article).subscribe(data =>
		{
			this._hasData = true;
			this._articleModel = data.article;
			this._settingsModel = data.settings;
		});
	}

	/**
	 * Bolds articles page
	 * @param text 
	 * @returns  
	 */
	public bold(text)
	{
		var bold = /\*\*(.*?)\*\*/gm;
		var html = text.replace(bold, '<b>$1</b>');
		return this.sanitizer.bypassSecurityTrustHtml(html);
	}

	/**
	 * Adds sub main menu
	 */
	public async addSubMainMenu(contentModel?: ContentModel)
	{

		const alert = await this.alertController.create({
			cssClass: 'myClass',
			header: 'Prompt!',
			inputs: [
				{
					name: 'articleComponentContent',
					type: 'textarea',
					placeholder: 'Article title'
				},

			],
			buttons: [
				{
					text: `Add as - ${ElementTypeEnum.LEVEL_1}`,
					handler: (data) =>
					{
						const contentModel: ContentModel = {
							articleComponentContent: data.articleComponentContent
						};

						this.generateContent(ElementTypeEnum.LEVEL_1, contentModel, OperationEnum.CREATE);
					}
				}, {
					text: `Add as - ${ElementTypeEnum.LEVEL_2}`,
					handler: (data) =>
					{
						const contentModel: ContentModel = {
							articleComponentContent: data.articleComponentContent
						};
						this.generateContent(ElementTypeEnum.LEVEL_2, contentModel, OperationEnum.CREATE);
					}
				},
				{
					text: `Add as - ${ElementTypeEnum.LEVEL_3}`,
					handler: (data) =>
					{
						const contentModel: ContentModel = {
							articleComponentContent: data.articleComponentContent
						};
						this.generateContent(ElementTypeEnum.LEVEL_3, contentModel, OperationEnum.CREATE);
					}
				}
				, {
					text: `Add as - ${ElementTypeEnum.LIST}`,
					handler: (data) =>
					{
						const contentModel: ContentModel = {
							articleComponentContent: data.articleComponentContent
						};
						this.generateContent(ElementTypeEnum.LIST, contentModel, OperationEnum.CREATE);
					}
				}, {
					text: `Add as - ${ElementTypeEnum.LIST_IMAGE}`,
					handler: (data) =>
					{
						const contentModel: ContentModel = {
							articleComponentContent: data.articleComponentContent
						};
						this.generateContent(ElementTypeEnum.LIST_IMAGE, contentModel, OperationEnum.CREATE);
					}
				},
				{
					text: `Add as - ${ElementTypeEnum.PARA}`,
					handler: (data) =>
					{
						const contentModel: ContentModel = {
							articleComponentContent: data.articleComponentContent
						};
						this.generateContent(ElementTypeEnum.PARA, contentModel, OperationEnum.CREATE);
					}
				},
				{
					text: `Add as - ${ElementTypeEnum.PARA_IMAGE}`,
					handler: (data) =>
					{
						const contentModel: ContentModel = {
							articleComponentContent: data.articleComponentContent
						};
						this.generateContent(ElementTypeEnum.PARA_IMAGE, contentModel, OperationEnum.CREATE);
					}
				}
			]
		});

		await alert.present();
	}

	/**
	 * Generates content
	 * @param elementTypeEnum 
	 * @param articleComponentContent 
	 * @param operationType 
	 */
	private generateContent(elementTypeEnum: ElementTypeEnum, contentModel: ContentModel, operationType: OperationEnum)
	{
		console.log(contentModel);
		if (operationType === OperationEnum.CREATE)
		{
			contentModel = {
				articleId: this._articleId!,
				articleComponentOrder: this._articleModel.success ? this._articleModel.data.length + 1 : 1,
				articleComponentType: elementTypeEnum,
				articleComponentContent: contentModel.articleComponentContent,
				operationType: operationType
			};
		}

		else if (operationType === OperationEnum.EDIT)
		{
			contentModel = {
				articleId: this._articleId!,
				articleComponentId: contentModel.articleComponentId,
				articleComponentOrder: contentModel.articleComponentOrder,
				articleComponentType: elementTypeEnum,
				articleComponentContent: contentModel.articleComponentContent,
				operationType: operationType
			};
		}


		this.articleElementService.crudArticleElement(contentModel).subscribe(data =>
		{
			this.loadData();
		});
	}

	/**
	 * Sets preview
	 */
	public setPreview()
	{
		this._preview = !this._preview;
	}

	/**
	 * Orders up
	 * @param contentModel 
	 */
	public orderUp(contentModel: ContentModel)
	{
		const passedData: ContentModel = {
			...contentModel,
			articleComponentOrder: parseInt(contentModel.articleComponentOrder.toString()) + 1,
			operationType: OperationEnum.EDIT
		};
		this.articleElementService.crudArticleElement(passedData).subscribe(data =>
		{
			this.loadData();
		});
	}

	/**
	 * Orders down
	 * @param [contentModel] 
	 */
	public orderDown(contentModel?: ContentModel)
	{
		const passedData: ContentModel = {
			...contentModel,
			articleComponentOrder: parseInt(contentModel.articleComponentOrder.toString()) - 1,
			operationType: OperationEnum.EDIT
		};
		this.articleElementService.crudArticleElement(passedData).subscribe(data =>
		{
			this.loadData();
		});
	}

	/**
	 * Adds sub main menu
	 */
	public async editContent(contentModel: ContentModel)
	{

		const alert = await this.alertController.create({
			cssClass: 'myClass',
			header: 'Prompt!',
			inputs: [
				{
					value: contentModel.articleComponentContent,
					name: 'articleComponentContent',
					type: 'textarea',
					placeholder: 'Article title'
				},

			],
			buttons: [
				{
					text: `Add as - ${ElementTypeEnum.LEVEL_1}`,
					handler: (data) =>
					{
						contentModel = {
							...contentModel,
							articleComponentContent: data.articleComponentContent
						};
						this.generateContent(ElementTypeEnum.LEVEL_1, contentModel, OperationEnum.EDIT);
					}
				}, {
					text: `Add as - ${ElementTypeEnum.LEVEL_2}`,
					handler: (data) =>
					{
						contentModel = {
							...contentModel,
							articleComponentContent: data.articleComponentContent
						};
						this.generateContent(ElementTypeEnum.LEVEL_2, contentModel, OperationEnum.EDIT);
					}
				},
				{
					text: `Add as - ${ElementTypeEnum.LEVEL_3}`,
					handler: (data) =>
					{
						contentModel = {
							...contentModel,
							articleComponentContent: data.articleComponentContent
						};
						this.generateContent(ElementTypeEnum.LEVEL_3, contentModel, OperationEnum.EDIT);
					}
				}
				, {
					text: `Add as - ${ElementTypeEnum.LIST}`,
					handler: (data) =>
					{
						contentModel = {
							...contentModel,
							articleComponentContent: data.articleComponentContent
						};
						this.generateContent(ElementTypeEnum.LIST, contentModel, OperationEnum.EDIT);
					}
				}, {
					text: `Add as - ${ElementTypeEnum.LIST_IMAGE}`,
					handler: (data) =>
					{
						contentModel = {
							...contentModel,
							articleComponentContent: data.articleComponentContent
						};
						this.generateContent(ElementTypeEnum.LIST_IMAGE, contentModel, OperationEnum.EDIT);
					}
				},
				{
					text: `Add as - ${ElementTypeEnum.PARA}`,
					handler: (data) =>
					{
						contentModel = {
							...contentModel,
							articleComponentContent: data.articleComponentContent
						};
						this.generateContent(ElementTypeEnum.PARA, contentModel, OperationEnum.EDIT);
					}
				},
				{
					text: `Add as - ${ElementTypeEnum.PARA_IMAGE}`,
					handler: (data) =>
					{
						contentModel = {
							...contentModel,
							articleComponentContent: data.articleComponentContent
						};
						this.generateContent(ElementTypeEnum.PARA_IMAGE, contentModel, OperationEnum.EDIT);
					}
				}
			]
		});

		await alert.present();
	}

	/**
	 * Deletes content
	 * @param contentModel 
	 */
	public deleteContent(contentModel: ContentModel)
	{
		const passedData: ContentModel = {
			...contentModel,
			operationType: OperationEnum.DELETE
		};
		this.articleElementService.crudArticleElement(passedData).subscribe(data =>
		{
			this.loadData();
		});
	}

	/**
	 * Mailtos articles page
	 * @param emailAddress 
	 * @param emailSubject 
	 * @returns  
	 */
	mailto() {
		return "mailto:" + this._settingsModel.supportEmail + "?subject=" + this._settingsModel.appName + " " + this.stringKey.FDBK
	}

	/**
	 * Goto sign up
	 */
	gotoSignUp()
	{
		window.open(this._settingsModel.signUpUrl, "_blank");
	}

	/**
	 * Feedbacks articles page
	 */
	feedback(feedback: FeedbackEnum)
	{
		this._feedbackSubmitted = true;
		const passedData: ArticleModel = {
			articleId: this._articleId,
			feedback: feedback
		};
		this.articleService.articleFeedback(passedData).subscribe(async data =>
		{
			this._feedbackSubmitted = false;
			const alert = await this.alertController.create({
				cssClass: 'my-custom-class',
				header: this.stringKey.THNKU,
				message: this.stringKey.THNKU_INFO,
				buttons: ['OK']
			  });
		  
			  await alert.present();
		});
	}
}
