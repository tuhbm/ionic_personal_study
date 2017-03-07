var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function de1(a1) {
    console.log("__", arguments, a1);
}
class MyClass {
    test1() {
        console.log("test1");
    }
}
__decorate([
    de1("aaa")
], MyClass.prototype, "", void 0);
let a1 = new MyClass();
a1.test1();
//# sourceMappingURL=using.js.map