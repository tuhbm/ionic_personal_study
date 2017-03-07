function MyComponent(target) {
    target.prototype.test = "test입니다2"
    target.prototype.test2=()=>{
        alert("Test2");
    }
    console.log("target = ", target);

}
@MyComponent
class MyClass {
    test1() {
       console.log("test1");
    }
}

let a1:any = new MyClass();
a1.test2();