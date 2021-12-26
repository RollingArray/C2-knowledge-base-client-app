/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary Menu page
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-11-01 20:47:46 
 * Last modified  : 2021-12-17 20:01:07
 */

import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { StringKey } from "src/app/shared/constant/string.constant";
import { OperationEnum } from "src/app/shared/enum/operation.enum";
import { ArticleModel } from "src/app/shared/model/article.model";
import { ChildMenuModel } from "src/app/shared/model/child-menu.model";
import { MenusModel } from "src/app/shared/model/menu.model";
import { ParentMenuModel } from "src/app/shared/model/parent-menu.model";
import { SettingsModel } from "src/app/shared/model/settings.model";
import { SubChildMenuModel } from "src/app/shared/model/sub-child-menu.model";
import { ArticleService } from "src/app/shared/service/article.service";
import { MenuService } from "src/app/shared/service/menu.service";
import { ParentChildMenuService } from "src/app/shared/service/parent-child-menu.service";
import { SettingsService } from "src/app/shared/service/settings.service";
import { environment } from "src/environments/environment";

@Component({
	selector: "app-menu",
	templateUrl: "./menu.page.html",
	styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit, OnDestroy
{
	/**
	 * String key of menu page
	 */
	readonly stringKey = StringKey;

	/**
	 * Root menu model of menu page
	 */
	private _rootMenuModel: MenusModel;

	/**
	 * Settings model of menu page
	 */
	private _settingsModel: SettingsModel;

	/**
	 * Determines whether data has
	 */
	private _hasData = false;

	/**
	 * Allow preview of menu page
	 */
	readonly allowPreview = environment.allowPreview;

	/**
	 * Article id of menu page
	 */
	private _articleId = '';

	/**
	 * Gets root menu model
	 */
	get rootMenuModel()
	{
		return this._rootMenuModel;
	}

	/**
	 * Gets settings model
	 */
	get settingsModel()
	{
		return this._settingsModel;
	}

	/**
	 * Gets whether has data
	 */
	get hasData()
	{
		return this._hasData;
	}

	get articleId()
	{
		return this._articleId;
	}
	
	/**
	 * Creates an instance of project members page.
	 * @param injector 
	 */
	constructor(
		private menuService: MenuService,
		private parentChildMenuService: ParentChildMenuService,
		private articleService: ArticleService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private alertController: AlertController,
		private settingsService: SettingsService
	)
	{
		this.loadData();
	}

	/**
	 * on init
	 */
	async ngOnInit()
	{
		
		this._articleId = this.router.url.split('/').pop();
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
	loadData()
	{
		this.menuService.getData().subscribe(data =>
		{
			this._hasData = true;
			this._settingsModel = data.settings;
			this._rootMenuModel = data.menu;
			const firstArticle = this._rootMenuModel.data[0].childMenu.data[0].articleId;
			if (this._articleId === 'go')
			{
				this.router.navigate(['go', 'articles', firstArticle]);	
			}
			else
			{
				this.router.navigate(['go', 'articles', this._articleId]);
			}
		});
	}

	gotoPage(articleId: string)
	{
		this.router.navigate(['go', 'articles', articleId]);
		this._articleId = articleId;
	}

	/**
	 * Adds main menu
	 */
	public async addMenuCategory()
	{
		const alert = await this.alertController.create({
			header: 'Prompt!',
			inputs: [
				{
					name: 'articleTitle',
					type: 'textarea',
					placeholder: 'Article title'
				},
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () =>
					{
						//
					}
				}, {
					text: 'Ok',
					handler: (data) =>
					{
						const articleModel: ArticleModel = {
							articleId: data.articleTitle!.trim().toLowerCase().replace(/ /g, "-"),
							articleTitle: data.articleTitle,
							operationType: OperationEnum.CREATE
						}
						this.articleService.crudArticleMenu(articleModel).subscribe(data =>
						{
							const parentMenuModel: ParentMenuModel = {
								articleParentId: articleModel.articleId,
								parentMenuOrder: this._rootMenuModel.data.length + 1,
								articleChildId: '',
								childMenuOrder: 0,
								subChildMenuOrder: 0,
								articleSubChildId: '',
								operationType: OperationEnum.CREATE
							};

							this.parentChildMenuService.crudMenu(parentMenuModel).subscribe(data =>
							{
								this.loadData();
							})
						})
					}
				}
			]
		});

		await alert.present();
	}

	public async addSubMainMenu(mainMenu: ParentMenuModel)
	{
		const alert = await this.alertController.create({
			header: 'Prompt!',
			inputs: [
				{
					name: 'articleTitle',
					type: 'textarea',
					placeholder: 'Article title'
				},
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () =>
					{
						//
					}
				}, {
					text: 'Ok',
					handler: (data) =>
					{
						const articleModel: ArticleModel = {
							articleId: data.articleTitle!.trim().toLowerCase().replace(/ /g, "-"),
							articleTitle: data.articleTitle,
							operationType: OperationEnum.CREATE
						}
						this.articleService.crudArticleMenu(articleModel).subscribe(data =>
						{
							const parentMenuModel: ParentMenuModel = {
								articleParentId: mainMenu.articleParentId,
								parentMenuOrder: mainMenu.parentMenuOrder,
								articleChildId: articleModel.articleId,
								childMenuOrder: mainMenu.childMenu.success ? mainMenu.childMenu.data.length + 1 : 1,
								subChildMenuOrder: 0,
								articleSubChildId: '',
								operationType: OperationEnum.CREATE
							};

							this.parentChildMenuService.crudMenu(parentMenuModel).subscribe(data =>
							{
								this.loadData();
							})
						})
					}
				}
			]
		});

		await alert.present();
	}

	/**
	 * Orders up main menu
	 * @param parentMenu 
	 */
	public orderMainMenu(parentMenu: ParentMenuModel, order: string)
	{
		const passedData: ParentMenuModel = {
			...parentMenu,
			parentMenuOrder: order === 'up' ? parseInt(parentMenu.parentMenuOrder.toString()) + 1 : parseInt(parentMenu.parentMenuOrder.toString()) - 1,
			operationType: OperationEnum.EDIT_PARENT
		};

		this.parentChildMenuService.crudMenu(passedData).subscribe(data =>
		{
			this.loadData();
		});
	}

	/**
	 * Edits main menu
	 * @param parentMenu 
	 */
	public async editMainMenu(parentMenu: ParentMenuModel)
	{
		const alert = await this.alertController.create({
			header: 'Prompt!',
			inputs: [
				{
					value: parentMenu.articleTitle,
					name: 'articleTitle',
					type: 'textarea',
					placeholder: 'Article title'
				},
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () =>
					{
						//
					}
				}, {
					text: 'Ok',
					handler: (data) =>
					{
						const articleModel: ArticleModel = {
							articleId: parentMenu.articleParentId,
							articleTitle: data.articleTitle,
							operationType: OperationEnum.EDIT
						}
						this.articleService.crudArticleMenu(articleModel).subscribe(data =>
						{
							this.loadData();
						})
					}
				}
			]
		});

		await alert.present();
	}

	/**
	 * Deletes main menu
	 * @param parentMenu 
	 */
	public deleteMainMenu(parentMenu: ParentMenuModel)
	{
		const passedData: ParentMenuModel = {
			...parentMenu,
			operationType: OperationEnum.DELETE_PARENT
		};

		this.parentChildMenuService.crudMenu(passedData).subscribe(data =>
		{
			this.loadData();
		});
	}

	/**
	 * 
	 * @param parentMenu 
	 * @param childMenu 
	 * @param order 
	 */
	public orderChildMenu(parentMenu: ParentMenuModel, childMenu: ChildMenuModel, order: string)
	 {
		 const passedData: ParentMenuModel = {
			 ...parentMenu,
			 articleChildId: childMenu.articleId,
			 childMenuOrder: order === 'up' ? parseInt(childMenu.childMenuOrder.toString()) + 1 : parseInt(childMenu.childMenuOrder.toString()) - 1,
			 operationType: OperationEnum.EDIT_CHILD
		 };
 
		 this.parentChildMenuService.crudMenu(passedData).subscribe(data =>
		 {
			 this.loadData();
		 });
	 }

	/**
	 * Edits child menu
	 * @param childMenu 
	 */
	public async editChildMenu(childMenu: ChildMenuModel)
	{
		const alert = await this.alertController.create({
			header: 'Prompt!',
			inputs: [
				{
					value: childMenu.articleTitle,
					name: 'articleTitle',
					type: 'textarea',
					placeholder: 'Article title'
				},
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () =>
					{
						//
					}
				}, {
					text: 'Ok',
					handler: (data) =>
					{
						const articleModel: ArticleModel = {
							articleId: childMenu.articleId,
							articleTitle: data.articleTitle,
							operationType: OperationEnum.EDIT
						}
						this.articleService.crudArticleMenu(articleModel).subscribe(data =>
						{
							this.loadData();
						})
					}
				}
			]
		});

		await alert.present();
	}

	/**
	 * Deletes child menu
	 * @param childMenu 
	 */
	public deleteChildMenu(parentMenu: ParentMenuModel, childMenu: ChildMenuModel)
	{
		const passedData: ParentMenuModel = {
			...parentMenu,
			articleChildId: childMenu.articleId,
			operationType: OperationEnum.DELETE_CHILD
		};

		this.parentChildMenuService.crudMenu(passedData).subscribe(data =>
		{
			this.loadData();
		});
	}

	/**
	 * Edits settings
	 */
	public async editSettings()
	{
		const alert = await this.alertController.create({
			header: 'Prompt!',
			inputs: [
				{
					value: this._settingsModel.appName,
					name: 'appName',
					type: 'textarea',
					placeholder: 'App name'
				},
				{
					value: this._settingsModel.signUpUrl,
					name: 'signUpUrl',
					type: 'textarea',
					placeholder: 'Sign up url'
				},
				{
					value: this._settingsModel.supportEmail,
					name: 'supportEmail',
					type: 'textarea',
					placeholder: 'Support Email'
				},
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () =>
					{
						//
					}
				}, {
					text: 'Ok',
					handler: (data) =>
					{
						const settingsModel: SettingsModel = {
							appName: data.appName,
							signUpUrl: data.signUpUrl,
							supportEmail: data.supportEmail
						}
						this.settingsService.crudSettings(settingsModel).subscribe(data =>
						{
							this.loadData();
						})
					}
				}
			]
		});

		await alert.present();
	}

	/**
	 * Adds sub menu
	 * @param childMenu 
	 */
	public async addSubMenu(parentMenu: ParentMenuModel, childMenu: ChildMenuModel)
	{
		const alert = await this.alertController.create({
			header: 'Prompt!',
			inputs: [
				{
					name: 'articleTitle',
					type: 'textarea',
					placeholder: 'Article title'
				},
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () =>
					{
						//
					}
				}, {
					text: 'Ok',
					handler: (data) =>
					{
						const articleModel: ArticleModel = {
							articleId: data.articleTitle!.trim().toLowerCase().replace(/ /g, "-"),
							articleTitle: data.articleTitle,
							operationType: OperationEnum.CREATE
						}
						this.articleService.crudArticleMenu(articleModel).subscribe(data =>
						{
							const parentMenuModel: ParentMenuModel = {
								articleParentId: parentMenu.articleParentId,
								parentMenuOrder: parentMenu.parentMenuOrder,
								articleChildId: childMenu.articleId,
								childMenuOrder: childMenu.childMenuOrder,
								articleSubChildId: articleModel.articleId,
								subChildMenuOrder: childMenu.subChildMenu.success ? childMenu.subChildMenu.data.length + 1 : 1,
								operationType: OperationEnum.CREATE
							};

							this.parentChildMenuService.crudMenu(parentMenuModel).subscribe(data =>
							{
								this.loadData();
							})
						})
					}
				}
			]
		});

		await alert.present();
	}

	/**
	 * Orders child sub menu
	 * @param parentMenu 
	 * @param childMenu 
	 * @param subChildMenu 
	 * @param order 
	 */
	public orderChildSubMenu(parentMenu: ParentMenuModel, childMenu: ChildMenuModel, subChildMenu: SubChildMenuModel, order: string)
	 {
		 const passedData: ParentMenuModel = {
			 ...parentMenu,
			 childMenuOrder: childMenu.childMenuOrder,
			 articleChildId: childMenu.articleId,
			 articleSubChildId: subChildMenu.articleId,
			 subChildMenuOrder: order === 'up' ? parseInt(subChildMenu.subChildMenuOrder.toString()) + 1 : parseInt(subChildMenu.subChildMenuOrder.toString()) - 1,
			 operationType: OperationEnum.EDIT_SUB_CHILD
		 };
 
		 this.parentChildMenuService.crudMenu(passedData).subscribe(data =>
		 {
			 this.loadData();
		 });
	 }

	/**
	 * Edits child menu
	 * @param childMenu 
	 */
	 public async editSubChildMenu(subChildMenu: SubChildMenuModel)
	 {
		 const alert = await this.alertController.create({
			 header: 'Prompt!',
			 inputs: [
				 {
					 value: subChildMenu.articleTitle,
					 name: 'articleTitle',
					 type: 'textarea',
					 placeholder: 'Article title'
				 },
			 ],
			 buttons: [
				 {
					 text: 'Cancel',
					 role: 'cancel',
					 cssClass: 'secondary',
					 handler: () =>
					 {
						 //
					 }
				 }, {
					 text: 'Ok',
					 handler: (data) =>
					 {
						 const articleModel: ArticleModel = {
							 articleId: subChildMenu.articleId,
							 articleTitle: data.articleTitle,
							 operationType: OperationEnum.EDIT
						 }
						 this.articleService.crudArticleMenu(articleModel).subscribe(data =>
						 {
							 this.loadData();
						 })
					 }
				 }
			 ]
		 });
 
		 await alert.present();
	 }
	
	/**
	 * Deletes child menu
	 * @param childMenu 
	 */
	 public deleteSubChildMenu(parentMenu: ParentMenuModel, childMenu: ChildMenuModel, subChildMenu: SubChildMenuModel)
	 {
		 const passedData: ParentMenuModel = {
			 ...parentMenu,
			 articleChildId: childMenu.articleId,
			 articleSubChildId: subChildMenu.articleId,
			 operationType: OperationEnum.DELETE_SUB_CHILD
		 };
 
		 this.parentChildMenuService.crudMenu(passedData).subscribe(data =>
		 {
			 this.loadData();
		 });
	 }
}
