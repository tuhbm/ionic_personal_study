class MyParent {
    // 생성자
    constructor(data) {
        // 프로퍼티
        this.property1 = data;
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
    constructor(data1, data2) {
        super(data1);
        // 프로퍼티
        this.property2 = data2;
    }
    method3() {
        console.log("MyChild.method3() " + this.property1);
        console.log("MyChild.method3() " + this.property2);
    }
}
let m1 = new MyChild("_data1", "_data2");
m1.method1();
m1.method3(); // 실행할 수 없음.
let m2 = new MyChild("_data1", "_data2");
m2.method1();
m2.method3(); // 실행 가능 .
// 자식 타입에 부모 타입을 넣을 수 없음.
let m3 = new MyParent("_data1");
//# sourceMappingURL=002_class_접근지정자.js.map