class MyParent {
    // 생성자
    constructor() {
        this.property1 = "p1"; // 외부, 자식, 자신에서 접근 가능
        this.property2 = "p2"; // 외부X, 자식, 자신에서만 접근 가능
        this.property3 = "p3"; // 외부X, 자식X, 자신에서만 모두 접근 불가능
    }
    method1() {
        console.log("MyParent.method1() " + this.property1);
    }
    method2() {
        console.log("MyParent.method1() " + this.property1);
    }
}
class MyChild extends MyParent {
    // 생성자
    constructor() {
        super();
    }
    method3() {
        console.log("MyChild.method3() " + this.property1);
        console.log("MyChild.method3() " + this.property2);
        console.log("MyChild.method3() " + this.property3); //접근 불가능(에러)
    }
}
let m1 = new MyChild();
m1.method1();
m1.method2(); // 접근 불가 에러
m1.method3();
//# sourceMappingURL=002_class_접근지정자.js.map