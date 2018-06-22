(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-broker/add-broker.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-broker/add-broker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n</head>\r\n<body>\r\n    <ngx-spinner></ngx-spinner>\r\n    <ngx-spinner\r\n     bdColor=\"rgba(51,51,51,0.8)\"\r\n     size=\"medium\"\r\n     color=\"#fff\"\r\n     loadingText=\"Loading...\"\r\n     type=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n  <div class=\"container\">\r\n    <h1>Register Here</h1>\r\n    <label for=\"email\"><b>Enter Amount to Register :</b></label>\r\n    <input type=\"text\" placeholder=\"Enter atleast 0.1 ether\"  #reg_amt required>\r\n    <input type=\"button\" (click)=\"register(reg_amt.value)\" class=\"btn btn-primary\" value=\"Register\" />\r\n  </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/add-broker/add-broker.component.scss":
/*!******************************************************!*\
  !*** ./src/app/add-broker/add-broker.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: Arial, Helvetica, sans-serif; }\n\n* {\n  box-sizing: border-box; }\n\n/* Add padding to containers */\n\n.container {\n  padding: 16px;\n  background-color: white; }\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1; }\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none; }\n\n/* Overwrite default styles of hr */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px; }\n\n/* Set a style for the submit button */\n\n.registerbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9; }\n\n.registerbtn:hover {\n  opacity: 1; }\n\n/* Add a blue text color to links */\n\na {\n  color: dodgerblue; }\n\n/* Set a grey background color and center the text of the \"sign in\" section */\n\n.signin {\n  background-color: #f1f1f1;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/add-broker/add-broker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-broker/add-broker.component.ts ***!
  \****************************************************/
/*! exports provided: AddBrokerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBrokerComponent", function() { return AddBrokerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3code_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3code.service */ "./src/app/services/web3code.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddBrokerComponent = /** @class */ (function () {
    function AddBrokerComponent(wcs, router) {
        this.wcs = wcs;
        this.router = router;
    }
    AddBrokerComponent.prototype.register = function (amount) {
        if (amount == "") {
            swal("This Field must be filled out");
        }
        else if (amount >= 0.1) {
            this.wcs.add_bro(amount);
        }
        else if (amount < 0.1) {
            swal("Enter atleast 0.1 ether ");
        }
    };
    AddBrokerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        meta.wcs.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.wcs.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                            //  alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.wcs.getUserBalance().then(function (balance) { return _this.balance = balance; });
        }, 20000);
        meta.id3 = setInterval(function () {
            meta.wcs.check_bro().then(function (res) {
                if (res) {
                    meta.router.navigate(['broker']);
                }
            });
        }, 200);
    };
    AddBrokerComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
        if (this.id2) {
            clearInterval(this.id2);
        }
        if (this.id3) {
            clearInterval(this.id3);
        }
    };
    AddBrokerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-broker',
            template: __webpack_require__(/*! ./add-broker.component.html */ "./src/app/add-broker/add-broker.component.html"),
            styles: [__webpack_require__(/*! ./add-broker.component.scss */ "./src/app/add-broker/add-broker.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3code_service__WEBPACK_IMPORTED_MODULE_1__["Web3codeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddBrokerComponent);
    return AddBrokerComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n  <script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/momentjs/latest/moment.min.js\"></script>\r\n  <script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js\"></script>\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css\" />\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n  <style>\r\n#div1 {\r\n  font-size:48px;\r\n}\r\n\r\n.lds-hourglass {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n.lds-hourglass:after {\r\n  content: \" \";\r\n  display: block;\r\n  border-radius: 50%;\r\n  width: 0;\r\n  height: 0;\r\n  margin: 6px;\r\n  box-sizing: border-box;\r\n  border: 26px solid white;\r\n  border-color: white blue;\r\n  animation: lds-hourglass 1.2s infinite;\r\n}\r\n@keyframes lds-hourglass {\r\n  0% {\r\n    transform: rotate(0);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n  50% {\r\n    transform: rotate(900deg);\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n  100% {\r\n    transform: rotate(1800deg);\r\n  }\r\n}\r\n\r\n  </style>\r\n</head>\r\n<body style=\"background-color:rgb(240, 240, 240);\">\r\n    <ngx-spinner></ngx-spinner>\r\n    <ngx-spinner\r\n     bdColor=\"rgba(51,51,51,0.8)\"\r\n     size=\"medium\"\r\n     color=\"#fff\"\r\n     loadingText=\"Loading...\"\r\n     type=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n<br>\r\n<div>\r\n    <div class=\"container\" style=\"background:white;height:100px;width:1200px;\">\r\n    <nav class=\" navbar container\" ><br>\r\n     <div>\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             <!-- <!-- <i class=\"fa fa-bitcoin\" style=\"font-size:36px\"></i> -->\r\n             <div >\r\n         \r\n             </div>\r\n             <!-- <label for=\"account\"><h4>Contract's Ether Balance:</h4><input type=\"text\" class=\"form-control\" id=\"balance1\" readonly/></label>             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;            \r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             <label for=\"account1\"><h4>Contract's Token Balance:</h4><input type=\"text\" class=\"form-control\" id=\"brokertoken\" readonly/></label>  &nbsp;&nbsp;&nbsp; &nbsp;      -->\r\n             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n              \r\n             <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\"  data-target=\"#betting\" style=\"padding: 8px 30px\" class=\"button1 zoom\" >Finalize</Button>\r\n             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <br>\r\n\r\n     </div>   \r\n   </nav>\r\n </div>  \r\n</div>\r\n<br>  \r\n<div id=\"div1\" class=\"fa\"></div>\r\n<div class=\"modal fade\" id=\"betting\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        \r\n        <div class=\"modal-header\" style=\"background: #1affff\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Result</h4>         \r\n        </div>\r\n        \r\n        <div class=\"modal-body\" >\r\n          <p >Finalize the Result of a Bet</p><br>\r\n        \r\n          <!-- <select id=\"myselect\">\r\n            <option value=\"0\">Ether</option>\r\n            <option value=\"1\">Token</option>\r\n        </select> -->\r\n        <br><br>\r\n        <input type=\"text\" class=\"shadow\" placeholder=\"Enter game id\" #bet_id>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <select #resultoption>\r\n            <option value=\"10\">Low</option>\r\n            <option value=\"11\">High</option>\r\n            <option value=\"12\">Draw</option>\r\n        </select>\r\n        <br>\r\n        <br>\r\n        </div>\r\n       \r\n        <div class=\"modal-footer\" >\r\n          <button type=\"button\" class=\"success\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"result(bet_id.value,resultoption.value)\">Finalize</button>\r\n          <button type=\"button\" class=\"danger\"  data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n <script>\r\n    \r\n    </script>\r\n\r\n    <!--Betted table-->\r\n<div class=\"container\" style=\"height:500px;width:1230px;\">\r\n    <table class=\"table\" style=\"background:white;overflow-y:scroll;display:block;\" >\r\n     <thead>\r\n       <tr style=\"background:white\">\r\n        <th>Bet Id</th>\r\n        <th>Stock Name</th>\r\n        <th>Strike Price</th>\r\n        <th>Expiry Time</th>\r\n        <th>No.of.Bets</th>\r\n        <th>Ether Collected</th>\r\n        <th>Tokens Collected</th> \r\n        <th>Bet Status</th>  \r\n         <th> </th>\r\n         <th> </th>\r\n         <th> </th>\r\n       </tr>\r\n     </thead>\r\n     <tbody id=\"total_bet_list\">\r\n        <tr *ngFor=\"let game of total_game\" [ngSwitch]=\"game.status\">\r\n          <td>{{ game.id }}</td><td>{{ game.stock_name }}</td>\r\n          <td>{{ game.strike_price }}</td>\r\n          <td>{{ game.expiry_time }}</td>\r\n          <td>{{ game.no_of_bets }}</td>\r\n          <td>{{ game.eth_value }}</td>\r\n          <td>{{ game.token_value }}</td>\r\n          <td *ngSwitchCase=\"0\">Pending</td>\r\n          <td *ngSwitchCase=\"10\">Low</td>\r\n          <td *ngSwitchCase=\"11\">High</td>\r\n          <td *ngSwitchCase=\"12\">Draw</td>\r\n      </tr>\r\n     </tbody>\r\n   </table>\r\n\r\n </div>\r\n<br>\r\n\r\n</body>\r\n</html> "

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\n  color: #FFFFFF;\n  background-color: blue;\n  height: 100%; }\n\n/* .navbar-brand {\r\n  padding: 0px;\r\n} */\n\n.navbar-brand > img {\n  height: 100%;\n  padding: 3px;\n  width: auto; }\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 2s5px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1; }\n\ntable {\n  border-collapse: collapse;\n  border: 10px solid white;\n  background-color: white;\n  width: 100%;\n  height: 100%; }\n\ndiv#description {\n  background-color: gray;\n  height: 25%;\n  border: 2px black; }\n\ntr {\n  line-height: 55px; }\n\n.container {\n  height: 100%; }\n\n#topics tr {\n  line-height: 24px; }\n\nbutton {\n  background: #1295e5;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  color: white;\n  padding: 10px 22px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 1px 10px;\n  cursor: pointer;\n  opacity: 0.9;\n  border: none; }\n\nbutton1 {\n  background: #f0f0f0;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  color: white;\n  padding: 10px 22px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 1px 10px;\n  cursor: pointer;\n  opacity: 0.9;\n  border: none; }\n\nbutton:hover {\n  opacity: 1; }\n\noutput, a {\n  color: white; }\n\na {\n  color: black; }\n\ninput {\n  text-align: center; }\n\n.ui-datepicker {\n  font-size: 9pt !important; }\n\n.danger {\n  background-color: #f44336; }\n\n/* Red */\n\n.danger:hover {\n  background: #da190b; }\n\n.mytxt {\n  background-color: transparent;\n  color: black;\n  outline: none;\n  outline-style: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid black 1px;\n  padding: 3px 10px;\n  width: 160px; }\n\n.header th {\n  height: 2px;\n  line-height: 2px;\n  width: 1px; }\n\n.btn {\n  border: none;\n  outline: none;\n  padding: 0px 0px;\n  background-color: #1295e5;\n  cursor: pointer;\n  font-size: 18px; }\n\n.btn1 {\n  border: none;\n  outline: none;\n  padding: 0px 0px;\n  background-color: #f0f0f0;\n  color: black;\n  cursor: pointer;\n  font-size: 18px; }\n\n.zoom:hover {\n  /* IE 9 */\n  -webkit-transform: scale(1.2);\n  /* Safari 3-8 */\n  transform: scale(1.2); }\n\nbutton1:hover {\n  cursor: pointer; }\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: white;\n  background: #1295e5; }\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3code_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3code.service */ "./src/app/services/web3code.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(wcs, router) {
        this.wcs = wcs;
        this.router = router;
        this.total_game = [];
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#admin").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#broker").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#user").removeClass("active");
    }
    AdminComponent.prototype.result = function (id, option) {
        if (id == "" || option == "") {
            swal("Please Fill all the Fields");
        }
        else {
            this.wcs.set_result(id, option);
        }
    };
    AdminComponent.prototype.alltablework = function () {
        var _this = this;
        this.total_game = [];
        this.wcs.get_total_game().then(function (game) {
            game.forEach(function (item) {
                var w_obj = {};
                _this.wcs.game_set_map(item).then(function (obj) {
                    _this.wcs.no_of_gamers(item).then(function (no_game) {
                        if (no_game.length !== 0) {
                            no_game.forEach(function (items) {
                                _this.wcs.get_gamer_address(item, items).then(function (obj1) {
                                    _this.wcs.game_details(obj1, item).then(function (obj2) {
                                        if (w_obj[item + "__eth_value"] == undefined) {
                                            w_obj["id"] = item;
                                            w_obj["stock_name"] = obj[0];
                                            w_obj["strike_price"] = obj[1] / 1000;
                                            var tm = new Date(obj[2].toNumber() * 1000);
                                            var etime = tm.toString();
                                            w_obj["expiry_time"] = etime;
                                            w_obj["no_of_bets"] = no_game.length;
                                            w_obj["eth_value"] = obj2[1] / 1000000000000000000;
                                            w_obj["token_value"] = obj2[2] / 1000000000000000000;
                                            w_obj[item + "__eth_value"] = obj2[1] / 1000000000000000000;
                                            w_obj[item + "__token_value"] = obj2[2] / 1000000000000000000;
                                            w_obj["status"] = obj[4];
                                        }
                                        else {
                                            w_obj["eth_value"] = w_obj["eth_value"] + obj2[1] / 1000000000000000000;
                                            w_obj["token_value"] = w_obj["token_value"] + obj2[2] / 1000000000000000000;
                                            w_obj[item + "__eth_value"] = w_obj[item + "__eth_value"] + obj2[1] / 1000000000000000000;
                                            w_obj[item + "__token_value"] = w_obj[item + "__token_value"] + obj2[2];
                                        }
                                        _this.total_game.push(w_obj);
                                    });
                                });
                            });
                        }
                        else {
                            w_obj["id"] = item;
                            w_obj["stock_name"] = obj[0];
                            w_obj["strike_price"] = obj[1] / 1000;
                            var tm = new Date(obj[2].toNumber() * 1000);
                            var etime = tm.toString();
                            w_obj["expiry_time"] = etime;
                            w_obj["no_of_bets"] = 0;
                            w_obj["eth_value"] = 0;
                            w_obj["token_value"] = 0;
                            w_obj["status"] = obj[4];
                            _this.total_game.push(w_obj);
                        }
                    });
                });
            });
        });
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        meta.alltablework();
        meta.wcs.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.wcs.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.wcs.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.alltablework();
            window.location.reload(true);
        }, 20000);
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
        if (this.id2) {
            clearInterval(this.id2);
        }
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3code_service__WEBPACK_IMPORTED_MODULE_1__["Web3codeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }





var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["APP_BASE_HREF"], useValue: '/' }
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _broker_broker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../broker/broker.component */ "./src/app/broker/broker.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _guard_broker_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guard/broker.guard */ "./src/app/guard/broker.guard.ts");
/* harmony import */ var _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metamask-error/metamask-error.component */ "./src/app/metamask-error/metamask-error.component.ts");
/* harmony import */ var _add_broker_add_broker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-broker/add-broker.component */ "./src/app/add-broker/add-broker.component.ts");
/* harmony import */ var _guard_admin_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guard/admin.guard */ "./src/app/guard/admin.guard.ts");







