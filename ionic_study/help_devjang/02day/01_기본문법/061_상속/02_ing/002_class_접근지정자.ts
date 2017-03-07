
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
