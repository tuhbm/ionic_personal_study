
class MyParent {
    public property1:string="p1"; // 외부, 자식, 자신에서 접근 가능
    protected property2:string="p2"; // 외부X, 자식, 자신에서만 접근 가능
    private property3:string="p3";   // 외부X, 자식X, 자신에서만 모두 접근 불가능
    // 생성자
    constructor() {

    }

    public method1():void{
        console.log("MyParent.method1() "+this.property1);
    }
    private method2():void{
        console.log("MyParent.method1() "+this.property1);
    }
}

class MyChild extends MyParent {
    private property4:string;
    // 생성자
    constructor() {
        super();
    }
    public method3():void{
        console.log("MyChild.method3() "+this.property1);
        console.log("MyChild.method3() "+this.property2);
        console.log("MyChild.method3() "+this.property3);//접근 불가능(에러)
    }
}
let m1:MyChild = new MyChild();
m1.method1();
m1.method2(); // 접근 불가 에러
m1.method3();