var routes = [
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_6__["AdminGuard"]]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"]
    },
    {
        path: 'broker',
        component: _broker_broker_component__WEBPACK_IMPORTED_MODULE_1__["BrokerComponent"],
        canActivate: [_guard_broker_guard__WEBPACK_IMPORTED_MODULE_3__["BrokerGuard"]]
    },
    {
        path: 'metamask',
        component: _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_4__["MetamaskErrorComponent"]
    },
    {
        path: 'add-broker',
        component: _add_broker_add_broker_component__WEBPACK_IMPORTED_MODULE_5__["AddBrokerComponent"],
    },
    {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ' app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _broker_broker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./broker/broker.component */ "./src/app/broker/broker.component.ts");
/* harmony import */ var _services_web3code_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/web3code.service */ "./src/app/services/web3code.service.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./metamask-error/metamask-error.component */ "./src/app/metamask-error/metamask-error.component.ts");
/* harmony import */ var _add_broker_add_broker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-broker/add-broker.component */ "./src/app/add-broker/add-broker.component.ts");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _broker_broker_component__WEBPACK_IMPORTED_MODULE_7__["BrokerComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_11__["MetamaskErrorComponent"],
                _add_broker_add_broker_component__WEBPACK_IMPORTED_MODULE_12__["AddBrokerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]
            ],
            providers: [_services_web3code_service__WEBPACK_IMPORTED_MODULE_8__["Web3codeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/broker/broker.component.html":
/*!**********************************************!*\
  !*** ./src/app/broker/broker.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js\"></script>\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css\" />\r\n<script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"></script>\r\n  <style>\r\n\r\n  </style>\r\n</head>\r\n<body style=\"background-color:rgb(240, 240, 240);\" >\r\n<br>\r\n<div>\r\n    <div class=\"container \" style=\"background:white;height:200px;width:3000px;\">\r\n    <nav class=\" navbar\"><br>\r\n     <div >\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n\r\n\r\n             <!-- <!-- <label for=\"account\"><h4>Ether Balance:</h4><input type=\"text\" class=\"form-control\" id=\"balance1\" value={{bal}} readonly/></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->\r\n             <!-- <label for=\"account1\"><h4>Ether Balance:</h4><input type=\"text\" class=\"form-control\" id=\"broker_bal\"  readonly/></label>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --> \r\n             <label for=\"account\"><h4>Staked Ether:</h4><input type=\"text\" class=\"form-control\" id=\"ether_bal\"  value=\"{{ ether }}\"  readonly/></label>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \r\n             <label for=\"account1\"><h4>Staked Token:</h4><input type=\"text\" class=\"form-control\" id=\"token_bal\"  value=\"{{ token }}\"  readonly/></label>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n             <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\" data-target=\"#dereg\" style=\"padding: 8px 50px\" class=\"button1 circle  zoom\" >De-Register</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n             <br>\r\n      \r\n             <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\"  data-target=\"#purchase\" style=\"padding: 8px 30px\" class=\"button1 zoom\"   >Purchase Token</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n             <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\" data-target=\"#selltoken\" style=\"padding: 8px 20px\" class=\"button1 zoom\"  >Convert Token to Ether</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  \r\n             <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\" data-target=\"#myModal\" style=\"padding: 8px 50px\" class=\"button1 circle  zoom\" >Create Bet</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n             <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\" data-target=\"#addether\" style=\"padding: 8px 50px\" class=\"button1 circle  zoom\" >Stake Ether</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n             <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\" data-target=\"#addtoken\" style=\"padding: 8px 50px\" class=\"button1 circle  zoom\" >Stake Token</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n             <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\" data-target=\"#withdrawether\" style=\"padding: 8px 50px\" class=\"button1 circle  zoom\" > Withdraw ether form Stake </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n             <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\" data-target=\"#withdrawtoken\" style=\"padding: 8px 50px\" class=\"button1 circle  zoom\" >Withdraw token form Stake </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n\r\n            \r\n\r\n            </div>   \r\n   </nav>\r\n </div> \r\n  \r\n</div>\r\n\r\n<br>  \r\n\r\n<div class=\"container col-5\" style=\"height:550px;width:1230px;\">\r\n    <table class=\"table\" style=\"background:white;overflow-y:scroll;display:block;\" >\r\n     <thead >\r\n       <tr style=\"background:white\">\r\n         <th>Bet Id</th>\r\n         <th>Stock Name</th>\r\n         <th>Strike Price</th>\r\n         <th>Expiry Time</th>\r\n         <th>No.of.Bets</th>\r\n         <th>Ether Collected</th>\r\n         <th>Tokens Collected</th> \r\n         <th>Bet Status</th>  \r\n       </tr>\r\n     </thead>\r\n     <tbody id=\"broker_list\">\r\n        <tr *ngFor=\"let game of total_game\" [ngSwitch]=\"game.status\">\r\n            <td>{{ game.id }}</td>\r\n            <td>{{ game.stock_name }}</td>\r\n            <td>{{ game.strike_price }}</td>\r\n            <td>{{ game.expiry_time }}</td>\r\n            <td>{{ game.no_of_bets }}</td>\r\n            <td>{{ game.eth_value }}</td>\r\n            <td>{{ game.token_value }}</td>\r\n            <td *ngSwitchCase=\"0\">Pending</td>\r\n            <td *ngSwitchCase=\"10\">Low</td>\r\n            <td *ngSwitchCase=\"11\">High</td>\r\n            <td *ngSwitchCase=\"12\">Draw</td>\r\n         </tr>\r\n     </tbody>\r\n   </table>\r\n </div>\r\n <br>\r\n\r\n <div class=\"container\">\r\n    <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n            <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">      \r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">Create Betting</h4>\r\n          </div>\r\n\r\n          <form class=\"modal-content\"> \r\n          <div class=\"modal-body\">\r\n                <table>\r\n                        <thead>\r\n                          <tr>\r\n                           <td><input type=\"text\"  #a placeholder=\"Enter stock name\" name=\"\" required></td>\r\n                           <td></td>\r\n                           </tr>\r\n                           <tr>\r\n                            <td><input type=\"text\" #b placeholder=\"Enter strike price\" name=\"\" required></td>\r\n                          </tr>\r\n                          <tr>\r\n                              <td><label for=\"etime\">Select Expiry Time : </label>&nbsp;&nbsp;<p-calendar  [(ngModel)]=\"date1\"  readonlyInput=\"true\" showTime=\"true\" hourFormat=\"12\" dateFormat=\"dd/mm/yy\" [ngModelOptions]=\"{standalone: true}\"></p-calendar> {{date1|date}}</td><br>\r\n                          </tr>  \r\n                                                   </thead>\r\n                        </table>\r\n             </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\"  class=\" zoom\" (click)=\"cb(a.value,b.value)\">Create Bet</button>\r\n            <button type=\"button\" style=\"background-color:hsl(0, 80%, 50%)\" class=\"cancelbtn zoom\" data-dismiss=\"modal\">Close</button>\r\n        \r\n           </div>\r\n          </form>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n  \r\n   <br>\r\n   <!--Deregister-->\r\n   <div class=\"modal fade\" id=\"dereg\" role=\"dialog\">\r\n      <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n          \r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">De-Register From Site</h4>         \r\n          </div>\r\n          \r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\"class=\"butn zoom\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"deregister()\" style=\"background:#03A9F4\" >De-register</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n   <!--purchase popup--> \r\n<div class=\"modal fade\" id=\"purchase\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        \r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Purchase Tokens</h4>         \r\n        </div>\r\n        \r\n        <div class=\"modal-body\">\r\n            <input type=\"text\" placeholder=\"Enter number of Tokens\" #num>\r\n        </div>\r\n       \r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\"class=\"butn zoom\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"gt(num.value)\" style=\"background:#03A9F4\" >Purchase</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n   <!--sell token popup--> \r\n   <div class=\"modal fade\" id=\"selltoken\" role=\"dialog\">\r\n      <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n          \r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">Exchange Token</h4>         \r\n          </div>\r\n          \r\n          <div class=\"modal-body\">\r\n              <input type=\"text\" placeholder=\"Enter Number of Tokens\" #selltok>\r\n          </div>\r\n         \r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"butn zoom\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"et(selltok.value)\"  style=\"background:#03A9F4\" >Exchange</button>\r\n          \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!--adding stake ether--> \r\n<div class=\"modal fade\" id=\"addether\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      \r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Adding Stake </h4>         \r\n      </div>\r\n      \r\n      <div class=\"modal-body\">\r\n          <input type=\"text\" placeholder=\"Enter number of ether\" #noe>\r\n      </div>\r\n     \r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\"class=\"butn zoom\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"add_eth(noe.value)\" style=\"background:#03A9F4\">Stake</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--adding stake token--> \r\n<div class=\"modal fade\" id=\"addtoken\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      \r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Adding Token </h4>         \r\n      </div>\r\n      \r\n      <div class=\"modal-body\">\r\n          <input type=\"text\" placeholder=\"Enter number of tokens\" #tkns>\r\n      </div>\r\n     \r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\"class=\"butn zoom\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"add_tkn(tkns.value)\" style=\"background:#03A9F4\">Stake</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n <!--withdraw ether popup--> \r\n <div class=\"modal fade\" id=\"withdrawether\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      \r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Withdraw Ether From Your Stake </h4>         \r\n      </div>\r\n      \r\n      <div class=\"modal-body\">\r\n          <input type=\"text\" placeholder=\"Enter number of ether to withdraw\" #withdraw_eth>\r\n      </div>\r\n     \r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\"class=\"butn zoom\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"withdraw_ether(withdraw_eth.value)\" style=\"background:#03A9F4\" >Withdraw</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--withdraw token popup--> \r\n<div class=\"modal fade\" id=\"withdrawtoken\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      \r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Withdraw Token From Your Stake </h4>         \r\n      </div>\r\n      \r\n      <div class=\"modal-body\">\r\n          <input type=\"text\" placeholder=\"Enter number of token to withdraw\" #withdraw_tok>\r\n      </div>\r\n     \r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\"class=\"butn zoom\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"withdraw_token(withdraw_tok.value)\" style=\"background:#03A9F4\" >withdraw</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>     \r\n</html>\r\n<ngx-spinner></ngx-spinner>\r\n<ngx-spinner\r\n     bdColor=\"rgba(51,51,51,0.8)\"\r\n     size=\"medium\"\r\n     color=\"#fff\"\r\n     loadingText=\"Loading...\"\r\n     type=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/broker/broker.component.scss":
/*!**********************************************!*\
  !*** ./src/app/broker/broker.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\n  color: #FFFFFF;\n  background-color: blue;\n  height: 100%; }\n\n/* .navbar-brand {\r\n  padding: 0px;\r\n} */\n\n.navbar-brand > img {\n  height: 100%;\n  padding: 3px;\n  width: auto; }\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 2s5px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1; }\n\ntable {\n  border-collapse: collapse;\n  border: 10px solid white;\n  background-color: white;\n  width: 100%;\n  height: 100%; }\n\ndiv#description {\n  background-color: gray;\n  height: 25%;\n  border: 2px black; }\n\ntr {\n  line-height: 55px; }\n\n.container {\n  height: 100%; }\n\n#topics tr {\n  line-height: 24px; }\n\nbutton {\n  background: #1295e5;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  color: white;\n  padding: 10px 22px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 1px 10px;\n  cursor: pointer;\n  opacity: 0.9;\n  border: none; }\n\nbutton1 {\n  background: #f0f0f0;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  color: white;\n  padding: 10px 22px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 1px 10px;\n  cursor: pointer;\n  opacity: 0.9;\n  border: none; }\n\nbutton:hover {\n  opacity: 1; }\n\noutput, a {\n  color: white; }\n\na {\n  color: black; }\n\ninput {\n  text-align: center; }\n\n.ui-datepicker {\n  font-size: 9pt !important; }\n\n.danger {\n  background-color: #f44336; }\n\n/* Red */\n\n.danger:hover {\n  background: #da190b; }\n\n.mytxt {\n  background-color: transparent;\n  color: black;\n  outline: none;\n  outline-style: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid black 1px;\n  padding: 3px 10px;\n  width: 160px; }\n\n.header th {\n  height: 2px;\n  line-height: 2px;\n  width: 1px; }\n\n.btn {\n  border: none;\n  outline: none;\n  padding: 0px 0px;\n  background-color: #1295e5;\n  cursor: pointer;\n  font-size: 18px; }\n\n.btn1 {\n  border: none;\n  outline: none;\n  padding: 0px 0px;\n  background-color: #f0f0f0;\n  color: black;\n  cursor: pointer;\n  font-size: 18px; }\n\n.zoom:hover {\n  /* IE 9 */\n  -webkit-transform: scale(1.2);\n  /* Safari 3-8 */\n  transform: scale(1.2); }\n\nbutton1:hover {\n  cursor: pointer; }\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: white;\n  background: #1295e5; }\n"

/***/ }),

