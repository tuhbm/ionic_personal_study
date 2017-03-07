"use strict";

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function mySuper(target) {
    console.log("target = ", target);
    target.test = "test입니다";
}
var MyClass = (function () {
    function MyClass() {}
    MyClass.prototype.test1 = function () {
        console.log("test1");
    };
    MyClass = __decorate([mySuper], MyClass);
    return MyClass;
})();
var a1 = new MyClass();
console.log(MyClass.test);
//# sourceMappingURL=using.js.map

//# sourceMappingURL=using-compiled.js.map