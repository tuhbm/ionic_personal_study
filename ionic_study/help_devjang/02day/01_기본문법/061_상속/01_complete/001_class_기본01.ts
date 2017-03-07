
class MyParent {
    property1:string;
    // 생성자
    constructor(data:string) {
        // 프로퍼티
        this.property1 = data;
    }

    method1():void{
        console.log("MyParent.method1() "+this.property1);
    }
    method2():void{
        console.log("MyParent.method1() "+this.property1);
    }
}

class MyChild extends MyParent {
    property2:string;
    // 생성자
    constructor(data1:string, data2:string) {
        super(data1);
        // 프로퍼티
        this.property2 = data2;
    }
    method3():void{
        console.log("MyChild.method3() "+this.property1);
        console.log("MyChild.method3() "+this.property2);
    }
}
let m1:MyParent = new MyChild("_data1", "_data2");
m1.method1();
m1.method3(); // 실행할 수 없음. 

let m2:MyChild = new MyChild("_data1", "_data2");
m2.method1();
m2.method3(); // 실행 가능 .

// 자식 타입에 부모 타입을 넣을 수 없음.
let m3:MyChild = new MyParent("_data1");



