class MyClass {
    
    userName:string;
    // 생성자
    constructor(data:string) {
        // 프로퍼티
        this.userName = data;
    }

    // 메서드
    private showInfo():void {
        console.log("userName =" + this.userName);
    }
}
// 인스턴스 생성
let my1:MyClass = new MyClass("ddandongne");

// 메서드/프로퍼티 호출
my1.showInfo();


