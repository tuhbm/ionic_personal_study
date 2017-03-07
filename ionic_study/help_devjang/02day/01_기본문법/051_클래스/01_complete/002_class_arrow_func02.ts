
class MyClass {
    userName:string;
    // 생성자
    constructor(data:string) {
        // 프로퍼티
        this.userName = data;
    }

    // 메서드
    start():void {
        setTimeout(():void=>{
            alert("start()"+this.userName);
        },1000);
    }
}
let my1:MyClass = new MyClass("ddandongne");

