function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_taskApp_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/taskApp/task.component */
    "./src/app/components/taskApp/task.component.ts");

    var routes = [{
      path: "task",
      component: _components_taskApp_task_component__WEBPACK_IMPORTED_MODULE_2__["taskComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'testeApp';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _components_taskApp_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/taskApp/task.component */
    "./src/app/components/taskApp/task.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_taskApp_task_component__WEBPACK_IMPORTED_MODULE_0__["taskComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_taskApp_task_component__WEBPACK_IMPORTED_MODULE_0__["taskComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/taskApp/task.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/taskApp/task.component.ts ***!
    \******************************************************/

  /*! exports provided: taskComponent */

  /***/
  function srcAppComponentsTaskAppTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "taskComponent", function () {
      return taskComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "fa-check": a0,
        "fa-times": a1
      };
    };

    function taskComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function taskComponent_div_11_Template_div_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.removetask(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function taskComponent_div_11_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.changeStatusComplitedtask(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function taskComponent_div_11_Template_div_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.updatetask(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function taskComponent_div_11_Template_div_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.removetask(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, task_r3.complited, !task_r3.complited));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r3.name, " ");
      }
    }

    function taskComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " active task : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " task complited : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.numberoftasks, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.numberoftaskcomplited, " of ", ctx_r1.numberoftasks, " ");
      }
    }

    function taskComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " no task to show\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var taskComponent = /*#__PURE__*/function () {
      function taskComponent() {
        var _this = this;

        _classCallCheck(this, taskComponent);

        this.updateactive = false;
        this.listOftasks = [];
        this.newtaskForm = {
          name: "",
          complited: false
        };
        this.numberoftasks = this.listOftasks.length;

        this.changeStatusComplitedtask = function (index) {
          _this.listOftasks[index].complited = !_this.listOftasks[index].complited;

          _this.numberofcomplitedtaskfun();

          localStorage.setItem("listTasks", JSON.stringify(_this.listOftasks));
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('génial', 'task complited', 'success');
        };

        this.addtask = function () {
          _this.listOftasks.push(_this.newtaskForm);

          _this.newtaskForm = {
            name: "",
            complited: false
          };
          _this.numberoftasks = _this.listOftasks.length;
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('good', 'task bien ajouter', 'success');
          localStorage.setItem("listTasks", JSON.stringify(_this.listOftasks));
        };

        this.updatetask = function (index) {
          _this.indexActive = index;
          _this.updateactive = true;
          _this.newtaskForm = _this.listOftasks[index];
          localStorage.setItem("listTasks", JSON.stringify(_this.listOftasks));
        };

        this.updateitem = function () {
          _this.listOftasks.splice(_this.indexActive, 1, _this.newtaskForm);

          _this.indexActive = null;
          _this.updateactive = false;
          _this.newtaskForm = {
            name: "",
            complited: false
          };
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('good work', 'task bien editer', 'info');
          localStorage.setItem("listTasks", JSON.stringify(_this.listOftasks));
        };

        this.removetask = function (index) {
          _this.listOftasks.splice(index, 1);

          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Nice!', 'task bien supprimer', 'error');
          _this.numberoftasks = _this.listOftasks.length;
          localStorage.setItem("listTasks", JSON.stringify(_this.listOftasks));

          _this.numberofcomplitedtaskfun();
        };

        this.numberoftaskcomplited = 0;

        this.numberofcomplitedtaskfun = function () {
          _this.numberoftaskcomplited = 0;

          for (var i = 0; i < _this.listOftasks.length; i++) {
            var item = _this.listOftasks[i].complited;
            if (item) _this.numberoftaskcomplited += 1;
          }
        };
      }

      _createClass(taskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listOftasks = _toConsumableArray(JSON.parse(localStorage.getItem("listTasks")));
          this.numberoftasks = this.listOftasks.length;
          this.numberofcomplitedtaskfun();
        }
      }]);

      return taskComponent;
    }();

    taskComponent.ɵfac = function taskComponent_Factory(t) {
      return new (t || taskComponent)();
    };

    taskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: taskComponent,
      selectors: [["app-walid"]],
      decls: 14,
      vars: 7,
      consts: [[1, "w-100", "bg-primary", "py-3", "text-center", "text-light", "shadow", "mb-5"], [1, "main", "shadow", "rounded-lg", "p-5"], [1, "form-group", "d-flex"], ["type", "text", "placeholder", "add task...", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "hidden", "disabled", "click"], [1, "fas", "fa-plus"], [1, "btn", "btn-danger", 3, "hidden", "click"], [1, "fas", "fa-edit"], [1, "tasks"], ["class", "task d-flex bg-light py-3 px-4 rounded-lg shadow my-2", 3, "dblclick", 4, "ngFor", "ngForOf"], ["class", "state py-3 text-center bg-primary shadow rounded-lg d-flex text-light", 4, "ngIf"], ["class", "state py-3 text-center bg-danger shadow rounded-lg text-light", 4, "ngIf"], [1, "task", "d-flex", "bg-light", "py-3", "px-4", "rounded-lg", "shadow", "my-2", 3, "dblclick"], [1, "completed"], [1, "shadow", 3, "click"], [1, "fas", 3, "ngClass"], [1, "name", "text-center"], [1, "edit"], [1, "delete"], [1, "fas", "fa-trash-alt"], [1, "state", "py-3", "text-center", "bg-primary", "shadow", "rounded-lg", "d-flex", "text-light"], [1, "numbertasks"], [1, "numberComplitedtasks"], [1, "state", "py-3", "text-center", "bg-danger", "shadow", "rounded-lg", "text-light"]],
      template: function taskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " app todo list ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function taskComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.newtaskForm.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function taskComponent_Template_button_click_5_listener() {
            return ctx.addtask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function taskComponent_Template_button_click_7_listener() {
            return ctx.updateitem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, taskComponent_div_11_Template, 12, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, taskComponent_div_12_Template, 9, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, taskComponent_div_13_Template, 2, 0, "div", 11);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newtaskForm.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.updateactive)("disabled", ctx.newtaskForm.name.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.updateactive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOftasks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOftasks.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOftasks.length == 0);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: ["h2[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.shodowdivchild[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .completed[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.main[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60%;\n  height: 500px;\n  background-color: white;\n  margin: 1rem auto;\n  overflow: hidden;\n}\n\n.main[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 350px;\n  padding: 1rem 2rem;\n  overflow: hidden scroll;\n}\n\n.main[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n.main[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: white;\n  box-shadow: inset 0 0 5px white;\n  border-radius: 9999px;\n}\n\n.main[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #007bff;\n  border-radius: 9999px;\n}\n\n.main[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n  color: #007bff;\n}\n\n.main[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .completed[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #7bed9f;\n}\n\n.main[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #eccc68;\n}\n\n.main[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #ff4757;\n}\n\n.main[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.main[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.state[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.state[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrQXBwL0M6XFxVc2Vyc1xcYXlvdWJcXE9uZURyaXZlXFxCdXJlYXVcXFRlc3RGaXJlYmFzZUFwcFxcdGVzdGVBcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRhc2tBcHBcXHRhc2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGFza0FwcC90YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDUjs7QURDUTtFQUNJLFdBQUE7QUNDWjs7QURFUTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtBQ0FaOztBREdRO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQ0RaOztBREtZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0hoQjs7QURNWTtFQUVJLHlCQUFBO0FDTGhCOztBRFNZO0VBRUkseUJBQUE7QUNSaEI7O0FEV1k7RUFFSSx5QkFBQTtBQ1ZoQjs7QURjUTtFQUNJLFVBQUE7QUNaWjs7QURlUTtFQUNJLFVBQUE7QUNiWjs7QURtQkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ2hCSjs7QURrQkk7RUFDSSxVQUFBO0FDaEJSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrQXBwL3Rhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNob2Rvd2RpdmNoaWxke1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm1haW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC50YXNrc3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuIHNjcm9sbDtcclxuXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmOyBcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhc2sge1xyXG4gICAgICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb21wbGV0ZWQgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC5zaG9kb3dkaXZjaGlsZDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YmVkOWY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAuZWRpdCA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC5zaG9kb3dkaXZjaGlsZDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2NjNjg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kZWxldGUgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC5zaG9kb3dkaXZjaGlsZDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQ3NTc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50YXNrID4gZGl2e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhc2sgLm5hbWV7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLnN0YXRle1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICYgPiBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxufSIsImgyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaG9kb3dkaXZjaGlsZCwgLm1haW4gLnRhc2tzIC50YXNrIC5kZWxldGUgPiBkaXYsIC5tYWluIC50YXNrcyAudGFzayAuZWRpdCA+IGRpdiwgLm1haW4gLnRhc2tzIC50YXNrIC5jb21wbGV0ZWQgPiBkaXYge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluIC50YXNrcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1MHB4O1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIG92ZXJmbG93OiBoaWRkZW4gc2Nyb2xsO1xufVxuLm1haW4gLnRhc2tzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuLm1haW4gLnRhc2tzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG59XG4ubWFpbiAudGFza3M6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xufVxuLm1haW4gLnRhc2tzIC50YXNrIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4ubWFpbiAudGFza3MgLnRhc2sgLmNvbXBsZXRlZCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YmVkOWY7XG59XG4ubWFpbiAudGFza3MgLnRhc2sgLmVkaXQgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNjYzY4O1xufVxuLm1haW4gLnRhc2tzIC50YXNrIC5kZWxldGUgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NzU3O1xufVxuLm1haW4gLnRhc2tzIC50YXNrID4gZGl2IHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5tYWluIC50YXNrcyAudGFzayAubmFtZSB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5zdGF0ZSB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnN0YXRlID4gZGl2IHtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](taskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-walid',
          templateUrl: './task.component.html',
          styleUrls: ['./task.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ayoub\OneDrive\Bureau\TestFirebaseApp\testeApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map