class MyClass {
    // 생성자
    constructor(data) {
        // 프로퍼티
        this.userName = data;
    }
    // 메서드
    showInfo() {
        console.log("userName =" + this.userName);
    }
}
// 인스턴스 생성
let my1 = new MyClass("ddandongne");
// 메서드/프로퍼티 호출
my1.showInfo();
//# sourceMappingURL=001_class_기본02.js.map