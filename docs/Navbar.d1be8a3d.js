parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Ou4U":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("vue")),t=o(require("js-yaml")),n=o(require("ajv")),r=o(require("#/customValidator.js"));function o(e){return e&&e.__esModule?e:{default:e}}var u=(new n.default).compile(t.default.safeLoad("\n\ntype: 'object'\nproperties:\n  buttonList:\n    type: 'array'\n    items:\n      type: 'object'\n      required:\n        - 'state'\n        - 'label'\n        - 'url'\n        - 'id'\n      properties:\n        state:\n          type: 'string'\n        label:\n          type: 'string'\n        url:\n          type: 'string'\n        id:\n          type: 'string'\n\n  hoveredButtonID:\n    type: 'string'\n\n  ".trim())),d=e.default.extend({props:{model:{validator:function(e){return(0,r.default)(u,e)}}},methods:{onItemHover:function(e){this.model.hoveredButtonID=e.id},statefulBtnModel:function(e){return""===this.model.hoveredButtonID?e.state="default":this.model.hoveredButtonID==e.id?e.state="hovered":e.state="unhovered",e},onListOut:function(){this.model.hoveredButtonID=""}}});exports.default=d;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navbar",on:{mouseout:t.onListOut}},[e("div",{staticClass:"navbar__list"},t._l(t.model.buttonList,function(n){return e("navbar-button",{staticClass:"navbar__item",attrs:{model:t.statefulBtnModel(n)},nativeOn:{mouseover:function(e){return t.onItemHover(n)}}})}),1)])},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"vue":"QPfz","js-yaml":"6fmF","ajv":"7PQk","#/customValidator.js":"yXk6"}]},{},[], null)
//# sourceMappingURL=/code-projects/Navbar.d1be8a3d.map