var myPackage;
(function (myPackage) {
    var count = 0;
    var MyClass1 = (function () {
        function MyClass1() {
            count++;
        }
        MyClass1.prototype.method1 = function () {
            console.log("MyClass1 method1");
        };
        MyClass1.getCount = function () {
            return count;
        };
        return MyClass1;
    }());
    myPackage.MyClass1 = MyClass1;
    var MyClass2 = (function () {
        function MyClass2() {
        }
        MyClass2.prototype.method1 = function () {
            console.log("MyClass2 method1");
        };
        return MyClass2;
    }());
})(myPackage || (myPackage = {}));
/// <reference path="mypackage.ts" />
var my1 = new myPackage.MyClass1();
my1.method1();
//접근 에러
//let my2 = new myPackage.MyClass2(); 