/***/ "./src/app/broker/broker.component.ts":
/*!********************************************!*\
  !*** ./src/app/broker/broker.component.ts ***!
  \********************************************/
/*! exports provided: BrokerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerComponent", function() { return BrokerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3code_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3code.service */ "./src/app/services/web3code.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrokerComponent = /** @class */ (function () {
    function BrokerComponent(wcs, router) {
        var _this = this;
        this.wcs = wcs;
        this.router = router;
        this.total_game = [];
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#broker").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#admin").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#user").removeClass("active");
        // console.log(typeof window.web3);
        wcs.stake().then(function (ether) { return _this.ether = ether; });
        wcs.Token().then(function (token) { return _this.token = token; });
    }
    BrokerComponent.prototype.cb = function (_name, pric) {
        if (_name == "" || pric == "") {
            var abc = pric * 1000;
            alert("To Contract" + abc);
            alert("Display" + abc / 1000);
            swal("Please Fill all the Fields");
        }
        else {
            var name_1 = this._web3.fromAscii(_name);
            var price = pric;
            // console.log(this.date1); 
            var a = this.date1;
            var b = new Date(a);
            var c = Math.round(b);
            var d = c / 1000.0;
            var expiry_time = parseInt(d);
            var date = new Date().toLocaleString();
            var w = new Date(date);
            var x = Math.round(w);
            var y = x / 1000.0;
            var Curr_time = parseInt(y);
            // console.log(Curr_time);
            // alert("NOw"+Curr_time)
            if (Curr_time > expiry_time) {
                swal("Select the Expiry time in Future");
            }
            else {
                this.wcs.creat_bt(name_1, price, expiry_time);
            }
        }
    };
    BrokerComponent.prototype.gt = function (n) {
        if (n == "") {
            swal("Enter Number of Tokens");
        }
        else {
            var not = n / 1000;
            this.wcs.getToken(not);
        }
    };
    BrokerComponent.prototype.et = function (tkn) {
        if (tkn == "") {
            swal("Enter Number of Tokens");
        }
        else {
            this.wcs.exchange_token(tkn);
        }
    };
    BrokerComponent.prototype.add_eth = function (eth) {
        if (eth == "") {
            swal("Enter Number of Ether");
        }
        else {
            this.wcs.a_s_e(eth);
        }
    };
    BrokerComponent.prototype.add_tkn = function (tokens) {
        if (tokens == "") {
            swal("Enter Number of Tokens");
        }
        else {
            this.wcs.a_s_t(tokens);
        }
    };
    BrokerComponent.prototype.withdraw_ether = function (ether) {
        if (ether == "") {
            swal("Enter Number of Ether");
        }
        else {
            this.wcs.withdraw_from_staked_ether(ether);
        }
    };
    BrokerComponent.prototype.withdraw_token = function (token) {
        if (token == "") {
            swal("Enter Number of Tokens");
        }
        else {
            this.wcs.withdraw_from_staked_token(token);
        }
    };
    BrokerComponent.prototype.deregister = function () {
        this.wcs.broker_de_registration();
    };
    BrokerComponent.prototype.tablework = function () {
        var _this = this;
        this.total_game = [];
        this.wcs.get_total_game().then(function (game) {
            game.forEach(function (item) {
                var w_obj = {};
                _this.wcs.game_set_map(item).then(function (obj) {
                    if (obj[3] == _this.account) {
                        _this.wcs.no_of_gamers(item).then(function (no_game) {
                            if (no_game.length !== 0) {
                                no_game.forEach(function (items) {
                                    _this.wcs.get_gamer_address(item, items).then(function (obj1) {
                                        _this.wcs.game_details(obj1, item).then(function (obj2) {
                                            if (w_obj[item + "__eth_value"] == undefined) {
                                                w_obj["id"] = item;
                                                w_obj["stock_name"] = obj[0];
                                                w_obj["strike_price"] = obj[1] / 1000;
                                                var tm = new Date(obj[2].toNumber() * 1000);
                                                var etime = tm.toString();
                                                w_obj["expiry_time"] = etime;
                                                w_obj["no_of_bets"] = no_game.length;
                                                w_obj["eth_value"] = obj2[1] / 1000000000000000000;
                                                w_obj["token_value"] = obj2[2] / 1000000000000000000;
                                                w_obj[item + "__eth_value"] = obj2[1] / 1000000000000000000;
                                                w_obj[item + "__token_value"] = obj2[2] / 1000000000000000000;
                                                w_obj["status"] = obj[4];
                                            }
                                            else {
                                                w_obj["eth_value"] = w_obj["eth_value"] + obj2[1] / 1000000000000000000;
                                                w_obj["token_value"] = w_obj["token_value"] + obj2[2] / 1000000000000000000;
                                                w_obj[item + "__eth_value"] = w_obj[item + "__eth_value"] + obj2[1] / 1000000000000000000;
                                                w_obj[item + "__token_value"] = w_obj[item + "__token_value"] + obj2[2] / 1000000000000000000;
                                            }
                                            _this.total_game.push(w_obj);
                                        });
                                    });
                                });
                            }
                            else {
                                w_obj["id"] = item;
                                w_obj["stock_name"] = obj[0];
                                w_obj["strike_price"] = obj[1] / 1000;
                                var tm = new Date(obj[2].toNumber() * 1000);
                                var etime = tm.toString();
                                w_obj["expiry_time"] = etime;
                                w_obj["no_of_bets"] = 0;
                                w_obj["eth_value"] = 0;
                                w_obj["token_value"] = 0;
                                w_obj["status"] = obj[4];
                                _this.total_game.push(w_obj);
                                // w_obj='';
                            }
                        });
                    }
                });
            });
        });
    };
    BrokerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        meta.tablework();
        meta.wcs.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.wcs.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_4__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.wcs.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.tablework();
            meta.wcs.stake().then(function (ether) { return meta.ether = ether; });
            meta.wcs.Token().then(function (token) { return meta.token = token; });
        }, 20000);
    };
    BrokerComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
        if (this.id2) {
            clearInterval(this.id2);
        }
    };
    BrokerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./broker.component.html */ "./src/app/broker/broker.component.html"),
            styles: [__webpack_require__(/*! ./broker.component.scss */ "./src/app/broker/broker.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3code_service__WEBPACK_IMPORTED_MODULE_1__["Web3codeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BrokerComponent);
    return BrokerComponent;
}());



