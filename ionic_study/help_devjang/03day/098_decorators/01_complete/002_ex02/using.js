var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MyComponent(target) {
    target.prototype.test = "test입니다2";
    target.prototype.test2 = () => {
        alert("Test2");
    };
    console.log("target = ", target);
}
let MyClass = class MyClass {
    test1() {
        console.log("test1");
    }
};
MyClass = __decorate([
    MyComponent
], MyClass);
let a1 = new MyClass();
a1.test2();
//# sourceMappingURL=using.js.map