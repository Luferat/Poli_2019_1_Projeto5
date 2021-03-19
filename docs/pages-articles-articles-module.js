(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-articles-articles-module"],{

/***/ "4P23":
/*!***************************************************!*\
  !*** ./src/app/pages/articles/articles.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "AsBI":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/articles/articles.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Artigos</ion-title>\r\n    <ion-img slot=\"end\" class=\"toplogo\" src=\"assets/logo_01.png\"></ion-img>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding-horizontal\">\r\n\r\n  <p class=\"ion-text-right\"><small>Artigos ordenados pelo mais recente.</small></p>\r\n\r\n  <div *ngFor=\"let item of items | async\">\r\n\r\n    <ion-card class=\"ion-no-margin ion-margin-bottom\" routerLink=\"/view/{{ item.id }}\">\r\n      <img src=\"{{ item.img }}\" />\r\n      <ion-card-header>\r\n        <ion-card-title>{{ item.title }}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>{{ item.intro }}</ion-card-content>\r\n    </ion-card>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "BAW5":
/*!***************************************************!*\
  !*** ./src/app/pages/articles/articles.module.ts ***!
  \***************************************************/
/*! exports provided: ArticlesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesPageModule", function() { return ArticlesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _articles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articles-routing.module */ "Ss6b");
/* harmony import */ var _articles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./articles.page */ "KGMv");







let ArticlesPageModule = class ArticlesPageModule {
};
ArticlesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _articles_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArticlesPageRoutingModule"]
        ],
        declarations: [_articles_page__WEBPACK_IMPORTED_MODULE_6__["ArticlesPage"]]
    })
], ArticlesPageModule);



/***/ }),

/***/ "KGMv":
/*!*************************************************!*\
  !*** ./src/app/pages/articles/articles.page.ts ***!
  \*************************************************/
/*! exports provided: ArticlesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesPage", function() { return ArticlesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_articles_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./articles.page.html */ "AsBI");
/* harmony import */ var _articles_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articles.page.scss */ "4P23");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




// 1) Importa dependências

let ArticlesPage = class ArticlesPage {
    constructor(
    // 2) Injeta dependências
    firestore) {
        this.firestore = firestore;
        // 4) Obtém dados do database
        this.itemsCollection = firestore.collection('articles', ref => ref
            .where('status', '==', 'ativo') // Somente com 'status=ativo'
            .orderBy('date', 'desc') // Ordenado pela data decrescente
        /* ATENÇÃO!
        Ao executar este script pela primeira vez, será gerado um erro de indice
        do Firebase Firestore. Clique no link do erro para gerar o índice no site
        do Firebase.
        */
        );
        this.items = this.itemsCollection.valueChanges({ idField: 'id' });
    }
    ngOnInit() { }
};
ArticlesPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
ArticlesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-articles',
        template: _raw_loader_articles_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_articles_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ArticlesPage);



/***/ }),

/***/ "Ss6b":
/*!***********************************************************!*\
  !*** ./src/app/pages/articles/articles-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ArticlesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesPageRoutingModule", function() { return ArticlesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _articles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articles.page */ "KGMv");




const routes = [
    {
        path: '',
        component: _articles_page__WEBPACK_IMPORTED_MODULE_3__["ArticlesPage"]
    }
];
let ArticlesPageRoutingModule = class ArticlesPageRoutingModule {
};
ArticlesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ArticlesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-articles-articles-module.js.map