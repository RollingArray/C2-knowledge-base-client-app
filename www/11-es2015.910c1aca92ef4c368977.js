(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{BAW5:function(t,n,e){"use strict";e.r(n),e.d(n,"ArticlesPageModule",function(){return F});var i=e("tyNb"),o=e("TEn/"),c=e("ofXK"),r=e("3Pt+"),b=e("fXoL");let a=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({imports:[[c.b,r.a,o.w]]}),t})(),s=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({providers:[],imports:[[i.j,c.b,r.a,r.d],o.w,i.j,c.b,r.a,r.d]}),t})();var l=e("mrSG"),d=e("vGT6"),g=function(t){return t.LEVEL_1="level-1",t.LEVEL_2="level-2",t.LEVEL_3="level-3",t.PARA="para",t.LIST="list",t.LIST_IMAGE="list-image",t.PARA_IMAGE="para-image",t}({}),p=function(t){return t.DELIGHTFUL="delightful",t.NEUTRAL="neutral",t.SAD="sad",t}({}),u=e("n7uF"),m=e("AytR"),C=e("4AOu"),h=e("9IC/"),f=e("whyd"),L=e("tk/3");let M=(()=>{class t extends f.a{constructor(t){super(t)}crudArticleElement(t){return this.post(h.a.CONTENT_CRUD,t)}}return t.\u0275fac=function(n){return new(n||t)(b.Qb(L.b))},t.\u0275prov=b.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),E=(()=>{class t extends f.a{constructor(t){super(t)}getData(t){return this.post(h.a.ARTICLE_DETAILS,t)}}return t.\u0275fac=function(n){return new(n||t)(b.Qb(L.b))},t.\u0275prov=b.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var O=e("jhN1");function I(t,n){if(1&t&&(b.Mb(0,"div",3),b.Kb(1,"img",4),b.Lb()),2&t){const t=b.Wb();b.zb(1),b.Zb("src",t.loader,b.ec)}}const _=function(t){return{visibility:t}};let y=(()=>{class t{constructor(){this.loader=d.a.ICON_LOADER,this.height=50,this.width=50,this.isLoading=!0}ngOnInit(){}hideLoader(){this.isLoading=!1}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Db({type:t,selectors:[["image-holder"]],inputs:{loader:"loader",height:"height",width:"width",image:"image"},decls:3,vars:5,consts:[[1,"container"],["class","loading",4,"ngIf"],[3,"src","ngStyle","load","error"],[1,"loading"],[3,"src"]],template:function(t,n){1&t&&(b.Mb(0,"div",0),b.gc(1,I,2,1,"div",1),b.Mb(2,"img",2),b.Ub("load",function(){return n.hideLoader()})("error",function(){return n.hideLoader()}),b.Lb(),b.Lb()),2&t&&(b.zb(1),b.Zb("ngIf",n.isLoading),b.zb(1),b.Zb("src",n.image,b.ec)("ngStyle",b.ac(3,_,n.isLoading?"hidden":"")))},directives:[c.j,c.k],styles:[".loading[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}"]}),t})();function v(t,n){if(1&t){const t=b.Nb();b.Mb(0,"ion-buttons",13),b.Ub("click",function(){return b.cc(t),b.Wb().gotoSignUp()}),b.Mb(1,"ion-button",14),b.Mb(2,"b"),b.Mb(3,"ion-text",15),b.hc(4),b.Lb(),b.hc(5," Sign Up \xa0"),b.Lb(),b.Lb(),b.Lb()}if(2&t){const t=b.Wb();b.zb(1),b.Zb("routerLink",t.settingsModel.signUpUrl),b.zb(3),b.ic(t.settingsModel.appName)}}function W(t,n){if(1&t){const t=b.Nb();b.Mb(0,"ion-button",13),b.Ub("click",function(){return b.cc(t),b.Wb(2).addSubMainMenu()}),b.Kb(1,"ion-icon",6),b.hc(2," \xa0 Add Content "),b.Lb()}if(2&t){const t=b.Wb(2);b.zb(1),b.Zb("src",t.stringKey.ICON_ADD)}}function T(t,n){if(1&t&&(b.Mb(0,"ion-item"),b.gc(1,W,3,1,"ion-button",2),b.Lb()),2&t){const t=b.Wb();b.zb(1),b.Zb("ngIf",!t.preview)}}function z(t,n){if(1&t){const t=b.Nb();b.Mb(0,"ion-item"),b.Mb(1,"ion-button"),b.hc(2),b.Lb(),b.Mb(3,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderUp(n)}),b.hc(4),b.Lb(),b.Mb(5,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderDown(n)}),b.hc(6),b.Lb(),b.Mb(7,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).editContent(n)}),b.Kb(8,"ion-icon",6),b.Lb(),b.Mb(9,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).deleteContent(n)}),b.Kb(10,"ion-icon",6),b.Lb(),b.Lb()}if(2&t){const t=b.Wb(2).$implicit,n=b.Wb(2);b.zb(2),b.kc(" ",n.stringKey.ORD," :: ",t.articleComponentOrder," "),b.zb(2),b.jc(" ",n.stringKey.DOW," "),b.zb(2),b.jc(" ",n.stringKey.UP," "),b.zb(2),b.Zb("src",n.stringKey.ICON_EDIT),b.zb(2),b.Zb("src",n.stringKey.ICON_DELETE)}}function A(t,n){if(1&t&&(b.Mb(0,"div",24),b.Mb(1,"ion-item"),b.Kb(2,"ion-icon",6),b.hc(3),b.Lb(),b.gc(4,z,11,6,"ion-item",8),b.Lb()),2&t){const t=b.Wb().$implicit,n=b.Wb(2);b.zb(2),b.Zb("src",n.stringKey.ICON_BOOKMARK),b.zb(1),b.jc(" ",t.articleComponentContent," "),b.zb(1),b.Zb("ngIf",n.allowPreview)}}function K(t,n){if(1&t){const t=b.Nb();b.Mb(0,"ion-item"),b.Mb(1,"ion-button"),b.hc(2),b.Lb(),b.Mb(3,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderUp(n)}),b.hc(4),b.Lb(),b.Mb(5,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderDown(n)}),b.hc(6),b.Lb(),b.Mb(7,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).editContent(n)}),b.Kb(8,"ion-icon",6),b.Lb(),b.Mb(9,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).deleteContent(n)}),b.Kb(10,"ion-icon",6),b.Lb(),b.Lb()}if(2&t){const t=b.Wb(2).$implicit,n=b.Wb(2);b.zb(2),b.kc(" ",n.stringKey.ORD," :: ",t.articleComponentOrder," "),b.zb(2),b.jc(" ",n.stringKey.DOW," "),b.zb(2),b.jc(" ",n.stringKey.UP," "),b.zb(2),b.Zb("src",n.stringKey.ICON_EDIT),b.zb(2),b.Zb("src",n.stringKey.ICON_DELETE)}}function k(t,n){if(1&t&&(b.Mb(0,"div",26),b.Mb(1,"ion-item"),b.Kb(2,"ion-icon",6),b.hc(3),b.Lb(),b.gc(4,K,11,6,"ion-item",8),b.Lb()),2&t){const t=b.Wb().$implicit,n=b.Wb(2);b.zb(2),b.Zb("src",n.stringKey.ICON_BOOKMARK),b.zb(1),b.jc(" ",t.articleComponentContent," "),b.zb(1),b.Zb("ngIf",n.allowPreview)}}function D(t,n){if(1&t){const t=b.Nb();b.Mb(0,"ion-item"),b.Mb(1,"ion-button"),b.hc(2),b.Lb(),b.Mb(3,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderUp(n)}),b.hc(4),b.Lb(),b.Mb(5,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderDown(n)}),b.hc(6),b.Lb(),b.Mb(7,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).editContent(n)}),b.Kb(8,"ion-icon",6),b.Lb(),b.Mb(9,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).deleteContent(n)}),b.Kb(10,"ion-icon",6),b.Lb(),b.Lb()}if(2&t){const t=b.Wb(2).$implicit,n=b.Wb(2);b.zb(2),b.kc(" ",n.stringKey.ORD," :: ",t.articleComponentOrder," "),b.zb(2),b.jc(" ",n.stringKey.DOW," "),b.zb(2),b.jc(" ",n.stringKey.UP," "),b.zb(2),b.Zb("src",n.stringKey.ICON_EDIT),b.zb(2),b.Zb("src",n.stringKey.ICON_DELETE)}}function P(t,n){if(1&t&&(b.Mb(0,"div",27),b.Mb(1,"ion-item"),b.hc(2),b.Lb(),b.gc(3,D,11,6,"ion-item",8),b.Lb()),2&t){const t=b.Wb().$implicit,n=b.Wb(2);b.zb(2),b.jc(" ",t.articleComponentContent," "),b.zb(1),b.Zb("ngIf",n.allowPreview)}}function w(t,n){if(1&t){const t=b.Nb();b.Mb(0,"ion-item"),b.Mb(1,"ion-button"),b.hc(2),b.Lb(),b.Mb(3,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderUp(n)}),b.hc(4),b.Lb(),b.Mb(5,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderDown(n)}),b.hc(6),b.Lb(),b.Mb(7,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).editContent(n)}),b.Kb(8,"ion-icon",6),b.Lb(),b.Mb(9,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).deleteContent(n)}),b.Kb(10,"ion-icon",6),b.Lb(),b.Lb()}if(2&t){const t=b.Wb(2).$implicit,n=b.Wb(2);b.zb(2),b.kc(" ",n.stringKey.ORD," :: ",t.articleComponentOrder," "),b.zb(2),b.jc(" ",n.stringKey.DOW," "),b.zb(2),b.jc(" ",n.stringKey.UP," "),b.zb(2),b.Zb("src",n.stringKey.ICON_EDIT),b.zb(2),b.Zb("src",n.stringKey.ICON_DELETE)}}function U(t,n){if(1&t&&(b.Mb(0,"div",28),b.Kb(1,"ion-text",29),b.gc(2,w,11,6,"ion-item",8),b.Lb()),2&t){const t=b.Wb().$implicit,n=b.Wb(2);b.zb(1),b.Zb("innerHTML",n.bold(t.articleComponentContent),b.dc),b.zb(1),b.Zb("ngIf",n.allowPreview)}}function x(t,n){if(1&t){const t=b.Nb();b.Mb(0,"ion-item"),b.Mb(1,"ion-button"),b.hc(2),b.Lb(),b.Mb(3,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderUp(n)}),b.hc(4),b.Lb(),b.Mb(5,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderDown(n)}),b.hc(6),b.Lb(),b.Mb(7,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).editContent(n)}),b.Kb(8,"ion-icon",6),b.Lb(),b.Mb(9,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).deleteContent(n)}),b.Kb(10,"ion-icon",6),b.Lb(),b.Lb()}if(2&t){const t=b.Wb(2).$implicit,n=b.Wb(2);b.zb(2),b.kc(" ",n.stringKey.ORD," :: ",t.articleComponentOrder," "),b.zb(2),b.jc(" ",n.stringKey.DOW," "),b.zb(2),b.jc(" ",n.stringKey.UP," "),b.zb(2),b.Zb("src",n.stringKey.ICON_EDIT),b.zb(2),b.Zb("src",n.stringKey.ICON_DELETE)}}function $(t,n){if(1&t&&(b.Mb(0,"ul",30),b.Kb(1,"li",29),b.gc(2,x,11,6,"ion-item",8),b.Lb()),2&t){const t=b.Wb().$implicit,n=b.Wb(2);b.zb(1),b.Zb("innerHTML",n.bold(t.articleComponentContent),b.dc),b.zb(1),b.Zb("ngIf",n.allowPreview)}}function j(t,n){if(1&t){const t=b.Nb();b.Mb(0,"ion-item"),b.Mb(1,"ion-button"),b.hc(2),b.Lb(),b.Mb(3,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderUp(n)}),b.hc(4," Down "),b.Lb(),b.Mb(5,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderDown(n)}),b.hc(6),b.Lb(),b.Mb(7,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).editContent(n)}),b.Kb(8,"ion-icon",6),b.Lb(),b.Mb(9,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).deleteContent(n)}),b.Kb(10,"ion-icon",6),b.Lb(),b.Lb()}if(2&t){const t=b.Wb(2).$implicit,n=b.Wb(2);b.zb(2),b.kc(" ",n.stringKey.ORD," :: ",t.articleComponentOrder," "),b.zb(4),b.jc(" ",n.stringKey.UP," "),b.zb(2),b.Zb("src",n.stringKey.ICON_EDIT),b.zb(2),b.Zb("src",n.stringKey.ICON_DELETE)}}function Z(t,n){if(1&t&&(b.Mb(0,"div",31),b.Kb(1,"img",6),b.gc(2,j,11,5,"ion-item",8),b.Lb()),2&t){const t=b.Wb().$implicit,n=b.Wb(2);b.zb(1),b.Zb("src",t.articleComponentContent,b.ec),b.zb(1),b.Zb("ngIf",n.allowPreview)}}function N(t,n){if(1&t){const t=b.Nb();b.Mb(0,"ion-item"),b.Mb(1,"ion-button"),b.hc(2),b.Lb(),b.Mb(3,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderUp(n)}),b.hc(4," Down "),b.Lb(),b.Mb(5,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).orderDown(n)}),b.hc(6),b.Lb(),b.Mb(7,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).editContent(n)}),b.Kb(8,"ion-icon",6),b.Lb(),b.Mb(9,"ion-button",25),b.Ub("click",function(){b.cc(t);const n=b.Wb(2).$implicit;return b.Wb(2).deleteContent(n)}),b.Kb(10,"ion-icon",6),b.Lb(),b.Lb()}if(2&t){const t=b.Wb(2).$implicit,n=b.Wb(2);b.zb(2),b.kc(" ",n.stringKey.ORD," :: ",t.articleComponentOrder," "),b.zb(4),b.jc(" ",n.stringKey.UP," "),b.zb(2),b.Zb("src",n.stringKey.ICON_EDIT),b.zb(2),b.Zb("src",n.stringKey.ICON_DELETE)}}function S(t,n){if(1&t&&(b.Mb(0,"div",32),b.Kb(1,"image-holder",33),b.gc(2,N,11,5,"ion-item",8),b.Lb()),2&t){const t=b.Wb().$implicit,n=b.Wb(2);b.zb(1),b.Zb("image",t.articleComponentContent),b.zb(1),b.Zb("ngIf",n.allowPreview)}}function R(t,n){if(1&t&&(b.Mb(0,"div"),b.gc(1,A,5,3,"div",17),b.gc(2,k,5,3,"div",18),b.gc(3,P,4,2,"div",19),b.gc(4,U,3,2,"div",20),b.gc(5,$,3,2,"ul",21),b.gc(6,Z,3,2,"div",22),b.gc(7,S,3,2,"div",23),b.Lb()),2&t){const t=n.$implicit,e=b.Wb(2);b.zb(1),b.Zb("ngIf",t.articleComponentType==e.elementTypeEnum.LEVEL_1),b.zb(1),b.Zb("ngIf",t.articleComponentType==e.elementTypeEnum.LEVEL_2),b.zb(1),b.Zb("ngIf",t.articleComponentType==e.elementTypeEnum.LEVEL_3),b.zb(1),b.Zb("ngIf",t.articleComponentType==e.elementTypeEnum.PARA),b.zb(1),b.Zb("ngIf",t.articleComponentType==e.elementTypeEnum.LIST),b.zb(1),b.Zb("ngIf",t.articleComponentType==e.elementTypeEnum.LIST_IMAGE),b.zb(1),b.Zb("ngIf",t.articleComponentType==e.elementTypeEnum.PARA_IMAGE)}}function G(t,n){if(1&t&&(b.Mb(0,"div"),b.gc(1,R,8,7,"div",16),b.Lb()),2&t){const t=b.Wb();b.zb(1),b.Zb("ngForOf",t.articleModel.data)}}function V(t,n){if(1&t&&(b.Mb(0,"ion-card",15),b.Mb(1,"ion-card-header"),b.Mb(2,"ion-card-title"),b.Kb(3,"ion-icon",6),b.hc(4),b.Lb(),b.Lb(),b.Mb(5,"ion-card-content"),b.hc(6),b.Mb(7,"a",34),b.hc(8),b.Lb(),b.Lb(),b.Lb()),2&t){const t=b.Wb();b.zb(3),b.Zb("src",t.stringKey.ICON_HELP),b.zb(1),b.jc(" \xa0",t.stringKey.HE_SU_CE,""),b.zb(2),b.jc(" ",t.stringKey.SUP_TXT," "),b.zb(1),b.Zb("href",t.mailto(),b.ec),b.zb(1),b.ic(t.settingsModel.supportEmail)}}const H=[{path:"",component:(()=>{class t{constructor(t,n,e,i,o,c){this.articleService=t,this.activatedRoute=n,this.alertController=e,this.articleElementService=i,this.articleSettingsService=o,this.sanitizer=c,this._articleId="",this._preview=!1,this.elementTypeEnum=g,this.stringKey=d.a,this.allowPreview=m.a.allowPreview,this.feedbackEnum=p,this._articleId=this.activatedRoute.snapshot.paramMap.get("articleId"),this.loadData()}get settingsModel(){return this._settingsModel}get articleModel(){return this._articleModel}get preview(){return this._preview}ngOnInit(){return Object(l.a)(this,void 0,void 0,function*(){})}ionViewDidEnter(){return Object(l.a)(this,void 0,void 0,function*(){})}ngOnDestroy(){}loadData(){return Object(l.a)(this,void 0,void 0,function*(){this.articleSettingsService.getData({articleId:this._articleId}).subscribe(t=>{this._articleModel=t.article,this._settingsModel=t.settings})})}bold(t){var n=t.replace(/\*\*(.*?)\*\*/gm,"<b>$1</b>");return this.sanitizer.bypassSecurityTrustHtml(n)}addSubMainMenu(t){return Object(l.a)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"myClass",header:"Prompt!",inputs:[{name:"articleComponentContent",type:"textarea",placeholder:"Article title"}],buttons:[{text:`Add as - ${g.LEVEL_1}`,handler:t=>{this.generateContent(g.LEVEL_1,{articleComponentContent:t.articleComponentContent},u.a.CREATE)}},{text:`Add as - ${g.LEVEL_2}`,handler:t=>{this.generateContent(g.LEVEL_2,{articleComponentContent:t.articleComponentContent},u.a.CREATE)}},{text:`Add as - ${g.LEVEL_3}`,handler:t=>{this.generateContent(g.LEVEL_3,{articleComponentContent:t.articleComponentContent},u.a.CREATE)}},{text:`Add as - ${g.LIST}`,handler:t=>{this.generateContent(g.LIST,{articleComponentContent:t.articleComponentContent},u.a.CREATE)}},{text:`Add as - ${g.LIST_IMAGE}`,handler:t=>{this.generateContent(g.LIST_IMAGE,{articleComponentContent:t.articleComponentContent},u.a.CREATE)}},{text:`Add as - ${g.PARA}`,handler:t=>{this.generateContent(g.PARA,{articleComponentContent:t.articleComponentContent},u.a.CREATE)}},{text:`Add as - ${g.PARA_IMAGE}`,handler:t=>{this.generateContent(g.PARA_IMAGE,{articleComponentContent:t.articleComponentContent},u.a.CREATE)}}]});yield t.present()})}generateContent(t,n,e){console.log(n),e===u.a.CREATE?n={articleId:this._articleId,articleComponentOrder:this._articleModel.success?this._articleModel.data.length+1:1,articleComponentType:t,articleComponentContent:n.articleComponentContent,operationType:e}:e===u.a.EDIT&&(n={articleId:this._articleId,articleComponentId:n.articleComponentId,articleComponentOrder:n.articleComponentOrder,articleComponentType:t,articleComponentContent:n.articleComponentContent,operationType:e}),this.articleElementService.crudArticleElement(n).subscribe(t=>{this.loadData()})}setPreview(){this._preview=!this._preview}orderUp(t){const n=Object.assign(Object.assign({},t),{articleComponentOrder:parseInt(t.articleComponentOrder.toString())+1,operationType:u.a.EDIT});this.articleElementService.crudArticleElement(n).subscribe(t=>{this.loadData()})}orderDown(t){const n=Object.assign(Object.assign({},t),{articleComponentOrder:parseInt(t.articleComponentOrder.toString())-1,operationType:u.a.EDIT});this.articleElementService.crudArticleElement(n).subscribe(t=>{this.loadData()})}editContent(t){return Object(l.a)(this,void 0,void 0,function*(){const n=yield this.alertController.create({cssClass:"myClass",header:"Prompt!",inputs:[{value:t.articleComponentContent,name:"articleComponentContent",type:"textarea",placeholder:"Article title"}],buttons:[{text:`Add as - ${g.LEVEL_1}`,handler:n=>{t=Object.assign(Object.assign({},t),{articleComponentContent:n.articleComponentContent}),this.generateContent(g.LEVEL_1,t,u.a.EDIT)}},{text:`Add as - ${g.LEVEL_2}`,handler:n=>{t=Object.assign(Object.assign({},t),{articleComponentContent:n.articleComponentContent}),this.generateContent(g.LEVEL_2,t,u.a.EDIT)}},{text:`Add as - ${g.LEVEL_3}`,handler:n=>{t=Object.assign(Object.assign({},t),{articleComponentContent:n.articleComponentContent}),this.generateContent(g.LEVEL_3,t,u.a.EDIT)}},{text:`Add as - ${g.LIST}`,handler:n=>{t=Object.assign(Object.assign({},t),{articleComponentContent:n.articleComponentContent}),this.generateContent(g.LIST,t,u.a.EDIT)}},{text:`Add as - ${g.LIST_IMAGE}`,handler:n=>{t=Object.assign(Object.assign({},t),{articleComponentContent:n.articleComponentContent}),this.generateContent(g.LIST_IMAGE,t,u.a.EDIT)}},{text:`Add as - ${g.PARA}`,handler:n=>{t=Object.assign(Object.assign({},t),{articleComponentContent:n.articleComponentContent}),this.generateContent(g.PARA,t,u.a.EDIT)}},{text:`Add as - ${g.PARA_IMAGE}`,handler:n=>{t=Object.assign(Object.assign({},t),{articleComponentContent:n.articleComponentContent}),this.generateContent(g.PARA_IMAGE,t,u.a.EDIT)}}]});yield n.present()})}deleteContent(t){const n=Object.assign(Object.assign({},t),{operationType:u.a.DELETE});this.articleElementService.crudArticleElement(n).subscribe(t=>{this.loadData()})}mailto(){return"mailto:"+this._settingsModel.supportEmail+"?subject="+this._settingsModel.appName+" "+this.stringKey.FDBK}gotoSignUp(){window.open(this._settingsModel.signUpUrl,"_blank")}feedback(t){this.articleService.articleFeedback({articleId:this._articleId,feedback:t}).subscribe(t=>Object(l.a)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:this.stringKey.THNKU,message:this.stringKey.THNKU_INFO,buttons:["OK"]});yield t.present()}))}}return t.\u0275fac=function(n){return new(n||t)(b.Jb(C.a),b.Jb(i.a),b.Jb(o.a),b.Jb(M),b.Jb(E),b.Jb(O.b))},t.\u0275cmp=b.Db({type:t,selectors:[["articles"]],decls:24,vars:10,consts:[["color","primary"],["slot","start"],["slot","end",3,"click",4,"ngIf"],["color","secondary"],["color","info",1,"search"],["color","info","lines","none"],[3,"src"],["placeholder","Search for help articles ...","autocomplete","off","type","text"],[4,"ngIf"],["color","info",4,"ngIf"],["lines","none","color","primary",1,"feedback"],["slot","end",1,"",3,"src","click"],["slot","end",3,"src","click"],["slot","end",3,"click"],[3,"routerLink"],["color","info"],[4,"ngFor","ngForOf"],["class","header-level-1",4,"ngIf"],["class","header-level-2",4,"ngIf"],["class","header-level-3",4,"ngIf"],["class","para",4,"ngIf"],["class","list",4,"ngIf"],["class","list-image",4,"ngIf"],["class","para-image",4,"ngIf"],[1,"header-level-1"],[3,"click"],[1,"header-level-2"],[1,"header-level-3"],[1,"para"],[3,"innerHTML"],[1,"list"],[1,"list-image"],[1,"para-image"],[3,"image"],[3,"href"]],template:function(t,n){1&t&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar",0),b.Mb(2,"ion-buttons",1),b.Kb(3,"ion-menu-button"),b.Lb(),b.gc(4,v,6,2,"ion-buttons",2),b.Lb(),b.Lb(),b.Mb(5,"ion-content"),b.Mb(6,"ion-item",3),b.Mb(7,"ion-card",4),b.Mb(8,"ion-item",5),b.Kb(9,"ion-icon",6),b.Kb(10,"ion-input",7),b.Mb(11,"ion-button"),b.hc(12),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.gc(13,T,2,1,"ion-item",8),b.gc(14,G,2,1,"div",8),b.gc(15,V,9,5,"ion-card",9),b.Lb(),b.Mb(16,"ion-footer"),b.Mb(17,"ion-toolbar",0),b.Mb(18,"ion-item",10),b.Mb(19,"ion-label"),b.hc(20),b.Lb(),b.Mb(21,"ion-icon",11),b.Ub("click",function(){return n.feedback(n.feedbackEnum.DELIGHTFUL)}),b.Lb(),b.Mb(22,"ion-icon",12),b.Ub("click",function(){return n.feedback(n.feedbackEnum.NEUTRAL)}),b.Lb(),b.Mb(23,"ion-icon",12),b.Ub("click",function(){return n.feedback(n.feedbackEnum.SAD)}),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(4),b.Zb("ngIf",n.settingsModel),b.zb(5),b.Zb("src",n.stringKey.ICON_SEARCH),b.zb(3),b.jc(" ",n.stringKey.SRC," "),b.zb(1),b.Zb("ngIf",n.allowPreview),b.zb(1),b.Zb("ngIf",n.articleModel),b.zb(1),b.Zb("ngIf",n.settingsModel),b.zb(5),b.jc(" \xa0 ",n.stringKey.HLPFL," "),b.zb(1),b.Zb("src",n.stringKey.ICON_DELIGHTFUL),b.zb(1),b.Zb("src",n.stringKey.ICON_NEUTRAL),b.zb(1),b.Zb("src",n.stringKey.ICON_SAD))},directives:[o.k,o.v,o.d,o.q,c.j,o.i,o.n,o.e,o.l,o.m,o.B,o.c,o.j,o.o,o.A,i.h,o.u,c.i,y,o.g,o.h,o.f],styles:[".search[_ngcontent-%COMP%]{padding:10px;width:100%}ion-input[_ngcontent-%COMP%]{margin:0 10px}.header-level-1[_ngcontent-%COMP%]{margin:20px 20px 20px 0}.header-level-1[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:30px;font-weight:700;line-height:40px;color:var(--ion-color-semi-dark)}.header-level-1[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0 10px}.header-level-2[_ngcontent-%COMP%]{margin:20px 20px 20px 0}.header-level-2[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:25px;font-weight:700;line-height:35px;color:var(--ion-color-semi-dark)}.header-level-2[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0 10px}.header-level-3[_ngcontent-%COMP%]{margin:20px 20px 20px 10px}.header-level-3[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:20px;font-weight:700;line-height:30px;color:var(--ion-color-semi-dark)}.header-level-3[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0 10px}.list[_ngcontent-%COMP%], .para[_ngcontent-%COMP%]{margin:20px 20px 20px 30px;font-size:16px;color:var(--ion-color-semi-dark)}.list[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{background-color:var(--ion-color-semi-dark);width:20px;height:20px;float:left}.list-image[_ngcontent-%COMP%]{margin-left:70px;width:80%}.para-image[_ngcontent-%COMP%]{margin:30px}.para-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}.navigate[_ngcontent-%COMP%]{background-color:var(--ion-color-medium);text-align:left;font-size:16px;font-weight:700;padding:10px}ion-alert[_ngcontent-%COMP%]{--min-width:450px}.myClass[_ngcontent-%COMP%]   .alert-wrapper[_ngcontent-%COMP%]{max-width:400px}"]}),t})()}];let F=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({providers:[o.y],imports:[[s,a,i.j.forChild(H)]]}),t})()}}]);