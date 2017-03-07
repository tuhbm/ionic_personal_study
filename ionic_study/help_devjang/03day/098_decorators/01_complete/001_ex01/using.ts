function de1(a1:string):void {

    console.log("__", arguments, a1);
}
class MyClass {
    @de1("aaa");
    test1():void {
       console.log("test1");
    }
}

let a1:MyClass = new MyClass();
a1.test1();