/***/ }),

/***/ "./src/app/guard/admin.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guard/admin.guard.ts ***!
  \**************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_web3code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/web3code.service */ "./src/app/services/web3code.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(wcs, router) {
        this.wcs = wcs;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.wcs.check_admin().then(function (admin) {
            console.log(admin);
            if (!admin) {
                _this.router.navigate(["user"]);
                return false;
            }
            else {
                // alert("TRuuueee")
                return true;
            }
        });
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_web3code_service__WEBPACK_IMPORTED_MODULE_2__["Web3codeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guard/broker.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guard/broker.guard.ts ***!
  \***************************************/
/*! exports provided: BrokerGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerGuard", function() { return BrokerGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_web3code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/web3code.service */ "./src/app/services/web3code.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrokerGuard = /** @class */ (function () {
    function BrokerGuard(wcs, router) {
        this.wcs = wcs;
        this.router = router;
    }
    BrokerGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.wcs.check_bro().then(function (broker) {
            console.log(broker);
            if (!broker) {
                _this.router.navigate(["add-broker"]);
                return false;
            }
            else {
                return true;
            }
        });
    };
    BrokerGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_web3code_service__WEBPACK_IMPORTED_MODULE_2__["Web3codeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BrokerGuard);
    return BrokerGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>HIGH-LOW</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n  <script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/momentjs/latest/moment.min.js\"></script>\r\n  <script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js\"></script>\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css\" />\r\n </head>\r\n <body style=\"background-color:rgb(240, 240, 240);\" >\r\n  <nav class=\"navbar navbar-default \">      \r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n      </div>\r\n      <ul class=\"nav navbar-nav\">\r\n          <li id=\"admin\"><a routerLink=\"/admin\" id>ADMIN</a></li>\r\n        <li id=\"user\"><a routerLink=\"/user\">USER</a></li>\r\n      <li id=\"broker\"><a routerLink=\"/broker\">BROKER</a></li>\r\n\r\n      </ul>\r\n    </div>\r\n    \r\n  </nav>\r\n  </body>\r\n\r\n  </html>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\n  color: black;\n  background-color: white;\n  height: 100%; }\n\n.navbar-brand {\n  padding: 0px; }\n\n.navbar-brand > img {\n  height: 100%;\n  padding: 3px;\n  width: auto; }\n\n.header th {\n  height: 2px;\n  line-height: 2px;\n  width: 1px; }\n\n.btn {\n  border: none;\n  outline: none;\n  padding: 0px 0px;\n  background-color: #1295e5;\n  cursor: pointer;\n  font-size: 18px; }\n\n.btn1 {\n  border: none;\n  outline: none;\n  padding: 0px 0px;\n  background-color: #f0f0f0;\n  color: black;\n  cursor: pointer;\n  font-size: 18px; }\n\n.btn1 .navbar-default {\n    color: black;\n    background-color: white;\n    height: 100%; }\n\n.btn1 .navbar-brand {\n    padding: 0px; }\n\n.btn1 .navbar-brand > img {\n    height: 100%;\n    padding: 3px;\n    width: auto; }\n\n.btn1 .header th {\n    height: 2px;\n    line-height: 2px;\n    width: 1px; }\n\n.btn1 .btn {\n    border: none;\n    outline: none;\n    padding: 0px 0px;\n    background-color: #1295e5;\n    cursor: pointer;\n    font-size: 18px; }\n\n.btn1 .btn1 {\n    border: none;\n    outline: none;\n    padding: 0px 0px;\n    background-color: #f0f0f0;\n    color: black;\n    cursor: pointer;\n    font-size: 18px; }\n\n.btn1 a {\n    color: black; }\n\n.btn1 .navbar-default .navbar-nav > .active > a,\n  .btn1 .navbar-default .navbar-nav > .active > a:hover,\n  .btn1 .navbar-default .navbar-nav > .active > a:focus {\n    color: white;\n    background: #1295e5; }\n\na {\n  color: black; }\n\n.active, .btn:hover {\n  background-color: #1295e5;\n  color: black; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3code_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3code.service */ "./src/app/services/web3code.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(wcs) {
        var _this = this;
        this.wcs = wcs;
        wcs.getAccount().then(function (account) { return _this.account = account; });
        wcs.getUserBalance().then(function (balance) { return _this.balance = balance; });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3code_service__WEBPACK_IMPORTED_MODULE_1__["Web3codeService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.html":
/*!**************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\t<head>\n\t\t<title>Ethereum Account Connectivity Error Page</title>\n\t</head>\n\t<body style=\"margin:75px  750px\"> \n\t\t <img src=\"./assets/metamask_logo.png\"/> \n\n\t\t\t<p>\n\t\t\t\t<br>There was an error while fetching your account.\n\t\t\t\t<br>Make sure your Ethereum client is configured correctly\n\n\t\t\t\t<br>Tips:\n\t\t\t\t<br>Ensure you unlocked your MetaMask plugin.\n\t\t\t\t<br>If you don't have MetaMask plugin install here: \n\t\t\t\t<br><a href =\"https://metamask.io/ \">https://metamask.io/</a>\n\t\t\t</p>\n\n\t</body>\n</html>"

/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.ts":
/*!************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.ts ***!
  \************************************************************/
/*! exports provided: MetamaskErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetamaskErrorComponent", function() { return MetamaskErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3code_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3code.service */ "./src/app/services/web3code.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MetamaskErrorComponent = /** @class */ (function () {
    function MetamaskErrorComponent(wcs, router) {
        this.wcs = wcs;
        this.router = router;
    }
    MetamaskErrorComponent.prototype.ngOnInit = function () {
        var meta = this;
        this.id1 = setInterval(function () {
            if (typeof window.web3 !== 'undefined') {
                meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                if (meta._web3.eth.accounts[0] !== undefined) {
                    meta.router.navigate(['user']);
                }
            }
        }, 200);
    };
    MetamaskErrorComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    MetamaskErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-metamask-error',
            template: __webpack_require__(/*! ./metamask-error.component.html */ "./src/app/metamask-error/metamask-error.component.html"),
            styles: [__webpack_require__(/*! ./metamask-error.component.scss */ "./src/app/metamask-error/metamask-error.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3code_service__WEBPACK_IMPORTED_MODULE_1__["Web3codeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MetamaskErrorComponent);
    return MetamaskErrorComponent;
}());



/***/ }),

