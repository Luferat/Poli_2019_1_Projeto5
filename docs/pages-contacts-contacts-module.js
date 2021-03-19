(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacts-contacts-module"],{

/***/ "EWb5":
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.module.ts ***!
  \***************************************************/
/*! exports provided: ContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts-routing.module */ "rUYa");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts.page */ "Tett");







// 1) Importa módulo Reactive Forms

let ContactsPageModule = class ContactsPageModule {
};
ContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsPageRoutingModule"],
            // 2) Importa ReactiveFormsModule
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
    })
], ContactsPageModule);



/***/ }),

/***/ "O6Z6":
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiY29udGFjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "Tett":
/*!*************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.ts ***!
  \*************************************************/
/*! exports provided: removeSpaces, ContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSpaces", function() { return removeSpaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPage", function() { return ContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contacts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contacts.page.html */ "vIa4");
/* harmony import */ var _contacts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.page.scss */ "O6Z6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




// 1) Importa dependências




// 6) Validação (filtro) personalizada
// Não permite campos somente com espaços
function removeSpaces(control) {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {
        control.setValue('');
    }
    return null;
}
let ContactsPage = class ContactsPage {
    constructor(
    // 2) Injeta dependências
    form, firestore, alert) {
        this.form = form;
        this.firestore = firestore;
        this.alert = alert;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en_US'); // Formatador de datas
    }
    ngOnInit() {
        // 4) Cria os campos do formulário
        this.contactFormCreate();
    }
    // 5) Cria os campos do formulário
    contactFormCreate() {
        this.contactForm = this.form.group({
            // Data do envio (date)
            date: [''],
            // Nome (name)
            name: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                    removeSpaces // Remove espaços duplicados
                ])
            ],
            // E-mail (email)
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,
                    removeSpaces // Remove espaços duplicados
                ])
            ],
            // Assunto (subject)
            subject: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                    removeSpaces // Remove espaços duplicados
                ])
            ],
            // Mensagem (message)
            message: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                    removeSpaces // Remove espaços duplicados
                ])
            ]
        });
    }
    // 7) Processa envio do formulário
    contactSend() {
        // Gera e formata a data de envio
        this.contactForm.controls.date.setValue(this.pipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss'));
        // Teste
        // console.log(this.contactForm.value);
        // Salva no Firestore
        this.firestore.collection('contacts').add(this.contactForm.value)
            // Se salvar
            .then(() => {
            // Feedback
            this.feedback();
        })
            // Se falhar
            .catch((error) => {
            alert(`Oooops! Algo deu errado! ${error}`);
        });
    }
    // 8) Popup de feedback
    feedback() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Oba!',
                message: 'Seu contato foi enviado para o "Munecos".',
                buttons: [
                    // Botão [Ok] e sua ação
                    {
                        text: 'OK',
                        handler: () => {
                            // Reset do formulário, mantendo nome e e-mail já usados
                            this.contactForm.reset({
                                date: '',
                                name: this.contactForm.value.name.trim(),
                                email: this.contactForm.value.email.trim(),
                                subject: '',
                                message: ''
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Processa botões das redes sociais
    openSocial(name) {
        window.open(`https://${name}.com/`);
        return false;
    }
};
ContactsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
ContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contacts',
        template: _raw_loader_contacts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contacts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactsPage);



/***/ }),

/***/ "rUYa":
/*!***********************************************************!*\
  !*** ./src/app/pages/contacts/contacts-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageRoutingModule", function() { return ContactsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.page */ "Tett");




const routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_3__["ContactsPage"]
    }
];
let ContactsPageRoutingModule = class ContactsPageRoutingModule {
};
ContactsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactsPageRoutingModule);



/***/ }),

/***/ "vIa4":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Faça Contato</ion-title>\r\n    <ion-img slot=\"end\" class=\"toplogo\" src=\"assets/logo_01.png\"></ion-img>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding-horizontal\">\r\n\r\n  <div class=\"ion-text-center ion-margin-top\">\r\n    <img src=\"assets/contacts.png\" alt=\"Faça Contato\">\r\n  </div>\r\n\r\n  <p>Preencha o formulário abaixo para entrar em contato com o \"Munecos\".</p>\r\n\r\n  <form [formGroup]=\"contactForm\" (ngSubmit)=\"contactSend()\">\r\n\r\n    <ion-list lines=\"full\" class=\"ion=no-padding\">\r\n\r\n      <ion-item>\r\n        <ion-label form=\"name\" position=\"floating\" color=\"primary\">\r\n          Nome:\r\n\r\n          <!-- Exibe feedback para o nome -->\r\n          <ion-text color=\"danger\" *ngIf=\"contactForm.controls.name.errors\">\r\n            <small *ngIf=\"contactForm.controls.name.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"contactForm.controls.name.errors.minlength\">* Inválido</small>\r\n          </ion-text>\r\n\r\n        </ion-label>\r\n        <ion-input type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label form=\"email\" position=\"floating\" color=\"primary\">\r\n          E-mail:\r\n\r\n          <!-- Exibe feedback para o e-mail -->\r\n          <ion-text color=\"danger\" *ngIf=\"contactForm.controls.email.errors\">\r\n            <small *ngIf=\"contactForm.controls.email.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"contactForm.controls.email.errors.email\">* Inválido</small>\r\n          </ion-text>\r\n\r\n        </ion-label>\r\n        <ion-input type=\"text\" name=\"email\" id=\"email\" formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label form=\"subject\" position=\"floating\" color=\"primary\">\r\n          Assunto:\r\n\r\n          <!-- Exibe feedback para o assunto -->\r\n          <ion-text color=\"danger\" *ngIf=\"contactForm.controls.subject.errors\">\r\n            <small *ngIf=\"contactForm.controls.subject.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"contactForm.controls.subject.errors.minlength\">* Inválido</small>\r\n          </ion-text>\r\n\r\n        </ion-label>\r\n        <ion-input type=\"text\" name=\"subject\" id=\"subject\" formControlName=\"subject\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label form=\"message\" position=\"floating\" color=\"primary\">\r\n          Mensagem:\r\n\r\n          <!-- Exibe feedback para o Mensagem -->\r\n          <ion-text color=\"danger\" *ngIf=\"contactForm.controls.message.errors\">\r\n            <small *ngIf=\"contactForm.controls.message.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"contactForm.controls.message.errors.minlength\">* Inválido</small>\r\n          </ion-text>\r\n\r\n        </ion-label>\r\n        <ion-textarea type=\"text\" name=\"message\" id=\"message\" formControlName=\"message\" autoGrow=\"true\"></ion-textarea>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <ion-button type=\"submit\" expand=\"block\" [disabled]=\"contactForm.invalid\" class=\"ion-margin-vertical\">\r\n      Enviar\r\n    </ion-button>\r\n\r\n  </form>\r\n\r\n  <ion-item-divider></ion-item-divider>\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col>\r\n        <ion-icon name=\"logo-facebook\" size=\"large\" (click)=\"openSocial('facebook')\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon name=\"logo-youtube\" size=\"large\" (click)=\"openSocial('youtube')\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon name=\"logo-twitter\" size=\"large\" (click)=\"openSocial('twitter')\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon name=\"logo-github\" size=\"large\" (click)=\"openSocial('github')\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-contacts-contacts-module.js.map