/***/ "./src/app/services/hlbcontract.json":
/*!*******************************************!*\
  !*** ./src/app/services/hlbcontract.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, default */
/***/ (function(module) {

module.exports = [{"constant":false,"inputs":[],"name":"add_broker","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"token_to_stake","type":"uint256"}],"name":"add_stake","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_game_id","type":"uint256"},{"name":"result_options","type":"uint256"}],"name":"admin_setting_result_and_distribute_money","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_game_id","type":"uint256"},{"name":"_bet_tokens","type":"uint256"}],"name":"bet","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_game_id","type":"uint256"},{"name":"_choice","type":"uint256"},{"name":"_bet_tokens","type":"uint256"}],"name":"betting","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"broker_de_registration","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_stock_name","type":"bytes"},{"name":"_strike_price","type":"uint256"},{"name":"_expiry_time","type":"uint256"}],"name":"broker_set_game","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_what","type":"bool"},{"name":"amount_to_withdraw","type":"uint256"}],"name":"broker_withdraw_from_stake","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_game_id","type":"uint256"},{"name":"_what","type":"bool"},{"name":"_howmuch","type":"uint256"}],"name":"decrease","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_game_id","type":"uint256"},{"name":"_bet_tokens","type":"uint256"}],"name":"increase","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_to_exchange_in_wei","type":"uint256"}],"name":"token_transaction","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_game_id","type":"uint256"}],"name":"trader_cancel_bet_and_widthdraw","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_sender","type":"address"},{"indexed":false,"name":"_receiver","type":"address"},{"indexed":false,"name":"_transfer_amount","type":"uint256"}],"name":"Transfer_amount","type":"event"},{"inputs":[{"name":"_token","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"betting_map","outputs":[{"name":"option","type":"bool"},{"name":"bet_amount","type":"uint256"},{"name":"betted_tokens","type":"uint256"},{"name":"is_exit","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"broker_map","outputs":[{"name":"stake_amount","type":"uint256"},{"name":"stake_token","type":"uint256"},{"name":"is_broker","type":"bool"},{"name":"active_offerings","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"game_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"game_set_map","outputs":[{"name":"stock_name","type":"bytes"},{"name":"strike_price","type":"uint256"},{"name":"expiry_time","type":"uint256"},{"name":"bet_creator","type":"address"},{"name":"result_map","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_game_id","type":"uint256"},{"name":"index","type":"uint256"}],"name":"get_game_set_map_value","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_game_id","type":"uint256"}],"name":"length_of_game_set_map","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

/***/ }),

/***/ "./src/app/services/web3code.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/web3code.service.ts ***!
  \**********************************************/
/*! exports provided: Web3codeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3codeService", function() { return Web3codeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var tokenAbi = __webpack_require__(/*! ./hlbcontract.json */ "./src/app/services/hlbcontract.json");
var Web3codeService = /** @class */ (function () {
    function Web3codeService(router, spinner) {
        this.router = router;
        this.spinner = spinner;
        this.account = null;
        this._tokenContractAddress = "0xb2ee73f29f6130967aa9769f742ae1287be2e988";
        if (typeof window.web3 !== 'undefined') {
            this._web3 = new web3__WEBPACK_IMPORTED_MODULE_1__(window.web3.currentProvider);
            this.getAccount();
            this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
        }
    }
    Web3codeService.prototype.metamask = function () {
        if (typeof window.web3 == 'undefined') {
            return false;
        }
        else {
            this.getAccount().then(function (access) {
                if (access == null) {
                    return false;
                }
                else {
                    return true;
                }
            });
        }
    };
    Web3codeService.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.account == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._web3.eth.getAccounts(function (err, accs) {
                                    if (err != null) {
                                        _this.router.navigate(['metamask']);
                                        return;
                                    }
                                    if (accs.length === 0) {
                                        _this.router.navigate(['metamask']);
                                        return;
                                    }
                                    resolve(accs[0]);
                                });
                            })];
                    case 1:
                        _a.account = (_b.sent());
                        this._web3.eth.defaultAccount = this.account;
                        _b.label = 2;
                    case 2: return [2 /*return*/, Promise.resolve(this.account)];
                }
            });
        });
    };
    Web3codeService.prototype.getUserBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._web3.eth.getBalance(account, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    resolve(_web3.fromWei(result));
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.hash = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var accountInterval = setInterval(function () {
                            meta._web3.eth.getTransactionReceipt(a, function (err, result) {
                                if (err != null) {
                                    reject(err);
                                }
                                if (result !== null) {
                                    clearInterval(accountInterval);
                                    if (result.status == 0x1) {
                                        resolve(true);
                                    }
                                    else {
                                        resolve(false);
                                    }
                                }
                            });
                        }, 100);
                    })];
            });
        });
    };
    Web3codeService.prototype.check_admin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account = '';
                        meta = this;
                        return [4 /*yield*/, meta.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.admin.call(function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    var key_admin = false;
                                    if (result === meta.account) {
                                        key_admin = true;
                                    }
                                    resolve(key_admin);
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.bet_ether = function (a, chc, amt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta.spinner.show();
                                _this._tokenContract.betting(a, chc, 0, { from: account, value: _this._web3.toWei(amt, 'ether'), gas: 600000 }, function (err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else if (result == true) {
                                        meta.spinner.hide();
                                    }
                                    else {
                                        meta.hash(result).then(function (res) {
                                            console.log("result : " + res);
                                            if (res == false)
                                                swal("Bet Expired");
                                            meta.spinner.hide();
                                        });
                                    }
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.bet_token = function (a, chc, amt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta.spinner.show();
                                _this._tokenContract.betting(a, chc, _this._web3.toWei(amt, 'ether'), { from: account, value: 0, gas: 600000 }, function (err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else if (result == true) {
                                        meta.spinner.hide();
                                    }
                                    else {
                                        meta.hash(result).then(function (res) {
                                            console.log("result : " + res);
                                            meta.spinner.hide();
                                        });
                                    }
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.increase_ether = function (bid, amt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta.spinner.show();
                                _this._tokenContract.increase(bid, 0, { from: account, value: _this._web3.toWei(amt, 'ether'), gas: 600000 }, function (err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else if (result == true) {
                                        meta.spinner.hide();
                                    }
                                    else {
                                        meta.hash(result).then(function (res) {
                                            console.log("result : " + res);
                                            meta.spinner.hide();
                                        });
                                    }
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.increase_token = function (bid, amt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta.spinner.show();
                                _this._tokenContract.increase(bid, _this._web3.toWei(amt, 'ether'), { from: account, value: 0, gas: 600000 }, function (err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else if (result == true) {
                                        meta.spinner.hide();
                                    }
                                    else {
                                        meta.hash(result).then(function (res) {
                                            console.log("result : " + res);
                                            meta.spinner.hide();
                                        });
                                    }
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.decrease_ether = function (bid, amt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta.spinner.show();
                                var option = false;
                                _this._tokenContract.decrease(bid, option, _this._web3.toWei(amt, 'ether'), { from: account, value: 0, gas: 600000 }, function (err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else if (result == true) {
                                        meta.spinner.hide();
                                    }
                                    else {
                                        meta.hash(result).then(function (res) {
                                            console.log("result : " + res);
                                            meta.spinner.hide();
                                        });
                                    }
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.decrease_token = function (bid, amt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta.spinner.show();
                                var option = true;
                                _this._tokenContract.decrease(bid, option, _this._web3.toWei(amt, 'ether'), { from: account, value: 0, gas: 600000 }, function (err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else if (result == true) {
                                        meta.spinner.hide();
                                    }
                                    else {
                                        meta.hash(result).then(function (res) {
                                            console.log("result : " + res);
                                            meta.spinner.hide();
                                        });
                                    }
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.cancel_bet = function (bid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        meta.spinner.show();
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta.spinner.show();
                                _this._tokenContract.trader_cancel_bet_and_widthdraw(bid, { from: account, gas: 600000 }, function (err, result) {
                                    if (err) {
                                        meta.spinner.hide();
                                        reject(err);
                                    }
                                    else if (result == true) {
                                        meta.spinner.hide();
                                    }
                                    else {
                                        meta.hash(result).then(function (res) {
                                            console.log("result : " + res);
                                            meta.spinner.hide();
                                        });
                                    }
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.stake = function () {
        return __awaiter(this, void 0, void 0, function () {
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta._tokenContract.broker_map.call(account, function (err, result) {
                                    resolve(meta._web3.fromWei(result[0], 'ether'));
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.Token = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                meta._tokenContract.broker_map.call(account, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    // console.log("a",result[1]);
                                    resolve(meta._web3.fromWei(result[1], 'ether'));
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.check_bro = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, meta.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta._tokenContract.broker_map.call(_this.account, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    var key_broker = false;
                                    if (result[2] == true) {
                                        key_broker = true;
                                    }
                                    resolve(key_broker);
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.add_bro = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta.spinner.show();
                                _this._tokenContract.add_broker({ from: account, value: _this._web3.toWei(amount, 'ether'), gas: 600000 }, function (err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else if (result == true) {
                                        meta.spinner.hide();
                                    }
                                    else {
                                        meta.hash(result).then(function (res) {
                                            console.log("result : " + res);
                                            meta.spinner.hide();
                                        });
                                    }
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.withdraw_from_staked_ether = function (ether) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta.spinner.show();
                                var option = false;
                                _this._tokenContract.broker_withdraw_from_stake(option, _this._web3.toWei(ether, 'ether'), { from: account, value: 0, gas: 600000 }, function (err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else if (result == true) {
                                        meta.spinner.hide();
                                    }
                                    else {
                                        meta.hash(result).then(function (res) {
                                            console.log("result : " + res);
                                            meta.spinner.hide();
                                        });
                                    }
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.withdraw_from_staked_token = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta.spinner.show();
                                var option = true;
                                _this._tokenContract.broker_withdraw_from_stake(option, _this._web3.toWei(token, 'ether'), { from: account, value: 0, gas: 600000 }, function (err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else if (result == true) {
                                        meta.spinner.hide();
                                    }
                                    else {
                                        meta.hash(result).then(function (res) {
                                            console.log("result : " + res);
                                            meta.spinner.hide();
                                        });
                                    }
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.a_s_e = function (ether) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        meta.spinner.show();
                        _this._tokenContract.add_stake(0, { from: _this._web3.eth.defaultAccount, value: _this._web3.toWei(ether, 'ether'), gas: 600000 }, function (err, result) {
                            if (err) {
                                reject(err);
                            }
                            else if (result == true) {
                                meta.spinner.hide();
                            }
                            else {
                                meta.hash(result).then(function (res) {
                                    console.log("result : " + res);
                                    meta.spinner.hide();
                                });
                            }
                            resolve(result);
                        });
                    })];
            });
        });
    };
    Web3codeService.prototype.a_s_t = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        meta.spinner.show();
                        _this._tokenContract.add_stake(_this._web3.toWei(token, 'ether'), { from: _this._web3.eth.defaultAccount, value: 0, gas: 600000 }, function (err, result) {
                            if (err) {
                                reject(err);
                            }
                            else if (result == true) {
                                meta.spinner.hide();
                            }
                            else {
                                meta.hash(result).then(function (res) {
                                    console.log("result : " + res);
                                    meta.spinner.hide();
                                });
                            }
                            resolve(result);
                        });
                    })];
            });
        });
    };
    Web3codeService.prototype.getToken = function (not) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        meta.spinner.show();
                        _this._tokenContract.token_transaction(0, { from: _this._web3.eth.defaultAccount, value: _this._web3.toWei(not, 'ether'), gas: 600000 }, function (err, result) {
                            if (err) {
                                reject(err);
                            }
                            else if (result == true) {
                                meta.spinner.hide();
                            }
                            else {
                                meta.hash(result).then(function (res) {
                                    console.log("result : " + res);
                                    meta.spinner.hide();
                                });
                            }
                        });
                    })];
            });
        });
    };
    Web3codeService.prototype.exchange_token = function (not) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta.spinner.show();
                                _this._tokenContract.token_transaction(_this._web3.toWei(not, 'ether'), { from: account, value: 0, gas: 600000 }, function (err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else if (result == true) {
                                        meta.spinner.hide();
                                    }
                                    else {
                                        meta.hash(result).then(function (res) {
                                            console.log("result : " + res);
                                            meta.spinner.hide();
                                        });
                                        //  resolve(this._web3.fromWei(result));  
                                    }
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.creat_bt = function (name, price, time) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta.spinner.show();
                                return meta._tokenContract.broker_set_game(_this._web3.toAscii(name), (price * 1000), time, { from: _this.account, gas: 600000 }, function (err, result) {
                                    if (err) {
                                        meta.spinner.hide();
                                        reject(err);
                                    }
                                    else if (result == true) {
                                        meta.spinner.hide();
                                    }
                                    else {
                                        meta.hash(result).then(function (res) {
                                            console.log("result : " + res);
                                            meta.spinner.hide();
                                        });
                                    }
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.set_result = function (gid, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                meta.spinner.show();
                                return meta._tokenContract.admin_setting_result_and_distribute_money(gid, res, { from: account, gas: 600000 }, function (err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else if (result == true) {
                                        meta.spinner.hide();
                                    }
                                    else {
                                        meta.hash(result).then(function (res) {
                                            console.log("result : " + res);
                                            if (res == false) {
                                                swal("Sorry!...The Bet id Not Expired");
                                            }
                                            meta.spinner.hide();
                                        });
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    Web3codeService.prototype.get_total_game = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._tokenContract.game_id.call(function (error, result) {
                            if (error) {
                                reject(error);
                            }
                            var arr = [];
                            // console.log(result);
                            for (var i = 1; i <= result.toNumber(); i++) {
                                arr.push(i);
                            }
                            resolve(arr);
                        });
                    })];
            });
        });
    };
    Web3codeService.prototype.game_set_map = function (gid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var _web3 = _this._web3;
                        _this._tokenContract.game_set_map.call(gid, function (error, result) {
                            if (error) {
                                reject(error);
                            }
                            result[0] = _web3.toAscii(result[0]);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    Web3codeService.prototype.no_of_gamers = function (gid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var _web3 = _this._web3;
                        _this._tokenContract.length_of_game_set_map.call(gid, function (error, result) {
                            if (error) {
                                reject(error);
                            }
                            var arr = [];
                            for (var i = 0; i < result.toNumber(); i++) {
                                arr.push(i);
                            }
                            // console.log(result.toNumber());
                            resolve(arr);
                        });
                    })];
            });
        });
    };
    Web3codeService.prototype.get_gamer_address = function (gid, index) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var _web3 = _this._web3;
                        _this._tokenContract.get_game_set_map_value.call(gid, index, function (error, result) {
                            if (error) {
                                reject(error);
                            }
                            resolve(result);
                        });
                    })];
            });
        });
    };
    Web3codeService.prototype.game_details = function (address, id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var _web3 = _this._web3;
                        _this._tokenContract.betting_map.call(address, id, function (error, result) {
                            if (error) {
                                reject(error);
                            }
                            result[1] = result[1].toNumber();
                            result[2] = result[2].toNumber();
                            resolve(result);
                        });
                    })];
            });
        });
    };
    Web3codeService.prototype.broker_de_registration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        meta = this;
                        account = '';
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.broker_de_registration({ from: account, gas: 600000 }, function (error, result) {
                                    if (error) {
                                        reject(error);
                                    }
                                    else {
                                        console.log("Success");
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    Web3codeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], Web3codeService);
    return Web3codeService;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n  <script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/momentjs/latest/moment.min.js\"></script>\r\n  <script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js\"></script>\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css\" />\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<script src=\"https://unpkg.com/sweetalert/dist/sweetalert.min.js\"></script>\r\n</head>\r\n<body style=\"background-color:rgb(240, 240, 240);\" >\r\n<br>\r\n       <div class=\"container\" style=\"background:white;height:220px;width:1200px;\">\r\n          <nav class=\" navbar container\" ><br>\r\n           <div>\r\n                \r\n             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n\r\n\r\n                   \r\n                    <br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;\r\n\r\n                               <label for=\"account\"><h4>Ether Balance:</h4><input type=\"text\"  class=\"form-control\" id=\"bal\" value=\"{{ balance }}\" readonly/></label> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \r\n\r\n\r\n                   <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\"  data-target=\"#purchase\" style=\"padding: 8px 30px\" class=\"button1 zoom\" >Purchase Token</Button>\r\n                   <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\" data-target=\"#selltoken\" style=\"padding: 8px 20px\"class=\"button1 zoom\" >Convert Token to Ether</Button>\r\n                   <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\"  data-target=\"#betting\" style=\"padding: 8px 30px\" class=\"button1 zoom\" >Bet</Button>\r\n                   <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\"  data-target=\"#increase\" style=\"padding: 8px 30px\" class=\"button1 zoom\" >Increase Bet</Button>\r\n                   <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\"  data-target=\"#decrease\" style=\"padding: 8px 30px\" class=\"button1 zoom\" >Decrease Bet</Button>\r\n                   <Button type=\"button\"  value=\"Create Bet\" data-toggle=\"modal\"  data-target=\"#exit\" style=\"padding: 8px 30px\" class=\"button1 zoom\" >Exit bet</Button>\r\n\r\n\r\n\r\n         </div>   \r\n</nav>\r\n</div>\r\n<!--BET POPUP-->\r\n<div class=\"modal fade\" id=\"betting\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      \r\n      <div class=\"modal-header\" style=\"background: #1affff\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\" >Bet</h4>         \r\n      </div>\r\n      <div class=\"modal-body\" >\r\n          <input type=\"text\" class=\"shadow\" placeholder=\"Enter game id\" #betting>\r\n\r\n        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Choose Token or Ether</p>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select #myselect>\r\n          <option value=\"0\">Ether</option>\r\n          <option value=\"1\">Token</option>\r\n      </select><br><br>\r\n      <input type=\"text\" class=\"shadow\" placeholder=\"Enter the Amount\" #bet_input>\r\n      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Choose Your Option</p>\r\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select #bet_choice>\r\n          <option value=\"0\">Low</option>\r\n          <option value=\"1\">High</option>\r\n      </select>\r\n      </div>\r\n     \r\n      <div class=\"modal-footer\" >\r\n        <button type=\"button\" class=\"success\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"bt(myselect.value,betting.value,bet_choice.value,bet_input.value)\">Bet</button>\r\n        <button type=\"button\" class=\"danger\"  data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!--Increase BEt POPUP-->\r\n<div class=\"modal fade\" id=\"increase\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        \r\n        <div class=\"modal-header\" style=\"background: #1affff\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\" >Increase</h4>         \r\n        </div>\r\n        \r\n        <div class=\"modal-body\" >\r\n          <p>Increase Bet Amount</p>\r\n          <br>\r\n        <input type=\"text\" class=\"shadow\" placeholder=\"Enter bet id\" #bet>\r\n          <br>\r\n          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Choose Token or Ether</p>\r\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select #inc_choice>\r\n              <option value=\"0\">Ether</option>\r\n              <option value=\"1\">Token</option>\r\n          </select><br><br><br>\r\n        <input type=\"text\" class=\"shadow\" placeholder=\"Enter the amount\" #amout>\r\n        \r\n      </div>\r\n       \r\n        <div class=\"modal-footer\" >\r\n          <button type=\"button\" class=\"success\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"inc(inc_choice.value,bet.value,amout.value)\">Increase</button>\r\n          <button type=\"button\" class=\"danger\"  data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  \r\n  <!--Decrase BEt POPUP-->\r\n<div class=\"modal fade\" id=\"decrease\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      \r\n      <div class=\"modal-header\" style=\"background: #1affff\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\" >Decrease</h4>         \r\n      </div>\r\n      <div class=\"modal-body\" >\r\n        <p>Decrease Bet Amount</p><br>\r\n        <br>\r\n      <input type=\"text\" class=\"shadow\" placeholder=\"Enter bet id\" #betid>\r\n      <br>\r\n      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Choose Token or Ether</p>\r\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select #dec_choice>\r\n          <option value=\"0\">Ether</option>\r\n          <option value=\"1\">Token</option>\r\n      </select><br><br><br>\r\n  \r\n      <input type=\"text\" class=\"shadow\" placeholder=\"Enter the amount\" #amt>\r\n      \r\n    </div>\r\n     \r\n      <div class=\"modal-footer\" >\r\n        <button type=\"button\" class=\"success\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"dec(dec_choice.value,betid.value,amt.value)\">Decrease</button>\r\n        <button type=\"button\" class=\"danger\"  data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Exit BEt POPUP-->\r\n  <div class=\"modal fade\" id=\"exit\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        \r\n        <div class=\"modal-header\" style=\"background: #1affff\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\" >Exit</h4>         \r\n        </div>\r\n        \r\n        <div class=\"modal-body\" >\r\n       \r\n          \r\n        <input type=\"text\" class=\"shadow\" placeholder=\"Enter bet id\" #bet_id>        \r\n      </div>\r\n       \r\n        <div class=\"modal-footer\" >\r\n          <button type=\"button\" class=\"success\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"exit(bet_id.value)\">Exit</button>\r\n          <button type=\"button\" class=\"danger\"  data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n<!--purchase popup--> \r\n<div class=\"modal fade\" id=\"purchase\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        \r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Purchase Tokens</h4>         \r\n        </div>\r\n        \r\n        <div class=\"modal-body\">\r\n            <input type=\"text\" placeholder=\"Enter Number of Tokens\" #num>\r\n        </div>\r\n       \r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\"class=\"butn zoom\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"gt(num.value)\" style=\"background:#03A9F4\" >Purchase</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n   <!--sell token popup--> \r\n   <div class=\"modal fade\" id=\"selltoken\" role=\"dialog\">\r\n      <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n          \r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">Exchange Token</h4>         \r\n          </div>\r\n          \r\n          <div class=\"modal-body\">\r\n              <input type=\"text\" placeholder=\"Enter Number of Tokens\" #selltk>\r\n          </div>\r\n         \r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"butn zoom\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"et(selltk.value)\" style=\"background:#03A9F4\">Exchange</button>\r\n          \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n <br>\r\n<!--unbeted table-->\r\n<div class=\"container\" style=\"height:400px;width:1230px;\">\r\n    <table class=\"table\" style=\"background:white;overflow-y:scroll;display:block;\" >\r\n     <thead>\r\n       <tr style=\"background:white\">\r\n         <th>Bet Id</th>\r\n         <th>Stock Name</th>\r\n         <th>Strike Price</th>\r\n         <th>Expiry time</th>\r\n         <th>Selected option</th>\r\n         <th>Betted ether</th>\r\n         <th>Betted token</th>\r\n         <th>Result</th>\r\n          </tr>\r\n     </thead>\r\n     <tbody id=\"user_bet_list\">\r\n        <tr *ngFor=\"let game of user_game\" [ngSwitch]=\"game.status\">\r\n            <td>{{ game.id }}</td><td>{{ game.stock_name }}</td>\r\n            <td>{{ game.strike_price }}</td>\r\n            <td>{{ game.expiry_time }}</td>\r\n            <td>{{ game.option }}</td>                                    \r\n            <td>{{ game.eth_value }}</td>\r\n            <td>{{ game.token_value }}</td>\r\n            <td *ngSwitchCase=\"0\">Pending</td>\r\n            <td *ngSwitchCase=\"10\">Low</td>\r\n            <td *ngSwitchCase=\"11\">High</td>\r\n            <td *ngSwitchCase=\"12\">Draw</td>\r\n         </tr>\r\n     </tbody>\r\n   </table>\r\n </div>\r\n<br>\r\n<!--Betted table-->\r\n<div class=\"container\" style=\"height:400px;width:1230px;\">\r\n    <table class=\"table\" style=\"background:white;overflow-y:scroll;display:block;\" >\r\n     <thead>\r\n       <tr style=\"background:white\">\r\n        <th>Bet Id</th>\r\n        <th>Stock Name</th>\r\n        <th>Strike Price</th>\r\n        <th>Expiry Time</th>\r\n        <th>No.of.Bets</th>\r\n        <th>Ether Collected</th>\r\n        <th>Tokens Collected</th> \r\n        <th>Result</th>  \r\n         <th> </th>\r\n         <th> </th>\r\n         <th> </th>\r\n       </tr>\r\n     </thead>\r\n     <tbody id=\"total_bet_list\">\r\n        <tr *ngFor=\"let games of total_game\" [ngSwitch]=\"games.status\">\r\n            <td>{{ games.id }}</td>\r\n            <td>{{ games.stock_name }}</td>\r\n            <td>{{ games.strike_price }}</td>\r\n            <td>{{ games.expiry_time }}</td>\r\n            <td>{{ games.no_of_bets }}</td>\r\n            <td>{{ games.eth_value }}</td>\r\n            <td>{{ games.token_value }}</td>\r\n            <td *ngSwitchCase=\"0\">Pending</td>\r\n            <td *ngSwitchCase=\"10\">Low</td>\r\n            <td *ngSwitchCase=\"11\">High</td>\r\n            <td *ngSwitchCase=\"12\">Draw</td>\r\n         </tr>\r\n     </tbody>\r\n   </table>\r\n </div> \r\n <br>\r\n</body>\r\n</html>\r\n<ngx-spinner></ngx-spinner>\r\n<ngx-spinner\r\n     bdColor=\"rgba(51,51,51,0.8)\"\r\n     size=\"medium\"\r\n     color=\"#fff\"\r\n     loadingText=\"Loading...\"\r\n     type=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\n  color: #FFFFFF;\n  background-color: blue;\n  height: 100%; }\n\n.navbar-brand {\n  padding: 0px; }\n\n.navbar-brand > img {\n  height: 100%;\n  padding: 3px;\n  width: auto; }\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 2s5px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1; }\n\ntable {\n  border-collapse: collapse;\n  border: 10px solid white;\n  background-color: white;\n  width: 100%;\n  height: 100%; }\n\ndiv#description {\n  background-color: gray;\n  height: 25%;\n  border: 2px black; }\n\ntr {\n  line-height: 55px; }\n\n.container {\n  height: 100%; }\n\n#topics tr {\n  line-height: 24px; }\n\nbutton {\n  background: #1295e5;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  color: white;\n  padding: 10px 22px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 1px 10px;\n  cursor: pointer;\n  opacity: 0.9;\n  border: none; }\n\nbutton1 {\n  background: #f0f0f0;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  color: white;\n  padding: 10px 22px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 1px 10px;\n  cursor: pointer;\n  opacity: 0.9;\n  border: none; }\n\nbutton:hover {\n  opacity: 1; }\n\noutput, a {\n  color: white; }\n\na {\n  color: black; }\n\ninput {\n  text-align: center; }\n\n.ui-datepicker {\n  font-size: 9pt !important; }\n\n.danger {\n  background-color: #f44336; }\n\n/* Red */\n\n.danger:hover {\n  background: #da190b; }\n\n.mytxt {\n  background-color: transparent;\n  color: black;\n  outline: none;\n  outline-style: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid black 1px;\n  padding: 3px 10px;\n  width: 160px; }\n\n.header th {\n  height: 2px;\n  line-height: 2px;\n  width: 1px; }\n\n.btn {\n  border: none;\n  outline: none;\n  padding: 0px 0px;\n  background-color: #1295e5;\n  cursor: pointer;\n  font-size: 18px; }\n\n.zoom:hover {\n  /* IE 9 */\n  -webkit-transform: scale(1.2);\n  /* Safari 3-8 */\n  transform: scale(1.2); }\n\n.btn1 {\n  border: none;\n  outline: none;\n  padding: 0px 0px;\n  background-color: #f0f0f0;\n  color: black;\n  cursor: pointer;\n  font-size: 18px; }\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: white;\n  background: #1295e5; }\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3code_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3code.service */ "./src/app/services/web3code.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserComponent = /** @class */ (function () {
    function UserComponent(wcs, router, spinner) {
        this.wcs = wcs;
        this.router = router;
        this.spinner = spinner;
        this.acc = null;
        this.balance = null;
        this.total_game = [];
        this.user_game = [];
        this.array = [];
        jquery__WEBPACK_IMPORTED_MODULE_4___default()("#user").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()("#admin").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()("#broker").removeClass("active");
    }
    UserComponent.prototype.gt = function (number) {
        //  this.spinner.show();
        if (number == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Enter Number of Tokens");
        }
        else {
            var not = number / 1000;
            this.wcs.getToken(not);
        }
    };
    UserComponent.prototype.et = function (num) {
        if (num == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Enter Number of Tokens");
        }
        else {
            var not = num / 1000;
            this.wcs.exchange_token(not);
        }
    };
    UserComponent.prototype.bt = function (opt, id, chc, amt) {
        var _this = this;
        if (opt == "" || id == "" || chc == "" || amt == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Please Fill all the Fields");
        }
        else {
            this.wcs.game_set_map(id).then(function (result) {
                var date = new Date().toLocaleString();
                var b = new Date(date);
                var c = Math.round(b);
                var d = c / 1000.0;
                var bet_time = parseInt(d);
                if (bet_time + 120 <= result[2]) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Active Bet");
                    if (opt == 0) {
                        _this.wcs.bet_ether(id, chc, amt);
                    }
                    else if (opt == 1) {
                        _this.wcs.bet_token(id, chc, amt);
                    }
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Sorry! Bet Expired");
                }
            });
        }
    };
    UserComponent.prototype.inc = function (choice, bid, amount) {
        var _this = this;
        if (choice == "" || bid == "" || amount == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Please Fill all the Fields");
        }
        else {
            var id_1 = bid;
            this.wcs.getAccount().then(function (address) {
                _this.wcs.game_details(address, id_1).then(function (amt) {
                    if (amt[1] > 0 || amt[2] > 0) {
                        _this.wcs.game_set_map(id_1).then(function (result) {
                            var date = new Date().toLocaleString();
                            var b = new Date(date);
                            var c = Math.round(b);
                            var d = c / 1000.0;
                            var bet_time = parseInt(d);
                            //  console.log(bet_time);
                            if (bet_time + 120 <= result[2]) {
                                //  swal("Active Bet")
                                if (choice == 0) {
                                    _this.wcs.increase_ether(bid, amount);
                                }
                                else if (choice == 1) {
                                    _this.wcs.increase_token(bid, amount);
                                }
                            }
                            else {
                                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Sorry! Bet Expired");
                            }
                        });
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("You are not betted");
                    }
                });
            });
        }
    };
    UserComponent.prototype.dec = function (choice, bid, amt) {
        var _this = this;
        if (choice == "" || bid == "" || amt == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Please Fill all the Fields");
        }
        else {
            this.wcs.getAccount().then(function (address) {
                _this.wcs.game_details(address, bid).then(function (amount) {
                    if (amount[1] > 0 || amount[2] > 0) {
                        _this.wcs.game_set_map(bid).then(function (result) {
                            var date = new Date().toLocaleString();
                            var b = new Date(date);
                            var c = Math.round(b);
                            var d = c / 1000.0;
                            var bet_time = parseInt(d);
                            //  console.log(bet_time);
                            if (bet_time + 120 <= result[2]) {
                                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Active Bet");
                                if (choice == 0) {
                                    _this.wcs.decrease_ether(bid, amt);
                                }
                                else if (choice == 1) {
                                    _this.wcs.decrease_token(bid, amt);
                                }
                            }
                            else {
                                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Sorry! Bet Expired");
                            }
                        });
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("You are not Betted");
                    }
                });
            });
        }
    };
    UserComponent.prototype.exit = function (bid) {
        var _this = this;
        if (bid == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Please Enter a Bet id");
        }
        else {
            this.wcs.getAccount().then(function (address) {
                _this.wcs.game_details(address, bid).then(function (resu) {
                    if ((resu[1] > 0 || resu[2] > 0) && resu[3] == false) {
                        _this.wcs.game_set_map(bid).then(function (result) {
                            var date = new Date().toLocaleString();
                            var b = new Date(date);
                            var c = Math.round(b);
                            var d = c / 1000.0;
                            var bet_time = parseInt(d);
                            //  console.log(bet_time);
                            if (bet_time + 60 <= result[2]) {
                                _this.wcs.cancel_bet(bid);
                            }
                            else {
                                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Sorry! Bet Expired");
                            }
                        });
                    }
                    else {
                        if (resu[1] == 0 && resu[2] == 0) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("you are Not betted");
                        }
                        else if (resu[3] == true) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("You are Already Cancelled this Bet");
                        }
                    }
                });
            });
        }
    };
    UserComponent.prototype.usertablework = function () {
        var _this = this;
        this.user_game = [];
        this.wcs.getAccount().then(function (address) {
            _this.wcs.get_total_game().then(function (game) {
                game.forEach(function (item) {
                    var w_obj = {};
                    _this.wcs.game_details(address, item).then(function (obj) {
                        // console.log(address,item);        
                        if ((obj[1] > 0 || obj[2] > 0) && obj[3] == false) {
                            _this.wcs.game_set_map(item).then(function (result) {
                                w_obj['id'] = item;
                                w_obj["stock_name"] = result[0];
                                w_obj["strike_price"] = result[1] / 1000;
                                var tm = new Date(result[2].toNumber() * 1000);
                                var etime = tm.toString();
                                w_obj["expiry_time"] = etime;
                                if (obj[0] == false) {
                                    w_obj["option"] = "low";
                                }
                                else if (obj[0] == true) {
                                    w_obj["option"] = "High";
                                }
                                w_obj["status"] = result[4];
                                w_obj["eth_value"] = obj[1] / 1000000000000000000;
                                w_obj["token_value"] = obj[2] / 1000000000000000000;
                                _this.user_game.push(w_obj);
                            });
                        }
                    });
                });
            });
        });
    };
    UserComponent.prototype.alltablework = function () {
        var _this = this;
        this.total_game = [];
        this.wcs.get_total_game().then(function (game) {
            game.forEach(function (item) {
                var w_obj = {};
                _this.wcs.game_set_map(item).then(function (obj) {
                    _this.wcs.no_of_gamers(item).then(function (no_game) {
                        if (no_game.length !== 0) {
                            no_game.forEach(function (items) {
                                _this.wcs.get_gamer_address(item, items).then(function (obj1) {
                                    _this.wcs.game_details(obj1, item).then(function (obj2) {
                                        if (w_obj[item + "__eth_value"] == undefined) {
                                            w_obj["id"] = item;
                                            w_obj["stock_name"] = obj[0];
                                            w_obj["strike_price"] = obj[1] / 1000;
                                            var tm = new Date(obj[2].toNumber() * 1000);
                                            var etime = tm.toString();
                                            w_obj["expiry_time"] = etime;
                                            w_obj["no_of_bets"] = no_game.length;
                                            console.log("Display" + w_obj["no_of_bets"]);
                                            _this.array.push(w_obj["id"]);
                                            w_obj["eth_value"] = obj2[1] / 1000000000000000000;
                                            w_obj["token_value"] = obj2[2] / 1000000000000000000;
                                            w_obj[item + "__eth_value"] = obj2[1] / 1000000000000000000;
                                            w_obj[item + "__token_value"] = obj2[2] / 1000000000000000000;
                                            w_obj["status"] = obj[4];
                                        }
                                        else {
                                            w_obj["eth_value"] = w_obj["eth_value"] + obj2[1] / 1000000000000000000;
                                            w_obj["token_value"] = w_obj["token_value"] + obj2[2] / 1000000000000000000;
                                            w_obj[item + "__eth_value"] = w_obj[item + "__eth_value"] + obj2[1] / 1000000000000000000;
                                            w_obj[item + "__token_value"] = w_obj[item + "__token_value"] + obj2[2] / 1000000000000000000;
                                        }
                                        _this.total_game.push(w_obj);
                                    });
                                });
                            });
                        }
                        else {
                            w_obj["id"] = item;
                            w_obj["stock_name"] = obj[0];
                            w_obj["strike_price"] = obj[1] / 1000;
                            var tm = new Date(obj[2].toNumber() * 1000);
                            var etime = tm.toString();
                            w_obj["expiry_time"] = etime;
                            w_obj["no_of_bets"] = 0;
                            w_obj["eth_value"] = 0;
                            w_obj["token_value"] = 0;
                            w_obj["status"] = obj[4];
                            _this.total_game.push(w_obj);
                        }
                    });
                });
            });
        });
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        meta.usertablework();
        meta.alltablework();
        meta.wcs.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.wcs.getAccount().then(function (acc) {
            _this.acc = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_6__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.acc) {
                        meta.acc = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            meta.wcs.getUserBalance().then(function (balance) { return meta.balance = balance; });
            meta.usertablework();
            meta.alltablework();
        }, 20000);
    };
    UserComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
        if (this.id2) {
            clearInterval(this.id2);
        }
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3code_service__WEBPACK_IMPORTED_MODULE_1__["Web3codeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\hlv3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map